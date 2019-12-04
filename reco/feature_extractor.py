"""Extract features and build vectors using crawled wine data"""

import numpy as np
import json
import pickle
import logging

from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.tokenize import TreebankWordTokenizer
from gensim.models import FastText
from konlpy.tag import Okt


class Tokenizer:
    def __init__(self, tokenize_type='okt'):
        self.tokenize_type = tokenize_type
        if tokenize_type == 'okt':
            self.tokenizer = Okt()
        elif tokenize_type == 'treebank':
            self.tokenizer = TreebankWordTokenizer()

    def tokenize(self, sentence):
        if self.tokenize_type == 'okt':
            return [t for t, _ in self.tokenizer.pos(sentence)]
        elif self.tokenize_type == 'treebank':
            return self.tokenizer.tokenize(sentence)

    def __call__(self, sentence):
        return self.tokenize(sentence)


class FeatureExtractor:
    def __init__(self, data_path='./models/wine.json'):
        self.data_path = data_path
        self.tokenizer = Tokenizer('okt')
        self.logger = logging.Logger('feature_extractor')

    def _load_data(self, path):
        return json.load(open(path, 'r'))

    def _get_raw_sentences(self, data):
        item2sentence = {}
        raw_sentences = []
        for item_id in data:
            feat = data[item_id]
            sentence = ''
            if 'description_short' in feat:
                for splits in feat['description_short'].split('.'):
                    if len(splits) < 5:
                        continue
                    raw_sentences.append(splits)
                    sentence += splits
            if feat['contents']:
                for splits in feat['contents'].split('.'):
                    if len(splits) < 5:
                        continue
                    raw_sentences.append(splits)
                    sentence += splits
            item2sentence[item_id] = sentence
        self.logger.warning(
            '# of sentences: {}, # of items: {}'.format(len(raw_sentences),
                                                        len(item2sentence))
        )
        return item2sentence, raw_sentences

    def _train_word2vec(self, sentences, tokenizer):
        tokenized_sentences = [tokenizer.tokenize(s) for s in sentences]
        model = FastText(tokenized_sentences, min_n=2, max_n=6, iter=30)
        return model

    def _train_tfidf(self, sentences, tokenizer):
        model = TfidfVectorizer(tokenizer=tokenizer, min_df=10)
        model.fit(sentences)
        return model

    def get_text_feature(self, sentence, word2vec_model, tfidf_model):
        tfidf_score = tfidf_model.transform([sentence])
        tfidf_feature_names = tfidf_model.get_feature_names()

        feat = []
        for idx, val in zip(tfidf_score.indices, tfidf_score.data):
            word = tfidf_feature_names[idx]
            feat.append(word2vec_model[word] * val)
        return np.sum(feat, axis=0)

    def extract_text_features(self, item2sentence, word2vec_model, tfidf_model):
        feat = {}
        for item_id, sentence in item2sentence.items():
            feat[item_id] = self.get_text_feature(sentence, word2vec_model, tfidf_model)
        return feat

    def extract_taste_features(self, data):
        taste_stats = {'당도': [], '산도': [], '바디': [], '타닌': []}
        for item_id in data:
            _feat = data[item_id]
            for taste, score in _feat['taste'].items():
                if score is not None:
                    taste_stats[taste].append(int(score))
        taste_stats = {taste: np.mean(scores) for taste, scores in taste_stats.items()}

        feat = {}
        for item_id in data:
            _feat = data[item_id]
            taste_vector = np.array(
                [taste_stats[k] if v is None else v for k, v in _feat['taste'].items()]
            )
            feat[item_id] = taste_vector
        return feat

    def train_and_save_models(self):
        self.logger.warning('Load data from "{}"'.format(self.data_path))
        data = self._load_data(self.data_path)

        self.logger.warning('Get raw sentences')
        item2sentence, raw_sentences = self._get_raw_sentences(data)

        self.logger.warning('Train Word2Vec')
        word2vec_model = self._train_word2vec(raw_sentences, self.tokenizer)

        self.logger.warning('Train tf-idf')
        tfidf_model = self._train_tfidf(raw_sentences, self.tokenizer)

        self.logger.warning('Extract text features')
        text_features = self.extract_text_features(item2sentence,
                                                    word2vec_model,
                                                    tfidf_model)

        self.logger.warning('Extract taste features')
        taste_features = self.extract_taste_features(data)

        self.logger.warning('Save models...')
        pickle.dump(word2vec_model, open('./models/word2vec_model.pkl', 'wb'))
        # pickle.dump(tfidf_model, open('tfidf_model.pkl', 'wb'))
        np.save('./models/text_features.npy', text_features)
        np.save('./models/taste_features.npy', taste_features)
        self.logger.warning('Completed.')

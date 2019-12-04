"""Recommend wines using wine vectors"""

import os
import numpy as np
import pickle
from scipy.spatial.distance import cosine as cosine_distance


class Recommender:
    def __init__(self, model_dir='./models/'):
        self.model_dir = model_dir
        self._load_models()

    def _load_models(self):
        self.word2vec_model = pickle.load(
            open(os.path.join(self.model_dir, 'word2vec.model'), 'rb')
        )
        self.item_text_model = np.load(os.path.join(self.model_dir, 'item_text.model')).item()
        self.item_taste_model = np.load(os.path.join(self.model_dir, 'item_taste.model')).item()
        self.item_taste_model = {k: np.asarray(v, 'float64') for k, v in self.item_taste_model.items()}

    def recommend_by_recent_items(self, item_ids, topk=5, remove_duplicate=True):
        recent_items_vector = np.mean(
            [self.item_text_model.get(item_id) for item_id in item_ids],
            axis=0
        )
        similarities = [
            (k, 1 - cosine_distance(recent_items_vector, v)) for k, v in self.item_text_model.items()
        ]

        if remove_duplicate:
            ret = [k for k, v in sorted(similarities, key=lambda x: x[1], reverse=True) if k not in item_ids]
        else:
            ret = [k for k, v in sorted(similarities, key=lambda x: x[1], reverse=True)]
        return ret[:topk]

    def recommend_by_taste(self, taste, topk=5):
        taste = np.asarray(taste, 'float64')
        similarities = [(k, 1 - cosine_distance(taste, v)) for k, v in self.item_taste_model.items()]
        ret = [k for k, v in sorted(similarities, key=lambda x: x[1], reverse=True)]
        return ret[:topk]

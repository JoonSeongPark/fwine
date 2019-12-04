"""Send recommend results to server"""

import numpy as np
import json

from flask import Flask, request, jsonify
from recommend import Recommender

app = Flask(__name__)
user_history = {}
reco = Recommender()
user2taste = json.load(open('./models/user2taste.json', 'r'))


def item_to_json(item_ids):
    return jsonify({'recommend': item_ids})


@app.route('/')
@app.route('/recommend', methods=['POST'])
def recommend():
    args = request.get_json(force=True)

    recommend_type = args.get('type', None)
    user_id = args.get('user_id', None)
    item_ids = args.get('item_ids', [])
    recommend_items = []

    if recommend_type == 'recommend_by_recent_items':
        recommend_items = reco.recommend_by_recent_items(item_ids)

    elif recommend_type == 'recommend_by_taste':
        taste = user2taste.get(user_id, [0, 0, 0, 0])
        recommend_items = reco.recommend_by_taste(taste)

    return item_to_json(recommend_items)


if __name__ == '__main__':
    app.run(port=8000, debug=False)

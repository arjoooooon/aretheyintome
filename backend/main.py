from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import cohere

import backend.cohere_classifier2 as cohere_classifier2
from cohere_classifier import classify_friendzone

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/classify', methods=['POST'])
def classify():
    data = json.loads(request.data)
    text = data['text']

    result = classify_friendzone([text])
    prediction = result[0].prediction
    confidence = result[0].confidence
    
    returned = jsonify({
        'prediction': prediction,
        'confidence': confidence
        })

    return returned


app.run(host="0.0.0.0", port=8080)

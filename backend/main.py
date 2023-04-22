from flask import Flask, request, jsonify
import json
import cohere
from cohere_classifier import classify_friendzone

app = Flask(__name__)

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

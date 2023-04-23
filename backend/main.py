from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import cohere

from cohere_classifier2 import classify_friendzone, but_why

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/classify', methods=['POST'])
def classify():
    data = json.loads(request.data)
    text = data['text']

    pre_output = classify_friendzone([text])
    output = but_why(pre_output, text)

    result = {
            "prediction": pre_output[0].prediction,
            "confidence": pre_output[0].confidence,
            "reason": output
            } 

    return jsonify(result)


app.run(host="0.0.0.0", port=8080)

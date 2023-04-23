from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import cohere

from cohere_classifier import classify_friendzone, but_why
import openai

app = Flask(__name__)
CORS(app)

openai.api_key_path = './.env'

@app.route('/')
def index():
    return 'Hello World'

@app.route('/classify', methods=['POST'])
def classify():
    data = json.loads(request.data)
    text = data['text']
    
    pre_output = classify_friendzone([text])
    output = but_why(pre_output, [text])

    result = {
            "prediction": pre_output[0].prediction,
            "confidence": pre_output[0].confidence,
            "reason": output
            } 

    return jsonify(result)

@app.route('/test', methods=['POST'])
def test():
    data = json.loads(request.data)
    text = data['text']

    response = openai.Completion.create(
            model="gpt-3.5-turbo",
            prompt=text,
            temperature=0.6,
        )

    print(response)
    return response.choices[0].text



app.run(host="0.0.0.0", port=8080, ssl_context='adhoc')

from flask import Flask
import json
import cohere
from cohere.classify import Example
import backend.cohere_classifier2 as cohere_classifier2

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/classify')
def classify():
    return cohere_classifier2.classify_friendzone


app.run(host="0.0.0.0", port=8080)

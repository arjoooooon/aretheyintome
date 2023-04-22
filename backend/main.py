from flask import Flask
import json
import cohere
from cohere.classify import Example

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/classify')
def classify():
    return "bruh"


app.run(host="0.0.0.0", port=8080)

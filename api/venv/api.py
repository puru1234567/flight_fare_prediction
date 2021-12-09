from os import error
import time
from flask import Flask, request, jsonify
import pickle

from flask.helpers import url_for
from werkzeug.utils import redirect
# import pandas as pd
# model = pickle.load(open("flight_rf.pkl", "rb"))


app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route("/predict", methods=["POST", "GET"])
def predict():
    
    if request.method == "POST":
        s="dd"
        print("hello hello")
        return {"s":s}
    else:
        b="didn't work"
        return b

if __name__ == "__main__":
    app.run(debug=True)


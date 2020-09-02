from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/write', methods=['POST'])
def write():
    f = open('results_01.txt', 'a')
    f.write(request.data.decode('utf-8'))
    f.close()
    return 'OK', 200

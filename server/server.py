from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
	return 'Hello world'
	# visit 0.0.0.0:3000 to see this text

@app.route("/getData")
def getData():
	# load json data from file
	file_handle = open('data.json')
	data = json.load(file_handle)
	return jsonify(data)

@app.route('/sendUserData', methods=["POST"])
def sendData():
	print(request.get_json())
	return 'OK'

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=3000, debug=True)
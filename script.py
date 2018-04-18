import json

data = json.load(open('data.json'))

for key, value in data.items():
	print(key, value)
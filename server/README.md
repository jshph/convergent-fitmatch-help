Instructions for installing:

Install ngrok from the following site. You need to use ngrok to allow the React Native app to fetch data from your locally hosted Flask app. ngrok is the tool that sets up a tunnel to your localhost port, `0.0.0.0:3000` which is great for testing.

Run the following in terminal from root directory:
```
pip install -r requirements.txt
python server.py
```

In a separate window/tab, run `ngrok http 0.0.0.0:3000`.

Then, in the call to `fetch()`, change the URL to the ngrok url (it will be something like `http://1ojgs112io.ngrok.io/getData`)
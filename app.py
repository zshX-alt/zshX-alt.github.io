from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")

@app.route("/")
def home():
    return jsonify({"status":"Gemini AI aktif"})

@app.route("/chat", methods=["POST"])
def chat():
    try:

        data=request.json
        message=data.get("message","")

        response=model.generate_content(message)

        return jsonify({
            "reply":response.text
        })

    except Exception as e:
        return jsonify({
            "error":str(e)
        }),500


if __name__ == "__main__":
    port=int(os.environ.get("PORT",8080))
    app.run(host="0.0.0.0",port=port)
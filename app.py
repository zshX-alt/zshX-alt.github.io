from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
import os

app = Flask(__name__)
CORS(app)

# Ambil API key dari environment (Railway)
API_KEY = os.environ.get("GEMINI_API_KEY")

# Client Gemini
client = genai.Client(api_key=API_KEY)

# Endpoint cek server
@app.route("/")
def home():
    return jsonify({
        "status": "AI Server Aktif",
        "model": "gemini-1.5-flash-latest"
    })

# Endpoint chat AI
@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.json
        message = data.get("message", "")

        response = client.models.generate_content(
            model="gemini-1.5-flash-latest",
            contents=message
        )

        return jsonify({
            "user": message,
            "reply": response.text
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# Jalankan server (Railway akan pakai PORT otomatis)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
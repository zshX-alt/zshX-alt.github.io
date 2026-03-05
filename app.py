from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"status":"API aktif"})

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    pesan = data.get("message","")

    balasan = [
        "Menarik juga.",
        "Coba jelaskan lebih detail.",
        "Hmm... logikanya masuk.",
        "Kamu yakin dengan itu?",
        "Aku sedang memproses idemu."
    ]

    return jsonify({
        "user": pesan,
        "reply": random.choice(balasan)
    })
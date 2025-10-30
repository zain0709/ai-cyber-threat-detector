# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

app = Flask(__name__)
CORS(app)

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
model = AutoModelForSequenceClassification.from_pretrained(
    "distilbert-base-uncased"
)

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("input", "")
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    return jsonify({"result": int(outputs.logits.argmax().item())})

if __name__ == "__main__":
    app.run(debug=True)

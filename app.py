from flask import Flask, request, render_template, jsonify
import joblib
import numpy as np
import os

app = Flask(__name__)
model = joblib.load("models/iris_model.pkl")

# HTML route for users
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

# JSON API endpoint for JS fetch
@app.route("/predict", methods=["POST"])
def predict():
    try:
        if request.is_json:
            data = request.get_json()
            features = np.array(data["features"]).reshape(1, -1)
            prediction = model.predict(features)
            return jsonify({"prediction": int(prediction[0])})
        else:
            return jsonify({"error": "Invalid input. Expecting JSON."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5050))
    app.run(debug=True, host="0.0.0.0", port=port)
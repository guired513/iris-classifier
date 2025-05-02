from flask import Flask, request, render_template
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("models/iris_model.pkl")

@app.route("/", methods=["GET", "POST"])
def index():
    prediction = None
    description = None
    flower_map = {
        0: ("Iris Setosa", "Small and delicate flower, usually light pink or purple."),
        1: ("Iris Versicolor", "Moderate size and color, often bluish-purple."),
        2: ("Iris Virginica", "Larger flower, vibrant violet-blue shades.")
    }

    if request.method == "POST":
        try:
            features = [
                float(request.form["sepal_length"]),
                float(request.form["sepal_width"]),
                float(request.form["petal_length"]),
                float(request.form["petal_width"]),
            ]
            result = model.predict([features])[0]
            prediction, description = flower_map[result]
        except Exception as e:
            prediction = "Error"
            description = str(e)

    return render_template("index.html", prediction=prediction, description=description)

if __name__ == "__main__":
    app.run(debug=True)
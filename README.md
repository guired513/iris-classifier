# 🌸 Iris Flower Classifier – ML Web App with Flask

This project is a web-based machine learning application that predicts the **species of an iris flower** based on four user-provided measurements: sepal length, sepal width, petal length, and petal width. It uses a RandomForestClassifier trained on the classic Iris dataset from scikit-learn and is deployed using Flask and Render.

---

## 🔗 Live Demo

👉 [Click here to try it live](https://iris-classifier-xian.onrender.com)  
(*Note: free Render apps may take a few seconds to start after inactivity*)

---

## 🎯 Features

- 🌱 Train a Random Forest model on the Iris dataset
- 🌼 Web form interface for user inputs
- 🧠 Predicts flower species based on 4 features
- 📝 Displays flower name and brief description
- 🌍 Deployed online via Render

---

## 🧰 Tech Stack

| Layer          | Technology                    |
|----------------|-------------------------------|
| **Backend**    | Python, Flask, scikit-learn   |
| **Frontend**   | HTML (Jinja2 templating)      |
| **Model**      | RandomForestClassifier        |
| **Hosting**    | Render.com                    |
| **IDE**        | Visual Studio Code            |
| **Versioning** | Git + GitHub                  |

---

## 💻 How to Run Locally

### 📦 Prerequisites

- Python 3.x
- pip
- Git
- VS Code (recommended)

### 🧪 Step-by-Step

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/iris-classifier.git
cd iris-classifier

# 2. Create virtual environment
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Train the model (optional, already included)
python train_model.py

# 5. Run the app
python app.py
```

Open your browser and go to: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🧪 API Usage (Optional JSON API)

**Endpoint:** `POST /predict`  
**Content-Type:** `application/json`

### 🔧 Example Request:
```json
{
  "features": [5.1, 3.5, 1.4, 0.2]
}
```

### ✅ Example Response:
```json
{
  "prediction": 0
}
```

> The numeric prediction maps to:
> - 0: Iris Setosa
> - 1: Iris Versicolor
> - 2: Iris Virginica

---

## 📁 Project Structure

```
iris-classifier/
├── app.py                # Flask app with prediction route and HTML rendering
├── train_model.py        # Script to train and save the ML model
├── models/
│   └── iris_model.pkl    # Serialized trained model
├── templates/
│   └── index.html        # HTML form for predictions
├── requirements.txt      # Python dependencies
├── Procfile              # Render deployment instruction
├── .gitignore
└── README.md
```

---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this code for personal or commercial purposes with attribution.

---

## 🙏 Acknowledgments

- [scikit-learn](https://scikit-learn.org/stable/) – for dataset and ML tools  
- [Flask](https://flask.palletsprojects.com/) – for the lightweight Python web framework  
- [Render](https://render.com/) – for easy and free deployment  
- [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/iris) – for the original Iris dataset  
- Inspired by early ML examples like the Iris Classifier used in academic courses

---

## 👤 Author

**Guillermo V. Red, Jr., DIT**  
Assistant Professor, Researcher, and AI Enthusiast  
📍 Bicol University, Philippines  
🔗 [GitHub](https://github.com/guired513)

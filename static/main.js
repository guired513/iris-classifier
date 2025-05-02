document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("iris-form");
    const resultDiv = document.getElementById("result");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const data = {
        features: [
          parseFloat(document.getElementById("sepal_length").value),
          parseFloat(document.getElementById("sepal_width").value),
          parseFloat(document.getElementById("petal_length").value),
          parseFloat(document.getElementById("petal_width").value),
        ],
      };
  
      try {
        const response = await fetch("/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
  
        const labelMap = {
          0: "Iris Setosa 🌸",
          1: "Iris Versicolor 🌼",
          2: "Iris Virginica 🌺"
        };
  
        resultDiv.innerHTML = `<h2>Prediction: ${labelMap[result.prediction]}</h2>`;
      } catch (err) {
        resultDiv.innerHTML = `<p>Error: ${err.message}</p>`;
      }
    });
  });
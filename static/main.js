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
          0: {
            name: "Iris Setosa 🌸",
            description: "A small and delicate flower with light colors.",
          },
          1: {
            name: "Iris Versicolor 🌼",
            description: "A mid-sized flower with vibrant bluish-purple petals.",
          },
          2: {
            name: "Iris Virginica 🌺",
            description: "A large flower with deep violet-blue tones.",
          },
        };
  
        const label = labelMap[result.prediction];
  
        resultDiv.innerHTML = `
          <div class="card shadow-sm p-3">
            <h3 class="text-success">${label.name}</h3>
            <p class="mb-0">${label.description}</p>
          </div>
        `;
      } catch (err) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Error: ${err.message}</div>`;
      }
    });
  });
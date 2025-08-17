function FuncCat() {
      fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
          document.getElementById('fact').innerText = data.fact;
        })
        .catch(error => {
          document.getElementById('fact').innerText = "Failed to fetch cat fact.";
          console.error(error);
        });
    }


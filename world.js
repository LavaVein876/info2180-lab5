document.addEventListener("DOMContentLoaded", () => {
  const lookupBtn = document.getElementById("lookup");
  const countryInput = document.getElementById("country");
  const resultDiv = document.getElementById("result");

  lookupBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const country = countryInput.value.trim();

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          
          resultDiv.innerHTML = xhr.responseText;
        } else {
          resultDiv.textContent = "There was an issue with the request.";
        }
      }
    };

    const url = `world.php?country=${encodeURIComponent(country)}`;
    xhr.open("GET", url, true);
    xhr.send();
  });
});

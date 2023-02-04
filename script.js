const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!isEmail(input.value.trim())) {
    let error = document.querySelector("#error");
    error.style.color = "#ff0000";
    error.innerHTML = "Por favor, preencha este campo";
    input.style.borderColor = "#ff0000";
  } else {
    error.style.color = "#00ff00";
    error.innerHTML = "Tudo certo!";
    input.style.borderColor = "#00ff00";
  }
});

// pattern to validation
function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

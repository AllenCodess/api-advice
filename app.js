// dom elements

const adviceEl = document.querySelector(".description");
const btnidEl = document.querySelector("#btnid");

//event listener
btnidEl.addEventListener("click", getAdvice);

// function

function getAdvice() {
  // request the information then converts it into json
  fetch("https://api.adviceslip.com/advice").then(function (response) {
    return response.json();
  });
}

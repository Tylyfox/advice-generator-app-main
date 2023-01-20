let adviceResult = document.querySelector(".advice");
let idAdvice = document.querySelector(".idAdvice");
let randomButton = document.querySelector(".randomButton");

randomButton.addEventListener("click", () => {
  getAdvice();
});

window.addEventListener("load", () => {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice?t=" + Math.random())
    .then((resp) => resp.json())
    .then((data) => {
      let dataResults = data.slip;
      console.log(dataResults);
      idAdvice.innerHTML = `<h2>Advice #${dataResults.id}</h2>`;
      adviceResult.innerHTML = `<p>“${dataResults.advice}”</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

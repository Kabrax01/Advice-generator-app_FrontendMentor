"use strict";

const adviceNumber = document.querySelector("#advice__number");
const advice = document.querySelector("#advice");
const dice = document.querySelector("#random__dice");
const container = document.querySelector("#container");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceApi = await response.json();
  console.log(adviceApi);

  adviceNumber.textContent = `ADVICE #${adviceApi.slip.id}`;
  advice.textContent = `"${adviceApi.slip.advice}"`;
}

getAdvice();

dice.addEventListener("click", getAdvice);

window.addEventListener("load", (e) => {
  container.classList.add("show");
});

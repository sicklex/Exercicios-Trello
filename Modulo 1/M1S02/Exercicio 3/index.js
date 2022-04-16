const corDeFundo = ["#000000", "#1A1A1A", "#1A3D4C"];
const corDosElementosSobrepostos = ["#E6E6E6", "#CCCCCC", "#0D2526"];
const corDoTexto = ["white", "black"];
const buttonEl = document.querySelector("#button-el");
const body = document.querySelector("body");
const pElement = document.querySelector("p");
const divEl = document.querySelector(".div-container");

buttonEl.addEventListener("click", () => {
  body.style.backgroundColor =
    corDeFundo[Math.floor(Math.random() * corDeFundo.length)];
  pElement.style.color =
    corDoTexto[Math.floor(Math.random() * corDoTexto.length)];
  divEl.style.backgroundColor =
    corDosElementosSobrepostos[
      Math.floor(Math.random() * corDosElementosSobrepostos.length)
    ];
});

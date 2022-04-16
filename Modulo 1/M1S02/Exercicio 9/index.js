const bodyEl = document.querySelector("body");
let palavra = "";
let array = [];

do {
  if (palavra !== "") {
    array.push(palavra);
  }
  palavra = prompt("Digite uma palavra");
} while (palavra !== "parar");

for (let ordemNumerica of array.sort((a, b) => b.length - a.length)) {
  bodyEl.innerHTML += `<section><p>${ordemNumerica}</section></p>`;
}

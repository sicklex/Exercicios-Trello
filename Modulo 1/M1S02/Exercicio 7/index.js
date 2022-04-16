const div = document.querySelector("div");

var textos = ["animal", "carro", "humano", "prédio", "cadeira", "objeto"];

textos.sort();

for (var ordemAlfabetica of textos) {
  div.innerHTML += `<p>${ordemAlfabetica}<p>`;
}

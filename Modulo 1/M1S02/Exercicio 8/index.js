const divEl = document.querySelector("div");
var textos = ["animal", "carro", "humano", "prédio", "cadeira", "objeto"];
var textosEmNumero = textos.sort((a, b) => b.length - a.length);
console.log(textosEmNumero);
for (var htmlShow of textos) {
  divEl.innerHTML = `<p>${textosEmNumero}<p>`;
}

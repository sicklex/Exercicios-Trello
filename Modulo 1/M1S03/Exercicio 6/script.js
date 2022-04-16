const btn = document.querySelector(".btn");

let linha = `
<label for="Nome">Endereço Completo:</label>
        <input type="text" placeholder="Nome" />`;

function insertLinha() {
  btn.insertAdjacentHTML("beforebegin", linha);
}

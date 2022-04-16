const btn = document.querySelector(".btn");
let contador = 0;
let myLeads = [];
let linha = `
<label for="Nome">Endereço Completo:</label>
        <input type="text" placeholder="Nome" class="endereco" />`;

function insertLinha() {
  btn.insertAdjacentHTML("beforebegin", linha);
  obj.linhaHtml = linha;
}

function salvarForm() {
  contador = 0;
  contador = contador + 1;
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const sobrenome = document.querySelector("#sobrenome");
  const endereco = document.querySelector("#endereco");
  const telefone = document.querySelector("#telefone");
  let obj = new Object();
  obj.nome = nome.value;
  obj.email = email.value;
  obj.sobrenome = sobrenome.value;
  obj.endereco = endereco.value;
  obj.telefone = telefone.value;
  myLeads.push(obj);
  setStorage();
}

function setStorage() {
  localStorage.setItem("leads", JSON.stringify(myLeads));
}

function getStorage() {
  myLeads = JSON.parse(localStorage.getItem("leads"));
}

function onload() {
  getStorage();
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${myLeads.length} formulario cadastrados`;
}

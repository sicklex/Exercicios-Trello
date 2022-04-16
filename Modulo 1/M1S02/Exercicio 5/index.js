const containerMain = document.querySelector(".main-container");

let quantidadeItens;

// verifica se o numero esta entre 1 e 10
do {
  quantidadeItens = prompt("Digite um numero de 1 a 10");
  if (quantidadeItens < 1 || quantidadeItens > 10) {
    alert("Digite um numero entre 1 e 10");
  }
} while (quantidadeItens < 1 || quantidadeItens > 10);

// Cria elementos html
for (let i = 1; i <= quantidadeItens; i++) {
  console.log(i);
  containerMain.innerHTML += `<div class='section-container'><section class='img-container' id='cachorro${i}' style=''></section><section class='img-container' id='gato${i}' style=''></section></div>`;

  // Fetch para pegar a imagem do cachorro
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {
      var resultado = json.message;
      var cachorro = document.getElementById(`cachorro${i}`);
      cachorro.style.backgroundImage = "url('" + resultado + "')";
    });

  // Fetch para pegar a imagem do gato
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {
      var resultado = json[0]["url"];
      var gato = document.getElementById(`gato${i}`);
      gato.style.backgroundImage = "url('" + resultado + "')";
    });
}

const bodyEl = document.querySelector("body");
const divEl = document.querySelector(".div-el");
const btnEl = document.querySelector(".container-btn");

btnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = "";
  divEl.style.background = "";
  let contadorMaior = 0;
  let contadorMenor = 0;
  let contadorCentena = 0;
  for (let i = 1; i <= 1000; i++) {
    let numero = Math.floor(Math.random() * 1000);
    let holder = numero;
    if (holder > 500 && holder <= 1000) {
      contadorMaior++;
    } else {
      contadorMenor++;
    }
    if (holder == 100) {
      contadorCentena++;
    }
  }

  if (contadorCentena === 1) {
    bodyEl.style.backgroundColor = "orange";
  } else if (contadorCentena > 1) {
    bodyEl.style.backgroundColor = "black";
  } else if (contadorMaior > contadorMenor) {
    divEl.style.background =
      "url('https://picsum.photos/200/300') no-repeat center center";
  } else {
    divEl.style.background =
      "url('https://via.placeholder.com/500') no-repeat center center";
  }
  console.log(contadorCentena);
  console.log(contadorMaior + " Numero Maior");
  console.log(contadorMenor + " Numero Menor");
});

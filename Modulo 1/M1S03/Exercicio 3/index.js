// const operadorEl = document.querySelectorAll(".operador");
// const inputEl = document.querySelector(".input");
// const igualEl = document.querySelector(".igual");
// const resultadoEl = document.querySelector(".resultado");
// let valorAtual = 0;
// let valorDigitado = "";
// let clickedOperator;
// let resultado = 0;
// operadorEl.forEach(element => {
//   element.addEventListener("click", function () {
//     clickedOperator = element.value;
//     valorDigitado = inputEl.value;
//     calcular(clickedOperator);
//   });
// });

// function calcular(operador) {
//   switch (operador) {
//     case "+":
//       resultado = parseFloat(valorAtual) + parseFloat(valorDigitado);
//       valorAtual = resultado;
//       valorDigitado.toString();
//       resultadoEl.innerHTML = `${resultado}`;
//       valorDigitado = "";
//       inputEl.value = "";
//       break;
//     case "-":
//       resultado = parseFloat(valorDigitado) - parseFloat(valorAtual);
//       valorAtual = resultado;
//       valorDigitado.toString();
//       resultadoEl.innerHTML = `${resultado}`;
//       valorDigitado = "";
//       inputEl.value = "";
//       break;
//     case "x":
//       resultado = parseFloat(valorAtual) * parseFloat(valorDigitado);
//       valorAtual = resultado;
//       valorDigitado.toString();
//       resultadoEl.innerHTML = `${resultado}`;
//       valorDigitado = "";
//       inputEl.value = "";
//       break;
//     case "/":
//       resultado = parseFloat(valorAtual) / parseFloat(valorDigitado);
//       valorAtual = resultado;
//       valorDigitado.toString();
//       resultadoEl.innerHTML = `${resultado}`;
//       valorDigitado = "";
//       inputEl.value = "";
//       break;
//   }
// }

const operadorEl = document.querySelectorAll(".operador");
const inputEl = document.querySelector(".input");
const igualEl = document.querySelector(".igual");
const resultadoEl = document.querySelector(".resultado");

let valorInput = [];

operadorEl.forEach(element => {
  element.addEventListener("click", function () {
    if (element.value !== "=") {
      valorInput.push(inputEl.value, element.value);
      inputEl.value = valorInput.join(" ");
      inputEl.value = "";
    } else if (element.value === "=") {
      valorInput.push(inputEl.value);
      let valorEmString = valorInput.toString();
      valorEmString = valorEmString.replace(/,/g, "");
      console.log(valorEmString);
      resultadoEl.innerHTML = eval(valorEmString);
      console.log(eval(valorEmString));
      valorInput = [];
    }
  });
});

function evil(fn) {
  return new Function("return " + fn)();
}

/* const operadorEl = document.querySelectorAll(".operador");
const inputEl = document.querySelector(".input");
const igualEl = document.querySelector(".igual");
const resultadoEl = document.querySelector(".resultado");
let validaOperador = "";
let valorUm = "";
let valorDois = "";

operadorEl.forEach(element => {
  let operador = element.value;
  element.addEventListener("click", function () {
    calculo(operador);
    if (validaOperador == "+" && operador == "=") {
      valorDois = inputEl.value;
      valorDois = parseFloat(valorDois);
      valorUm = parseFloat(valorUm);
      resultadoEl.innerHTML = valorUm + valorDois;
    } else if (validaOperador == "-" && operador == "=") {
      valorDois = inputEl.value;
      valorDois = parseFloat(valorDois);
      valorUm = parseFloat(valorUm);
      resultadoEl.innerHTML = valorUm - valorDois;
    } else if (validaOperador == "x" && operador == "=") {
      valorDois = inputEl.value;
      valorDois = parseFloat(valorDois);
      valorUm = parseFloat(valorUm);
      resultadoEl.innerHTML = valorUm * valorDois;
    } else if (validaOperador == "/" && operador == "=") {
      valorDois = inputEl.value;
      valorDois = parseFloat(valorDois);
      valorUm = parseFloat(valorUm);
      resultadoEl.innerHTML = valorUm / valorDois;
    }
  });
});

function calculo(operadorClicked) {
  switch (operadorClicked) {
    case "+":
      valorUm = inputEl.value;
      inputEl.value = "";
      validaOperador = "+";
      break;
    case "-":
      valorUm = inputEl.value;
      inputEl.value = "";
      validaOperador = "-";
      break;
    case "*":
      valorUm = inputEl.value;
      inputEl.value = "";
      validaOperador = "x";
      break;
    case "/":
      valorUm = inputEl.value;
      inputEl.value = "";
      validaOperador = "/";
      break;
  }
}
 */

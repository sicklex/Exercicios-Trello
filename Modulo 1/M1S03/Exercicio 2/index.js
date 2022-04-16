const btnEl = document.querySelector(".btn");
const resultadoEl = document.querySelector(".resultado");

btnEl.addEventListener("click", () => {
  const inpuntEl = document.querySelector(".input-number").value;
  if (verificaParImpar(inpuntEl)) {
    resultadoEl.innerHTML = `Restauldo: O número digitado é um número par.`;
  } else {
    resultadoEl.innerHTML = `Restauldo: O número digitado é um número ímpar.`;
  }
});

function verificaParImpar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

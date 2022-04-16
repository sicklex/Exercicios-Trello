// Crie uma tela com 2 campos de texto e 1 botão enviar, o campo 1 será o valor total
// e o campo 2 será o valor de desconto que será aplicado em percentual,
// ao clicar no botão enviar deverá exibir na tela o valor total,
// valor total subtraindo desconto e o valor do desconto.
const resultado = document.querySelector(".resultado");
let valorFinal = 0;

function calculaPorcentagem() {
  const valorTotal = document.querySelector(".valorTotal");
  const porcentagem = document.querySelector(".porcentagem");
  calculo(porcentagem.value, valorTotal.value);
  resultado.innerHTML = `<p>Valor total: ${valorTotal.value}</p>
  <p>Valor com desconto: ${valorTotal.value - valorFinal}</p>
  <p>Valor do desconto: ${valorFinal}</p>`;
}

function calculo(porcento, valor) {
  valorFinal = (porcento / 100) * valor;
}

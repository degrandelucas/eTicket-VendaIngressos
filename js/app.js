let disponivelPista = 0;
let disponivelCadeiraSuperior = 0;
let disponivelCadeiraInferior = 0;

function comprar() {
  //pegar os valores formulario de compra
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let quantidade = parseInt(document.getElementById("qtd").value);

  //pegar os valores disponíveis para assento
  disponivelPista = parseInt(document.getElementById("qtd-pista").textContent);
  disponivelCadeiraSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  disponivelCadeiraInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );

  //verificar se o valor solicitado é menor que o disponível
  if (tipoIngresso == "inferior") {
    if (quantidade <= disponivelCadeiraInferior) {
      disponivelCadeiraInferior = disponivelCadeiraInferior - quantidade;
      document.getElementById("qtd-inferior").textContent =
        disponivelCadeiraInferior;
      alert("Ingresso comprado com sucesso!");
    } else {
      alert("Quantidade solicitada indisponível no momento!");
    }
  } else if (tipoIngresso == "superior") {
    if (quantidade <= disponivelCadeiraSuperior) {
      disponivelCadeiraSuperior = disponivelCadeiraSuperior - quantidade;
      document.getElementById("qtd-superior").textContent =
        disponivelCadeiraSuperior;
      alert("Ingresso comprado com sucesso!");
    } else {
      alert("Quantidade solicitada indisponível no momento!");
    }
  } else if (tipoIngresso == "pista") {
    if (quantidade <= disponivelPista) {
      disponivelPista = disponivelPista - quantidade;
      document.getElementById("qtd-pista").textContent = disponivelPista;
      alert("Ingresso comprado com sucesso!");
    } else {
      alert("Quantidade solicitada indisponível no momento!");
    }
  }
}

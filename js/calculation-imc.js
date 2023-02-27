// Alterando Nome ;
var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

//  Fazer calculo do IMC da tabela;
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValid = validaPeso(peso);
  var alturaValid = validaAltura(altura);

  if (!pesoValid) {
    console.log("peso inválido");
    pesoValid = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValid) {
    console.log("altura inválido");
    alturaValid = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValid && pesoValid) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso >=0 && peso < 500){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.00){
    return true;
  } else {
    return false;
  }
}


function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
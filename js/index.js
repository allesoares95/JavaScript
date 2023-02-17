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

  var pesoValid = true;
  var alturaValid = true;

  if (peso <= 0 || peso >= 500) {
    console.log("peso inválido");
    pesoValid = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00) {
    console.log("altura inválido");
    alturaValid = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValid && pesoValid) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

//add paciente;
var buttonAdicionar = document.querySelector("#adicionar-paciente");
buttonAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  // adicionando um elemento filho dentro de um elemento pai
  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = imc;
  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  console.log(pacienteTr);

});
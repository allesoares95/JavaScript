//add paciente;
var buttonAdicionar = document.querySelector("#adicionar-paciente");
buttonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var error = validaPaciente(paciente);
  console.log(error);
  if (error.length > 0) {
    exibeMensagensError(error);
    return;
  }

  // adicionando o paciente na tabela;
  addPacienteTable(paciente);

  form.reset();
  var mensagemErro = document.querySelector("#mensagem-erro")
  mensagemErro.innerHTML = "";
});

// add paciente table APIs
function addPacienteTable(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

// Criação de elemento filho dentro do elemento pai no form;
function exibeMensagensError(error) {
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";

  error.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td
}

// Paciente invalido;
function validaPaciente(paciente) {
  var error = [];

  if (paciente.nome.length == 0) {
    error.push("Nome não pode ser em branco.");
  }

  if (!validaPeso(paciente.peso)) {
    error.push("Peso é inválido !")
  }

  if (!validaAltura(paciente.altura)) {
    error.push("Altura é inválida !")
  }

  if (paciente.gordura.length == 0) {
    error.push("Gordura do paciente não pode ser em branco")
  }

  if (paciente.peso.length == 0) {
    error.push("Peso não pode ser em branco")
  }

  if (paciente.altura.length == 0) {
    error.push("Altura não pode ser em branco")
  }

  return error;
};

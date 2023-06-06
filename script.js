function validarFormulario() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let data = document.getElementById("data");
  let rua = document.getElementById("rua");
  let complemento = document.getElementById("complemento");
  let logradouro = document.getElementById("logradouro");
  let cidade = document.getElementById("cidade");
  let senha = document.getElementById("senha");
  let confirmarSenha = document.getElementById("confirmarSenha");

  styleForm(nome, "#f45656", "#008000");
  styleForm(email, "#f45656", "#008000");
  styleForm(data, "#f45656", "#008000");
  styleForm(rua, "#f45656", "#008000");
  styleForm(complemento, "#f45656", "#008000");
  styleForm(logradouro, "#f45656", "#008000");
  styleForm(cidade, "#f45656", "#008000");
  styleForm(senha, "#f45656", "#008000");
  styleForm(confirmarSenha, "#f45656", "#008000");
}

function styleForm(input, colorRed, colorGreen) {
  if (!input.checkValidity()) {
    return (input.style.border = `3px solid ${colorRed}`);
  } else {
    return (input.style.border = `2px solid ${colorGreen}`);
  }
}


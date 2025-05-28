import rl from 'readline-sync';


//Declaração de função

function verificarSenha(senha) {
  if (senha.length < 8) {
    return "Senha incorreta! Deve ter no mínimo 8 caracteres.";
  }
  if (!/[A-Z]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos uma letra maiúscula.";
  }
  if (!/[a-z]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos uma letra minúscula.";
  }
  if (!/[^a-zA-Z0-9]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos um caractere especial.";
  }
  return "Senha correta!";
}

let mensagem;
do {
  let senha = rl.question("Digite a senha: ");
  mensagem = verificarSenha(senha);
  console.log(mensagem);
} while (mensagem !== "Senha correta!");


//Expressão de função
const validarSenha = function(senha) {
  if (senha.length < 8) {
    return "Senha incorreta! Deve ter no mínimo 8 caracteres.";
  }
  if (!/[A-Z]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos uma letra maiúscula.";
  }
  if (!/[a-z]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos uma letra minúscula.";
  }
  if (!/[^a-zA-Z0-9]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos um caractere especial.";
  }
  return "Senha correta!";
};

let msg;
do {
  let senha = rl.question("Digite a senha: ");
  msg = validarSenha(senha);
  console.log(msg);
} while (msg !== "Senha correta!");


//Arrow

const verSenha = (senha) => {
  if (senha.length < 8) {
    return "Senha incorreta! Deve ter no mínimo 8 caracteres.";
  }
  if (!/[A-Z]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos uma letra maiúscula.";
  }
  if (!/[a-z]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos uma letra minúscula.";
  }
  if (!/[^a-zA-Z0-9]/.test(senha)) {
    return "Senha incorreta! Deve ter pelo menos um caractere especial.";
  }
  return "Senha correta!";
};

let mensa;
do {
  let senha = rl.question("Digite a senha: ");
  mensa = verSenha(senha);
  console.log(mensa);
} while (mensa !== "Senha correta!");

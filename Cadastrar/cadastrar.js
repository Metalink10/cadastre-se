const txtNome = document.getElementById("errorNome");
const txtSenha = document.getElementById("errorSenha");
const txtEmail = document.getElementById("errorEmail");
const msg = document.getElementById("msgSucesso");

function cadastrarUsuarios() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const email = document.getElementById("email").value;

  

  if (nome  && senha && email ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
    listaUser.push({
      nomeCad: nome,
      emailCad: email,
      senhaCad: senha
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    msg.setAttribute("style", "display: block")

    setTimeout(() => {
      window.location.href = 'https://tela-de-login-azure-five.vercel.app/';
    },2000)
  }else if(nome === "" && email ==="" && senha === "" ) {
    txtNome.innerHTML =  "Preencha o campo";
    txtEmail.innerHTML =  "Preencha o campo";
    txtSenha.innerHTML =  "Preencha o campo";
  }
};

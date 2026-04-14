const btn_login = document.querySelector("#login-btn");
const sair = document.querySelector("#sair-btn");
sair.addEventListener("click", () => {
  localStorage.clear();
  window.location.replace("../inicio/inicio.html");
});

btn_login.addEventListener("click", () => {
  window.location.replace("../login/login.html");
});

const nomeUsuario = localStorage.getItem("nome");

if (nomeUsuario) {
  btn_login.remove();
} else {
  sair.remove();
}

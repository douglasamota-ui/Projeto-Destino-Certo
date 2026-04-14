 //realizar login

const api = "http://localhost:3000/";

 const form = document.querySelector("form")
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    const resposta = await fetch(`${api}usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    });
  
    if (resposta.status == 200) {
      const usuarios = await resposta.json();
      localStorage.setItem("id", usuarios.id_user);
      localStorage.setItem("nome", usuarios.nome);
      localStorage.setItem("nivel", usuarios.nivel);
      if (usuarios.nivel == 2) {
        return (window.location.href = "../Crud/adm.html");
      }
      return (window.location.href = "../inicio/inicio.html");
    } else {
      alert("Usuario ou senha incorretos");
    }
  });
const api = "http://localhost:3000/";
document.querySelector("#signupForm").addEventListener("submit", async (e) => {
  e.preventDefault(); 

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
console.log(nome, email, senha);
  const resposta = await fetch(`${api}cadastro/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      nome,
      email,
      senha
    }),
  });

  if (resposta.status == 200) {
    alert("Cadastrado com sucesso!");
    window.location.href = "../login/login.html";
  } else {
    return alert("Email ja cadastrado.");
  }
});

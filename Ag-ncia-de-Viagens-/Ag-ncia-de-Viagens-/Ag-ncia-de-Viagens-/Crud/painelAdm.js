const form = document.querySelector("form");
const div = document.querySelector("#Vazia");

import api from "../api.js";

//Rota de Listar
window.addEventListener("load", async () => {
    const resposta = await fetch(`http://${api}/Listar_Agendamentos`);
    const data = await resposta.json();

    data.forEach((element) => {
        const card = document.createElement("div");
        card.innerHTML =
            `  <h1>${element.nome_comp}</h1>
            <p>${element.email}</p>
            <p>${element.num_pessoas}</p>
            <p>${element.data_inicio}</p>
            <p>${element.data_fim}</p>
            <p>${element.forma_pag}</p>
            <p>${element.valor}</p>
            <button onclick="Editar(${element.id_agd})">✏️</button>
            <button onclick="Deletar(${element.id_agd})">🗑️</button>
            `


        div.appendChild(card)
    }
    );


});

//Rota de Cadastro
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome_completo = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const hotel = document.querySelector("#hotel").value
    const data_fim = document.querySelector("#saida").value
    const data_inicio = document.querySelector("#entrada").value
    console.log(nome_completo, email, hotel, data_fim, data_inicio);
    const resposta = await fetch("http://localhost:3000/Criar_Agendamento", {
        method: "POST",
        headers: {
            "Content-Type": "application/json ",

        },
        body: JSON.stringify({
            nome_completo,
            email,
            hotel,
            data_fim,
            data_inicio
        }),
    },

    );
    if (resposta.status == 200) {
        alert("Cadastrado!");

    } else {
        alert("Cadastro inválido")
    }
});



//Rota de Deletar
async function Deletar(id) {
    const resposta = await fetch(`http://localhost:3000/Apagar_Agendamento/${id}`, {
        method: 'DELETE',
    });
    if (resposta.status == 200) {
        alert("Cadastro Deletado!")
        return window.location.reload();
    }
    return alert('Erro ao deletar.')
}


//Rota de Editar 
async function Editar(id) {

    const resposta = await fetch(`http://localhost:3000/Agendamentos/${id}`)

    const objeto = await resposta.json();


    const nome_comp = prompt("insira seu nome", objeto.nome_comp)
    const num_pessoas = prompt("insira o numero de pessoas", objeto.num_pessoas)
    const forma_pag = prompt("insira a forma de pagamento", objeto.forma_pag)
    const email = prompt("insira seu email", objeto.email)
    const valor = prompt("insira o valor", objeto.valor)    
    const data_fim = prompt("insira a data de fim", objeto.data_fim)
    const data_inicio = prompt("insira a data de inicio", objeto.data_inicio)

    const update = await fetch(`http://localhost:3000/Editar_Agendamento/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
            nome_comp,
            num_pessoas,
            forma_pag,
            data_inicio,
            data_fim,
            email,
            valor
        }),
    });
    if (update.status == 200) {
        alert("Cadastro Atualizado.")
        return window.location.reload();
    }
}
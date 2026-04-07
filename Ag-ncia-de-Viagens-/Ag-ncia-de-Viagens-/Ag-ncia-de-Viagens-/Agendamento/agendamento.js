const PRECO_BASE = 150.0;
const HOSPERES_BASE = 1;
let hospedes_atual = 1;
const PRECO_ADICIONAL_POR_HOSPEDE = 150.0;
const total = document.querySelector("#precoTotal");
const botao_comprar = document.createElement("button");
botao_comprar.innerText = "Finalizar Pedido";
let precoFinal = PRECO_BASE;
import api from "../api.js";

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularPreco() {
  const numHospedesInput = document.getElementById("numHospedes");
  let numHospedes = parseInt(numHospedesInput.value);

  if (isNaN(numHospedes) || numHospedes < 1) {
    numHospedes = 1;
    numHospedesInput.value = 1;
  }

  if (numHospedes > hospedes_atual) {
    const hospedesExtras = numHospedes - HOSPERES_BASE;
    precoFinal += hospedesExtras * PRECO_ADICIONAL_POR_HOSPEDE;

    hospedes_atual += 1;
    total.innerText = formatarMoeda(precoFinal);
    return;
  }

  if (numHospedes < hospedes_atual) {
    precoFinal = numHospedes * PRECO_BASE;
    hospedes_atual -= 1;
    total.innerText = formatarMoeda(precoFinal);
    return;
  }
}

calcularPreco();

function formatardata(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
function converterDataInput(dataString) {
  const [ano, mes, dia] = dataString.split("-");
  return new Date(ano, mes - 1, dia); // aqui evita o problema de fuso
}


document
  .querySelector("#cadastrarAgendamento")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const nomecomp = document.querySelector("#nomep").value;
    const email = document.querySelector("#email").value;
    const numHospedes = document.querySelector("#numHospedes").value;
    const forma_pag = document.querySelector("select").value;
    const data_inicio = document.querySelector("#date_i").value;
    const data_fim = document.querySelector("#date_f").value;
    console.log(data_fim)
    const hoje = formatardata(new Date());
    const inicio = formatardata(converterDataInput(data_inicio));
    const fim = formatardata(converterDataInput(data_fim));

    console.log(inicio, fim, hoje);
    if (inicio < hoje) {
      alert("A data de início não pode ser menor que hoje.");
      return;
    }

    if (fim < inicio) {
      alert("A data  final não pode ser anterior a data de início.");
      return;
    }


    const res = await fetch(`http://${api}/Criar_Agendamento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome_comp: nomecomp,
        email,
        num_pessoas: numHospedes,
        forma_pag,
        valor: precoFinal,
        data_inicio,
        data_fim,
      }),
    });

    if (res.ok) {
      alert("Agendamento realizado com sucesso!");
    } else {
      alert("Erro ao realizar agendamento.");
    }
  });

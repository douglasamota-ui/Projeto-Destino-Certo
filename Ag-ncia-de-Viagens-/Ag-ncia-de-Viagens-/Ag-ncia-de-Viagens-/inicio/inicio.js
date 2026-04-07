const btn_login = document.querySelector("#login-btn")
const sair = document.querySelector('#sair-btn')
sair.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.replace("../login/login.html")
})

btn_login.addEventListener('click', ()=>{
     window.location.replace("../login/login.html")
})


  const nomeUsuario = localStorage.getItem("nome");
  
  if (nomeUsuario) {
    btn_login.remove();
    
  }
  else {
    
    sair.remove()
    
  }










































// const sessao = localStorage.getItem('Login');
// const buttonLog = document.querySelector('#login')
// const btnReserva = document.querySelector('#Reserva')
// const Dialog = document.querySelector("#dialog")

// const btnFechar = document.querySelector('.fechar')
// const btnpacote = document.querySelector('#Pacote')
// const btnPassagens = document.querySelector ('#Passagens')

// const titulo_modal = document.querySelector("#titulo_modal")
// const texto_modal = document.querySelector("#texto_modal")
// const texto_modal2 = document.querySelector("#texto_modal2")
// const mensagem_emoji_modal = document.querySelector("#mensagem_emoji_modal")


// document.addEventListener('DOMContentLoaded', () => {
//     if (sessao) {
//         buttonLog.innerText = '';
//         buttonLog.classList.remove('nav-item', 'login-btn');
//         const img = document.createElement('img');
//         img.src = 'https://static.vecteezy.com/ti/vetor-gratis/p1/26434417-padrao-avatar-perfil-icone-do-social-meios-de-comunicacao-do-utilizador-foto-vetor.jpg';
//         img.width='50'
//         img.height='50'
//         buttonLog.appendChild(img);
//     }

//     })

// btnPassagens.addEventListener('click', ()=>{

//     titulo_modal.innerText = "Passagens Aéreas"
//     texto_modal.innerText = " Com a Destino Certo, você sempre tem o lugar perfeito para descansar depois de um dia incrível de viagem! Trabalhamos com uma ampla rede de hotéis, resorts e pousadas em todo o mundo, garantindo conforto, localização ideal e o melhor custo-benefício" 
//     texto_modal.innerText = "Você só precisa escolher o destino, nós cuidamos de todo o resto!"
//     mensagem_emoji_modal.innerText = "✈️ Destino Certo: conectando você aos melhores lugares do mundo!"

//     const main = document.querySelector('main')

//     main.className = "main_blur"
//     Dialog.showModal();
// })

// btnReserva.addEventListener('click', ()=>{

//     titulo_modal.innerText = "Reservas de Hotéis"
//     texto_modal.innerText = "Garanta sua próxima viagem com quem entende do assunto! Na Destino Certo, encontramos as melhores tarifas de passagens aéreas nacionais e internacionais, sempre buscando conforto, segurança e economia para você."
//     texto_modal.innerText = "Deixe a busca por conta da gente e embarque tranquilo, porque aqui voar bem é o primeiro passo para uma viagem perfeita."
//     mensagem_emoji_modal.innerText = "✈️ Destino Certo: conectando você aos melhores lugares do mundo!"

//         const main = document.querySelector('main')
//     main.className = "main_blur"
//     Dialog.showModal();
// })

// btnpacote.addEventListener('click', ()=>{

//     titulo_modal.innerText = "Pacotes personalizados"
//     texto_modal.innerText = "Na Destino Certo, cada viagem é pensada especialmente para você!Com nossos pacotes personalizados, você escolhe o destino, o tipo de hospedagem, os passeios e até o ritmo da sua aventura."
//     texto_modal2.innerText = "  Seja uma viagem romântica, em família ou com os amigos, nós criamos o roteiro ideal para que você viva experiências únicas e inesquecíveis."
//     mensagem_emoji_modal.innerText = "🌍 Viaje do seu jeito, o destino certo é aquele que combina com você!"

    
//         const main = document.querySelector('main')
//     main.className = "main_blur"
//     Dialog.showModal();
// })

// btnFechar.addEventListener('click', ()=>{
//             const main = document.querySelector('main')

//         main.className = "main_default"

//     Dialog.close();
// })


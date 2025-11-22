const opcoesRespostas = document.querySelectorAll("li");
const respostaCorreta = document.querySelector(".resposta").textContent.trim();
const feedbackTexto = document.querySelector(".explicacao-texto");
const popup = document.getElementById("popup");
const fecharPopup = document.getElementById("fecharPopup");
const respostaCorretaFedback = document.querySelector(".resposta-correta");
const elementoTentativas = document.querySelector(".tentativas");

let bloqueado = false; 
let tentativas = 0;
const limiteTentativas = 2;

function aparecer() {
    document.body.classList.add("appear");
}
setTimeout(aparecer, 500);

opcoesRespostas.forEach(opcao => {
    opcao.addEventListener("click", function () {
        if (tentativas >= limiteTentativas || bloqueado) return;
        tentativas++;
        exibirTentativas(tentativas)
        verificacaoResposta(opcao.textContent.trim()); 
    });
});

function exibirTentativas(tentativaAtual){
    elementoTentativas.textContent = tentativaAtual;
}
function verificacaoResposta(resposta) {
    if (resposta === respostaCorreta) {
        feedbackRespostaCorreta();
    } else {
        feedbackRespostaIncorreta();
    }
    popup.style.display = "block";
}

function feedbackRespostaCorreta() {
    popup.classList.remove("incorreta");
    popup.classList.add("correta");
    feedbackTexto.textContent = "Resposta correta!!! 🎉";
     bloqueado = true;
}

function feedbackRespostaIncorreta() {
    popup.classList.remove("correta");
    popup.classList.add("incorreta");
    feedbackTexto.textContent = "Resposta incorreta ❌";
      if (tentativas === limiteTentativas) {
        respostaCorretaFedback.textContent = 'A resposta correta é: ' + respostaCorreta;
    } else {
        respostaCorretaFedback.textContent = ""; 
        }
}

fecharPopup.addEventListener("click", () => {
    popup.style.display = "none";
});

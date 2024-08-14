const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Conheço a marca",
            },
            {
                texto: "Não conheço.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já comprei uns produtos",
            },
            {
                texto: "Ainda não tenho mas já quero garantir o meu.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Querem ver as novidades, sim!.",
            },
            {
                texto: "Não!.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Prefere, Stories",
            },
            {
                texto: "Feed e Reels.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Prefere camisetas simples.",
            },
            {
                texto: "Bem estampadas.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já viu o desconto, Sim :)!.",
            },
            {
                texto: "Ainda não :(",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Sigo a loja no insta.",
            },
            {
                texto: "Não sigo.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();
let numCartas;

let baralho = [];
let carta;

function numeroCartas(){
    numCartas = prompt("Quantas cartas você quer jogar?");
    while((numCartas < 4) || (numCartas > 14) || (numCartas % 2 === 1)){
        numCartas = prompt("Quantas cartas você quer jogar?");
    }
    
}
numeroCartas();

let tabuleiro = document.querySelector(".tabuleiro");

const cartas = 
["bobrossparrot",
"explodyparrot",
"fiestaparrot",
"metalparrot",
"revertitparrot",
"tripletsparrot",
"unicornparrot"];

i = numCartas;

function criaCarta (carta, i, cartas){
    carta = 
`<div class="card" onclick="virar(this)">
    <img class="frente-carta" src="img/${cartas[i]}.gif">
    <img class="fundo-carta" src="img/front.png">
</div>`;
    baralho.push(carta);
    baralho.push(carta);
}

cartas.forEach(criaCarta);

baralho.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuiCartas() {
    for(let i = 0; i < numCartas; i++){
        tabuleiro.innerHTML += baralho[i];
    }
}

distribuiCartas();

function virar (elemento){
    let carta = document.querySelector(".tabuleiro .card");
    elemento.classList.toggle("virar");
}
let numCartas;
let cartas = 
["bobrossparrot",
"explodyparrot",
"fiestaparrot",
"metalparrot",
"revertitparrot",
"tripletsparrot",
"unicornparrot"];
let tabuleiro = document.querySelector(".tabuleiro");
let baralho = [];
let carta;
let acertos = 0;
let jogadas = 0;

function numeroCartas(){
    numCartas = prompt("Quantas cartas você quer jogar?");
    while((numCartas < 4) || (numCartas > 14) || (numCartas % 2 === 1)){
        numCartas = prompt("Quantas cartas você quer jogar?");
    }
    
}
numeroCartas();

function tamanhoBaralho () {

    for(let i = 0; i < (numCartas / 2); i++){
        let carta = cartas[i];
        baralho.push(carta);
        baralho.push(carta);
    }
}
tamanhoBaralho();

function comparador() { 
	return Math.random() - 0.5; 
}
baralho.sort(comparador);
console.log(baralho);



function reiderizarCartas (){
    
    for(i = 0; i < baralho.length; i++){
 
     let cartafront = 
     `<div class="card" onclick="virar(this)">
         <img class="frente-carta" src="img/${baralho[i]}.gif">
         <img class="fundo-carta" src="img/front.png">
     </div>`;
 
     tabuleiro.innerHTML += cartafront;     
    }
 }
 reiderizarCartas();


let primeira, segunda;


function virar (elemento) {
    
    if(elemento.classList.contains("virar")){
        return;
    }

    if(primeira !== undefined && segunda !== undefined){ return;}
    elemento.classList.add("virar");

    if(primeira === undefined){
        primeira = elemento;
    } else {
        
        if(segunda === undefined){
            segunda = elemento;

            if(primeira.innerHTML === segunda.innerHTML){
                resetCartas();
                acertos += 2;
                jogadas += 2;
            } else {
                setTimeout(desvirarCartas, 1000);
                jogadas += 2;
            }
    }
    }
    verificaFim ();
}


function resetCartas() {
    primeira = undefined;
    segunda = undefined;
}

function desvirarCartas(){
    primeira.classList.remove("virar");
    segunda.classList.remove("virar");
    resetCartas();
}

function verificaFim () {
    if(acertos === baralho.length){
        alert(`Parabéns! Você terminou o jogo com ${jogadas} jogadas.`);
        setTimeout(window.location.reload(), 3000);
    }
}




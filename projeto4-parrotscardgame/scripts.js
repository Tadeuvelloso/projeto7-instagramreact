let qtcartas = Number(prompt('Escolha uma quantidade de cartas entre [4 e 14]: '));
    while(qtcartas > 14 && qtcartas < 4 && parimpar() != true ){
       qtcartas = Number(prompt('Escolha uma quantidade de cartas entre [4 e 14]: '));
    }

function parimpar(){
    if(qtcartas % 2 == 0){return true } else{ return false}
}

const tabuleiro = document.querySelector('.tabuleiro');


const imagens = [
    'bobrossparrot.gif',
    'fiestaparrot.gif',
    'explodyparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
];

let codigoHTML = '';

imagens.forEach(img =>{
    codigoHTML += ` 
        <div class="card" data-carta="${img}">
            <img class="frente-carta" src="img/${img}">
            <img class="fundo-carta" src="img/front.png">
        </div>
    
    `;
});

tabuleiro.innerHTML = codigoHTML + codigoHTML;


const cartas = document.querySelectorAll(".card");


let primeira, segunda;
let bloqueio = false;

(function aleatoria(){
    cartas.forEach(carta =>{
        let numero = Math.floor(Math.random()*14);
        carta.style.order = numero;
    })
})();

function checar(){
    let ehIgual = primeira.dataset.carta === segunda.dataset.carta?true:false;
    if(!ehIgual){
        remover();
    } else{
        reset(ehIgual);
    }
}

function virar(){
    if(bloqueio){
        return false;}
    this.classList.add("virar");

    if(!primeira){
        primeira = this;
        primeira.removeEventListener('click',virar);
        return false;
    }
    
    segunda = this;

    checar();
    
}

function remover(){
    bloqueio = true;
    setTimeout(()=>{
        primeira.classList.remove("virar");
        primeira.addEventListener('click',virar);
        segunda.classList.remove("virar");
        bloqueio = false;
        primeira = null;
        segunda = null;
    },1000);
}

function reset(ehIgual){
    if(ehIgual){
        primeira.removeEventListener('click',virar);
        segunda.removeEventListener('click',virar);
        bloqueio = false;
        primeira = null;
        segunda = null;
    }
}

cartas.forEach(c => c.addEventListener('click',virar));

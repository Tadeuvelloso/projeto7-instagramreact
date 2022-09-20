import luffy from "../src/imagens/luffy.webp"
import chopper from "../src/imagens/chopper.png"
import robin from "../src/imagens/robin.jpg"
import rayleigh from "../src/imagens/rayleigh.jpg"
import broky from "../src/imagens/broky.jpg"
import franky from "../src/imagens/franky.jpg"
import React from "react"

function Usuario(props) {

  const [imagem, setImagem] = React.useState(luffy);
  const [nome, setNome] = React.useState("Luffy");

  function novoNome(nome) {
    nome = prompt("Qual seu nome?");
    if(!nome){
      return
    }
    setNome(nome);
  }

  function novaImagem(imagem) {
    imagem = prompt("Insira sua imagem: ");
    if(!imagem){
      return
    }
    setImagem(imagem);
  }

  return (
    <div class="titu-suges">
      <img src={imagem} onClick={novaImagem} />
      <div>
        <p class="nome">Luffy</p>
        <p class="segue-vc">{nome}<span class="pencil" onClick={novoNome} ><ion-icon name="brush"></ion-icon></span></p>
      </div>
    </div>
  )
}

function Marca() {
  return (
    <div class="marca-dagua">
      <p>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
        • Localizações • Contas mais relevantes • Hashtags • Idioma
      </p>
      <p>© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  )
}

function Sugestoes() {
  return (
    <div class="sugestoes-pra-voce">
      <p class="suges-pra-vc">Sugestôes para você</p>
      <p class="nome">Ver tudo</p>
    </div>
  )
}

function Users(props) {

  const [follow, setFollow] = React.useState("Seguir");
  function seguirVoce(follow) {
    follow = "Seguindo"
    setFollow(follow)
  }

  return (
    <li>
      <div class="div-seletor">
        <img class="img-sujestao" src={props.imgpessoa} />
        <div class="div-nomes">
          <p class="nome">{props.nome}</p>
          <p class="segue-vc">{props.status}</p>
        </div>
      </div>
      <p class="seguir" onClick={seguirVoce}>{follow}</p>
    </li>
  )
}

export default function Sidebar() {

  const dados = [{ imgpessoa: chopper, nome: "Chopper", status: "Segue você" },
  { imgpessoa: robin, nome: "Nico Robin", status: "Segue você" },
  { imgpessoa: rayleigh, nome: "Rayleigh", status: "Novo no Instagram" },
  { imgpessoa: broky, nome: "Broky", status: "Segue você" },
  { imgpessoa: franky, nome: "Franky", status: "Segue você" }]

  return (
    <div class="container-direita">
      <div>
        <ul>
          <Usuario />
          <Sugestoes />
          {dados.map((d) => <Users imgpessoa={d.imgpessoa} nome={d.nome} status={d.status} />)}
        </ul>
        <Marca />
      </div>
    </div>
  )
}
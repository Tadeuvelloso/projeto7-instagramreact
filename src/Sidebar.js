import luffy from "../src/imagens/luffy.webp"
import chopper from "../src/imagens/chopper.png"
import robin from "../src/imagens/robin.jpg"
import rayleigh from "../src/imagens/rayleigh.jpg"
import broky from "../src/imagens/broky.jpg"
import franky from "../src/imagens/franky.jpg"


function Usuario() {
  return (
    <div class="titu-suges">
      <img src={luffy} />
      <div>
        <p class="nome">Luffy</p>
        <p class="segue-vc">MonkeyD.</p>
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


function Users (props) {
  return (
    <li>
      <div class="div-seletor">
        <img class="img-sujestao" src={props.imgpessoa} />
        <div class="div-nomes">
          <p class="nome">{props.nome}</p>
          <p class="segue-vc">{props.status}</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </li>
  )
}





export default function Sidebar() {
  return (
    <div class="container-direita">
      <div>
      <ul>
        <Usuario />
        <Sugestoes />
        <Users imgpessoa={chopper} nome="Chopper" status="Segue você" />
        <Users imgpessoa={robin} nome="Nico Robin" status="Segue você" />
        <Users imgpessoa={rayleigh} nome="Rayleigh" status="Novo no Instagram" />
        <Users imgpessoa={broky} nome="Broky" status="Segue você" />
        <Users imgpessoa={franky} nome="Franky" status="Segue você" />
        </ul>
        <Marca />
      </div>
    </div>
  )
}
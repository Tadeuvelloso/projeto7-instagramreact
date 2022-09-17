import ace from "../src/imagens/ace.jpg"
import background from "../src/imagens/stories_background 1.jpg"
import sanji from "../src/imagens/sanji.jpg"
import ussop from "../src/imagens/ussop.jpg"
import barbabranca from "../src/imagens/barbabranca.webp"
import nami from "../src/imagens/nami-zou.jpg"
import roger from "../src/imagens/goldroger.jpg"
import zoro from "../src/imagens/zoro.jpg"
import shanks from "../src/imagens/shanks.jpg"

function Story(props) {
  return (
    <div>
      <img class="borda-storys" src={background} />
      <img class="img-storys" src={props.img} />
      <p class="legenda-storyes">{props.nome}</p>
    </div>
  )

}

export default function Storys() {

  const dados = [{ft:ace, nome:"Ace"}, {ft:sanji, nome:"Sanji"}, {ft:ussop, nome:"Ussop"}, {ft:barbabranca, nome:"Newgate"}, 
  {ft:nami, nome:"Nami"}, {ft:roger, nome:"GolD.Roger"}, {ft:zoro, nome:"Zoro"}, {ft:shanks, nome:"Shanks"}]
  
  return (
    <div class="caixa-storys">
      <ion-icon class="icon-seta" name="chevron-forward-circle"></ion-icon>
      {dados.map((d) => <Story img={d.ft} nome={d.nome}/> )}
    </div>
  )
};


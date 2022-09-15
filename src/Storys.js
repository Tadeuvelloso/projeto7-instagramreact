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
  return (
    <div class="caixa-storys">
      <ion-icon class="icon-seta" name="chevron-forward-circle"></ion-icon>
      <Story img={ace} nome="Ace"/>
      <Story img={sanji} nome="Sanji"/>
      <Story img={ussop} nome="Ussop"/>
      <Story img={barbabranca} nome="Newgate"/>
      <Story img={nami} nome="Nami"/>
      <Story img={roger} nome="GoldD.Roger"/>
      <Story img={zoro} nome="Zoro"/>
      <Story img={shanks} nome="Shanks"/>
    </div>
  )
};
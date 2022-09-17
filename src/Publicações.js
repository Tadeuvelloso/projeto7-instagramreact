import caveira from "../src/imagens/caveira.jpg"
import alabasta from "../src/imagens/vivi.png"
import vivi from "../src/imagens/vivi1.jpg"
import crocodile from "../src/imagens/crocodile.jpeg"
import barbabranca from "../src/imagens/barbabranca.webp"
import newgatevsroger from "../src/imagens/1057850.jpg"
import oden from "../src/imagens/oden.jpg"
import ace from "../src/imagens/ace.jpg"
import ace2 from "../src/imagens/ace2.jpg"
import luffy from "../src/imagens/luffy.webp"
import sabo from "../src/imagens/sabo.jpeg"


function Post(props) {
    return (
        <div class="cx-publicacoes">
            <div class="titulo-publicacoes">
                <div>
                    <img class="img-publi-titulo" src={props.imgtitulo} />
                    <p class="nome-publi">{props.titulo}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="img-publi" src={props.publi} />
            <div class="icones-publi">
                <div>
                    <ion-icon class="iconet" name="heart-outline"></ion-icon>
                    <ion-icon class="iconet" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="iconet" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon class="icone" name="bookmark-outline"></ion-icon>
            </div>
            <div class="curtidas">
                <img class="img-curtida" src={props.imgcurtida} />
                <p>
                    Curtido por <strong>{props.nomecurtida}</strong> e 
                    <strong> outras {props.numcurtidas} pessoas</strong>
                </p>
            </div>
            <div class="comentarios">
                <div>
                    <img class="img-curtida" src={props.imgcomentario} />
                    <p><strong>{props.nomecomentario}</strong> {props.comentario}</p>
                </div>
                <ion-icon
                    name="heart-outline"
                    width="15px"
                    height="15px"
                ></ion-icon>
            </div>
            <div class="textarea">
                <input class="caixatexto" type="text" placeholder="Adicione um comentário..."></input>
                <button class="publicar">Publicar</button>
            </div>
        </div>
    )
}

export default function Publicações() {

    const dados = [{ imgtitulo: caveira, titulo: "Mugiwaras", publi: alabasta, imgcurtida: vivi, nomecurtida: "Vivi", numcurtidas: "1.253.234", imgcomentario: crocodile, nomecomentario: "Crocodile", comentario: "Você me paga mugiwara!!!" },
    { imgtitulo: barbabranca, titulo: "Newgate", publi: newgatevsroger, imgcurtida: oden, nomecurtida: "Oden", numcurtidas: "273.928", imgcomentario: oden, nomecomentario: "Oden", comentario: "Oque foi isso!?" },
    { imgtitulo: ace, titulo: "Ace", publi: ace2, imgcurtida: luffy, nomecurtida: "luffy", numcurtidas: "12.253.234", imgcomentario: sabo, nomecomentario: "Sabo", comentario: "Você fez história irmão!" }]

    return (
        <>
            {dados.map((d) => <Post imgtitulo={d.imgtitulo} titulo={d.titulo} publi={d.publi} imgcurtida={d.imgcurtida} nomecurtida={d.nomecurtida} numcurtidas={d.numcurtidas} imgcomentario={d.imgcomentario} nomecomentario={d.nomecomentario} comentario={d.comentario} />)}
        </>
    )
}
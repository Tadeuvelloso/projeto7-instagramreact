export default function Publicações (){
    return(
        <>
            <div class="cx-publicacoes">
                <div class="titulo-publicacoes">
                    <div>
                    <img class="img-publi-titulo" src="imagens/caveira.jpg" />
                    <p class="nome-publi">Mugiwaras</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img class="img-publi" src="imagens/vivi.png" />
                <div class="icones-publi">
                    <div>
                    <ion-icon class="iconet" name="heart-outline"></ion-icon>
                    <ion-icon class="iconet" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="iconet" name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon class="icone" name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img class="img-curtida" src="imagens/vivi1.jpg" />
                    <p>
                    Curtido por <strong>vivi</strong> e
                    <strong>outras 101.523 pessoas</strong>
                    </p>
                </div>
                <div class="comentarios">
                    <div>
                    <img class="img-curtida" src="imagens/crocodile.jpeg" />
                    <p><strong>crocodile</strong> Você me paga mugiwara!</p>
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

                <div class="cx-publicacoes">
                <div class="titulo-publicacoes">
                    <div>
                    <img class="img-publi-titulo" src="imagens/barbabranca.webp" />
                    <p class="nome-publi">Newgate</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <video
                    width="612px"
                    height="612px"
                    src="imagens/videoplayback.mp4"
                    autoplay
                    controls
                    muted
                ></video>
                <div class="icones-publi">
                    <div>
                    <ion-icon class="iconet" name="heart-outline"></ion-icon>
                    <ion-icon class="iconet" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="iconet" name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon class="icone" name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img class="img-curtida" src="imagens/oden.jpg" />
                    <p>
                    Curtido por <strong>Oden</strong> e
                    <strong>outras 99.159 pessoas</strong>
                    </p>
                </div>
                <div class="comentarios">
                    <div>
                    <img class="img-curtida" src="imagens/oden.jpg" />
                    <p><strong>Oden</strong> Oque foi isso!?</p>
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

                <div class="cx-publicacoes last">
                <div class="titulo-publicacoes">
                    <div>
                        <img class="img-publi-titulo" src="" />
                        <p class="nome-publi">Ace</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img class="img-publi" src="imagens/ace2.jpg" />
                <div class="icones-publi">
                    <div>
                    <ion-icon class="iconet" name="heart-outline"></ion-icon>
                    <ion-icon class="iconet" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="iconet" name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon class="icone" name="bookmark-outline"></ion-icon>
                </div>
                <div class="curtidas">
                    <img class="img-curtida" src="imagens/luffy.webp" />
                    <p>
                    Curtido por <strong>luffy</strong> e
                    <strong>outras 1.001.523 pessoas</strong>
                    </p>
                </div>
                <div class="comentarios">
                    <div>
                        <img class="img-curtida" src="imagens/sabo.jpeg" />
                        <p><strong>Sabo</strong> Você fez história irmão!</p>
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
        </>
    )

}
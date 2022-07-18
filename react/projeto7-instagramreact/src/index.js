import ReactDOM  from "react-dom";

function App () {
    return (
        <div class="container">
            <div class="cx-titulo">
            <div class="cx-insta-icon">
            <img src="imagens/logo 1.png" />
            <div class="bordinha"></div>
            <ion-icon class="icone" name="logo-instagram"></ion-icon>
            </div>
            <div class="pesquisa">
            <p>pesquisar</p>
            </div>
            <div class="icones">
            <ion-icon class="icone" name="paper-plane-outline"></ion-icon>
            <ion-icon class="icone" name="compass-outline"></ion-icon>
            <ion-icon class="icone" name="heart-outline"></ion-icon>
            <ion-icon class="icone" name="person-outline"></ion-icon>
            </div>
        </div>

        <div class="cx-titulo-responsive">
            <ion-icon class="icone" name="logo-instagram"></ion-icon>
            <img src="imagens/logo 1.png" />
            <ion-icon class="icone" name="paper-plane-outline"></ion-icon>
        </div>
        <div class="cx-titulo-responsive-baixo">
            <ion-icon class="icone s" name="home"></ion-icon>
            <ion-icon class="icone s" name="search"></ion-icon>
            <ion-icon class="icone s" name="add-circle-outline"></ion-icon>
            <ion-icon class="icone s" name="heart-outline"></ion-icon>
            <ion-icon class="icone s" name="person-outline"></ion-icon>
        </div>

        <div class="container-esquerda">
            <div class="caixa-storys">
            <ion-icon class="icon-seta" name="chevron-forward-circle"></ion-icon>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/9gag 1.png" />
                <p class="legenda-storyes">9gag</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/meowed 1.png" />
                <p class="legenda-storyes">meowed</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/barked 1.png" />
                <p class="legenda-storyes">barked</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img
                class="img-storys"
                src="imagens/nathanwpylestrangeplanet 1.png"
                />
                <p class="legenda-storyes">nathanwpyle...</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/wawawiwacomicsa 1.png" />
                <p class="legenda-storyes">wawawiwac...</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/respondeai 1.png" />
                <p class="legenda-storyes">respondeai</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/filomoderna 1.png" />
                <p class="legenda-storyes">filomoderna</p>
            </div>
            <div>
                <img class="borda-storys" src="imagens/stories_background 1.png" />
                <img class="img-storys" src="imagens/memeriagourmet 1.png" />
                <p class="legenda-storyes">memeriago.</p>
            </div>
            </div>
            
            <div class="cx-publicacoes">
            <div class="titulo-publicacoes">
                <div>
                <img class="img-publi-titulo" src="imagens/meowed 1.png" />
                <p class="nome-publi">meowed</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="img-publi" src="imagens/gato-telefone 1.png" />
            <div class="icones-publi">
                <div>
                <ion-icon class="iconet" name="heart-outline"></ion-icon>
                <ion-icon class="iconet" name="chatbubble-outline"></ion-icon>
                <ion-icon class="iconet" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon class="icone" name="bookmark-outline"></ion-icon>
            </div>
            <div class="curtidas">
                <img src="imagens/respondeai 2.png" />
                <p>
                Curtido por <strong>respondeai</strong> e
                <strong>outras 101.523 pessoas</strong>
                </p>
            </div>
            </div>

            <div class="cx-publicacoes">
            <div class="titulo-publicacoes">
                <div>
                <img class="img-publi-titulo" src="imagens/barked 1.png" />
                <p class="nome-publi">barked</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="img-publi" src="imagens/dog 1.png" />
            <div class="icones-publi">
                <div>
                <ion-icon class="iconet" name="heart-outline"></ion-icon>
                <ion-icon class="iconet" name="chatbubble-outline"></ion-icon>
                <ion-icon class="iconet" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon class="icone" name="bookmark-outline"></ion-icon>
            </div>
            <div class="curtidas">
                <img src="imagens/adorableanimals 2.png" />
                <p>
                Curtido por <strong>adorable_animals</strong> e
                <strong>Soutras 99.159 pessoas</strong>
                </p>
            </div>
            </div>

            <div class="cx-publicacoes">
            <div class="titulo-publicacoes">
                <div>
                <img class="img-publi-titulo" src="imagens/meowed 1.png" />
                <p class="nome-publi">meowed</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img class="abc" src="imagens/gato-telefone 3.png" />
            </div>
        </div>

        <div class="container-direita">
            <div>
            <div class="titu-suges">
                <img src="imagens/catanacomics 1.png" />
                <div>
                <p class="nome">catanacomics</p>
                <p class="segue-vc">Catana</p>
                </div>
            </div>
            <div class="sugestoes-pra-voce">
                <p class="suges-pra-vc">Sugestôes para você</p>
                <p class="nome">Ver tudo</p>
            </div>
            <ul>
                <li>
                <div class="div-seletor">
                    <img src="imagens/badvibesmemes 1.png" />
                    <div class="div-nomes">
                    <p class="nome">bad.vibes.memes</p>
                    <p class="segue-vc">Segue você</p>
                    </div>
                </div>
                <p class="seguir">Seguir</p>
                </li>
                <li>
                <div class="div-seletor">
                    <img src="imagens/chibirdart 1.png" />
                    <div class="div-nomes">
                    <p class="nome">chibirdart</p>
                    <p class="segue-vc">Segue você</p>
                    </div>
                </div>
                <p class="seguir">Seguir</p>
                </li>
                <li>
                <div class="div-seletor">
                    <img src="imagens/razoesparaacreditar 1.png" />
                    <div class="div-nomes">
                    <p class="nome">razoesparaacreditar</p>
                    <p class="segue-vc">Novo no Instagram</p>
                    </div>
                </div>
                <p class="seguir">Seguir</p>
                </li>
                <li>
                <div class="div-seletor">
                    <img src="imagens/adorableanimals 1.png" />
                    <div class="div-nomes">
                    <p class="nome">adorable_animals</p>
                    <p class="segue-vc">Segue você</p>
                    </div>
                </div>
                <p class="seguir">Seguir</p>
                </li>
                <li>
                <div class="div-seletor">
                    <img src="imagens/smallcutecats 1.png" />
                    <div class="div-nomes">
                    <p class="nome">smallcutecats</p>
                    <p class="segue-vc">Segue você</p>
                    </div>
                </div>
                <p class="seguir">Seguir</p>
                </li>
            </ul>
            <div class="marca-dagua">
                <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
                • Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
            </div>
        </div>
    </div>
    )
}
const element = document.querySelector(".root");
ReactDOM.render(App(), element);
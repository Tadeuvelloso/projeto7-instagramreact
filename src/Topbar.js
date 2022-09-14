export default function Topbar () {
    return (
     <div class="cx-titulo">
        <div class="cx-insta-icon">
          <img src="imagens/logo.png" />
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
    )
}
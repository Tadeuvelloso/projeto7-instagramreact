import instagram from "../src/imagens/logo.png"


function FooterBar() {
    return (
        <div class="cx-titulo-responsive-baixo">
            <ion-icon class="icone" name="home"></ion-icon>
            <ion-icon class="icone" name="search"></ion-icon>
            <ion-icon class="icone" name="add-circle-outline"></ion-icon>
            <ion-icon class="icone" name="heart-outline"></ion-icon>
            <ion-icon class="icone" name="person-outline"></ion-icon>
        </div>

    )
}

function TopBar() {
    return (
        <div class="cx-titulo-responsive">
            <ion-icon class="icone" name="logo-instagram"></ion-icon>
            <img src={instagram} />
            <ion-icon class="icone" name="paper-plane-outline"></ion-icon>
        </div>
    )
}



export default function TopbarResponsive() {
    return (
        <>
            <TopBar />
            <FooterBar />
        </>
    );
};


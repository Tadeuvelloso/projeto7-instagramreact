import ReactDOM from "react-dom";
import Storys from "./Storys";
import Topbar from "./Topbar";
import TopbarResponsive from "./Topbar-responsive";
import Publicações from "./Publicações";
import Sidebar from "./Sidebar";
import Img from "../src/imagens/caveira.jpg"


function App() {
  return (
    <div class="container">
      <Topbar />
      <TopbarResponsive />
      <div class="container-esquerda">
        <Storys />
        <Publicações />
      </div>
      <Sidebar />
    </div>
  )
}

ReactDOM.render(App(), document.querySelector(".root"))
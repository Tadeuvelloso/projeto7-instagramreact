import ReactDOM from "react-dom";
import Storys from "./Storys";
import Topbar from "./Topbar";
import TopbarResponsive from "./Topbar-responsive";
import Storys from "./Storys";
import Publicações from "./Publicações";
import Sidebar from "./Sidebar";



function App () {
    return(
    <div class="container">
        <Topbar/>
        <TopbarResponsive/>
      <div class="container-esquerda">
        <Storys/>
        <Publicações/>
      </div>
      <Sidebar/>
    </div>
    )
}

ReactDOM.render(App(), document.querySelector(".root"))
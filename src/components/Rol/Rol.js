import './Rol.css';
import './RolLayout.css';
import './RolLayoutDesktop.css';
import React, { useEffect, useState } from "react";

function Rol() {

  const [currentTab, setCurrentTab] = useState(0);

  const getTabName = tabNumber => {
    switch (tabNumber){
      case 0: return "Personaje";
      case 1: return "Habilidad";
      case 2: return "Objeto";
      case 3: return "Estado Alterado";
      case 4: return "Lugar";
      case 5: return "Evento";
      case 6: return "Audio";
      
      case 7: return "Personaje";
      case 8: return "Habilidad";
      case 9: return "Objeto";
      case 10: return "Estado Alterado";
      case 11: return "Lugar";
      case 12: return "Evento";
      case 13: return "Audio";
    }
  }

  const tabButton = (number, name) => {
    return (
      <button
        onClick={() => setCurrentTab(number)}
        className={currentTab === number ? "active" : ""}>
          {name}
      </button>
    );
  }

  return (
    <div className="wrapper">

      <div className="container">
        <div className="subcontainer">
          <div className="user-account">user account</div>
          <div className="editor">
            <div className="filter">

              {/* FILTER */}
              <input className="input-filter" type="text" placeholder="Buscar..."></input>

            </div>
            <div className="result-tabs">

              {/* TABS SEARCH */}
              🔍
              {tabButton(0, "Personajes")}
              {tabButton(1, "Habilidades")}
              {tabButton(2, "Objetos")}
              {tabButton(3, "Estados alterados")}
              {tabButton(4, "Lugares")}
              {tabButton(5, "Eventos")}
              {tabButton(6, "Audio")}

            </div>
            <div className="favorite-tabs">

              {/* TABS FAVORITES */}
              ⭐
              {tabButton(7, "Personajes")}
              {tabButton(8, "Habilidades")}
              {tabButton(9, "Objetos")}
              {tabButton(10, "Estados alterados")}
              {tabButton(11, "Lugares")}
              {tabButton(12, "Eventos")}
              {tabButton(13, "Audio")}

            </div>
            <div className="tab-content-options">
              <button>Crear nuevo {getTabName(currentTab)}</button>
              {(currentTab === 0 || currentTab === 4 || currentTab === 7 || currentTab === 11) &&
              <button>Generar {getTabName(currentTab)} aleatorio</button>
              }
            </div>
            <div className="tab-content">
              <div>
                <div className="open">1</div>
                <div>2</div>
                <div>3</div>
                <div className="open">4</div>
                <div className="open">5</div>
                <div>1</div>
                <div>2</div>
                <div className="open">3</div>
                <div className="open">4</div>
                <div>5</div>
              </div>
              <div>
                <div>1</div>
                <div className="open">2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div className="open">1</div>
                <div>2</div>
                <div>3</div>
                <div className="open">4</div>
                <div className="open">5</div>
              </div>
              <div>
                <div>1</div>
                <div>2</div>
                <div className="open">3</div>
                <div className="open">4</div>
                <div>5</div>
                <div>1</div>
                <div className="open">2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Rol;

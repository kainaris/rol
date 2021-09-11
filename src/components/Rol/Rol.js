import './Rol.css';
import './RolLayout.css';
import './RolLayoutDesktop.css';

function Rol() {
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
              <button>Personajes</button>
              <button>Habilidades</button>
              <button>Objetos</button>
              <button>Estados alterados</button>
              <button>Lugares</button>
              <button>Eventos</button>
              <button>Audio</button>

            </div>
            <div className="favorite-tabs">

              {/* TABS FAVORITES */}
              ⭐
              <button>Personajes</button>
              <button>Habilidades</button>
              <button>Objetos</button>
              <button>Estados alterados</button>
              <button>Lugares</button>
              <button>Eventos</button>
              <button>Audio</button>

            </div>
            <div className="tab-content-options">tab options</div>
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

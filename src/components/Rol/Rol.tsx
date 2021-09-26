import './Rol.css';
import './RolLayout.css';
import './RolLayoutDesktop.css';
import { useEffect, useState } from "react";
import { Category, readUsers, writeUser, writeThing } from '../remoteData';

function Rol() {

  type GoogleUserType = {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
  }

  // type UserType = {
  //   id: number,
  //   name: string,
  //   password: string,
  // }

  // const [users, setUsers] = useState<UserType[]>([]);
  // const [name, setName] = useState("pakko");

  // useEffect(() => {
  //   return readUsers(userss => {setUsers(userss);});
  // }, [])

  // const firebasetest = () => {
  //   return (
  //     <div>

  //       <input
  //         type="text"
  //         onChange={e => setName(e.target.value)}/>

  //       <button
  //         onClick={() => {
  //           writeUser({name, password: "pass"});
  //           writeThing("characters", 'a', 'e', 'i');
  //         }}>
  //         Write User!
  //       </button>

  //       {[...users].map(x => {
  //         return <p key={x.id}>Name: {x.name}</p>
  //       })}

  //       baba
  //     </div>
  //   );
  // }

  const [currentTab, setCurrentTab] = useState<Category>('characters');
  const [searching, setSearching] = useState(true);

  const tabButton = (category: Category) => {
    return (
      <button
        onClick={() => setCurrentTab(category)}
        className={currentTab === category ? "active" : ""}>
        {/* {number === 7 ? '⭐' : getTabName(number)} */}
        {category.toString()}
      </button>
    );
  }

  const user: GoogleUserType = JSON.parse(localStorage.getItem("user") || "");

  return (
    <div className="wrapper">
      <div className="container">
        <div className="subcontainer">

          <div className="user-account">

            {user.name}

            <img
              className="profile-picture"
              src={user.imageUrl} />

            <button
              className="userLogoffButton"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
              }}>
                LOG OFF
            </button>

          </div>

          <div className="editor">

            {/* FILTER */}
            <div className="filter">
              🔍
              <input className="input-filter" type="text" placeholder="Buscar..."></input>
            </div>

            {/* TABS */}
            <div className="tabs">
              { tabButton('characters') }
              { tabButton('skills') }
              { tabButton('items') }
              { tabButton('status effects') }
              { tabButton('places') }
              { tabButton('events') }
              { tabButton('audio') }
              { tabButton('favorites') }
            </div>

            <div className={['tab-content-options', searching && 'blue-bg'].join(' ')}>

              {/* <button className="other-button">
                ➕ CREAR { getTabName(currentTab).toUpperCase() }
              </button>

              {(currentTab === 0 || currentTab === 4 || currentTab === 7 || currentTab === 11)
              && 
              <button className="other-button">
                🎲 GENERAR {getTabName(currentTab).toUpperCase()} ALEATORIO
              </button>} */}
            
            </div>

            <div className={['tab-content', searching && 'blue-bg'].join(' ')}>
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

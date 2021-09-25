import './Rol.css';
import './RolLayout.css';
import './RolLayoutDesktop.css';
import { useEffect, useState } from "react";
import { Categories, readUsers, writeUser, writeThing } from './utils/remoteData';

function Rol() {

  type UserType = {
    id: number,
    name: string,
    password: string,
  }

  const [users, setUsers] = useState<UserType[]>([]);
  const [name, setName] = useState("pakko");

  useEffect(() => {
    return readUsers(userss => {setUsers(userss);});
  }, [])

  const firebasetest = () => {
    return (
      <div>

        <input
          type="text"
          onChange={e => setName(e.target.value)}/>

        <button
          onClick={() => {
            writeUser(name, 'pass');
            writeThing("characters", 'a', 'e', 'i');
          }}>
          Write User!
        </button>

        {[...users].map(x => {
          return <p key={x.id}>Name: {x.name}</p>
        })}

        baba
      </div>
    );
  }

  const [currentTab, setCurrentTab] = useState<Categories>('characters');
  const [searching, setSearching] = useState(true);

  // const getTabName = (tabNumber: number) => {
  //   // let search = true;
  //   if (tabNumber > 6) {
  //     tabNumber -= 7;
  //     // search = false;
  //   }
  //   // setSearching(search);
  //   return CategoriesArray[tabNumber];
  // }

  // const setCurrentTabb = (tabNumber: number) => {
  //   setCurrentTab(tabNumber);
  //   // let search = true;
  //   // if (tabNumber > 6) {
  //   //   // tabNumber -= 7;
  //   //   search = false;
  //   // }
  //   setSearching(tabNumber < 7);
  //   // return CategoriesArray[tabNumber];
  // }

  const tabButton = (category: Categories) => {
    return (
      <button
        onClick={() => setCurrentTab(category)}
        className={currentTab === category ? "active" : ""}>
        {/* {number === 7 ? '⭐' : getTabName(number)} */}
        {category.toString()}
      </button>
    );
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="subcontainer">

          <div className="user-account">
            user account
            {/* {firebasetest()} */}
          </div>

          <div className="editor">

            {/* FILTER */}
            <div className="filter">
              🔍
              <input className="input-filter" type="text" placeholder="Buscar..."></input>
            </div>

            {/* TABS SEARCH */}
            <div className="result-tabs">
              { tabButton('characters') }
              { tabButton('skills') }
              { tabButton('items') }
              { tabButton('status effects') }
              { tabButton('places') }
              { tabButton('events') }
              { tabButton('audio') }
              { tabButton('favorites') }
            </div>

            {/* TABS FAVORITES */}
            {/* <div className="favorite-tabs">
              ⭐
              { tabButton(7) }
              { tabButton(8) }
              { tabButton(9) }
              { tabButton(10) }
              { tabButton(11) }
              { tabButton(12) }
              { tabButton(13) }
            </div> */}

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

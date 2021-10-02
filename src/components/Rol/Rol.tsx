import './Rol.css';
import './RolLayout.css';
import './RolLayoutDesktop.css';
import { useEffect, useState } from "react";
import { readCards, writeCard } from './remoteData';

export type GoogleUserType = {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string; }
  
export type CategoryType =
  'characters' |
  'skills' |
  'items' |
  'status effects' |
  'places' |
  'events' |
  'audio' |
  'favorites';

export type CardType = {
  id: string,
  category: CategoryType,
  name: string,
  description: string,
  open: boolean }

const Rol = () => {

  // user
  const user: GoogleUserType = JSON.parse(localStorage.getItem("user") || "");

  // read cards
  const [cards, setCards] = useState<CardType[]>([]);
  useEffect(
    () => readCards(
      'characters',
      cardss => {setCards(cardss)}),
    [] ); // maybe put currentTab and/or searchFilters inside the [] ?

  // write card
  const [card, setCard] = useState<CardType>({
    id: '',
    category: 'characters',
    name: '',
    description: "desc desc desc desc desc desc desc dosc desc des desc desc desc desc dosc desc des desc desc desc desc dosc desc desc desc desc desc",
    open: false });

  const firebasetest = () => {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            const updatedCard = {
              ...card,
              name: e.target.value};
            setCard(updatedCard); }}/>

        <button
          onClick={() => { writeCard(card, false); }}>
          Write Card!</button>

      </div>
    );
  }

  const [showingModal, setShowingModal] = useState(false);

  const firebasetest2 = () => {
    return (<>

      <button
        onClick={() => setShowingModal(true)}>
        Add Card</button>

      <div
        className="modal-mask"
        onClick={() => setShowingModal(false)}
        hidden={!showingModal}>
      </div>
      

      <div
        className="modal-window"
        hidden={!showingModal}>

        <button
          className="card-close-button"
          onClick={() => setShowingModal(false)}>
          x</button>

        <h3>add card</h3>

        <input
          type="text"
          onChange={e => {
            const updatedCard = {
              ...card,
              name: e.target.value};
            setCard(updatedCard); }}/>

        <button
          onClick={() => { writeCard(card, false); }}>
          Write Card!</button>

      </div>
    </>);
  }

  const [cardsOpened, setCardsOpened] = useState<string[]>([]);
  const [currentTab, setCurrentTab] = useState<CategoryType>('characters');
  const [searching, setSearching] = useState(true);

  const tabButton = (category: CategoryType) => {
    return (
      <button
        onClick={() => setCurrentTab(category)}
        className={currentTab === category ? "active" : ""}>
        {/* {number === 7 ? '⭐' : getTabName(number)} */}
        {category.toString()}</button> ); }

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

              {firebasetest2()}

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
              <div>{[...cards].map(x => {
                return <div
                  className={"cardd" + (cardsOpened.includes(x.id) ? "" : " closed")}
                  key={x.id}>
                  <button
                    className="card-close-button"
                    onClick={() => {
                      setCardsOpened(
                        cardsOpened.includes(x.id)
                        ? cardsOpened.filter(y => y !== x.id)
                        : [...cardsOpened, x.id]);
                    }}>
                    <p>x</p></button>
                  <h3>{x.name}</h3>
                  {x.description}</div> })}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Rol;

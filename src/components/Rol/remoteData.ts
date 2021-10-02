// =================================================== FIREBASE =================================================== //

import { firebase } from '../initFirebase';
import { CardType, CategoryType } from './Rol';

const db = firebase.database();

// =================================================== TYPES =================================================== //


// =================================================== ERRORS =================================================== //

type WriteCardError =
  'success' |
  'card-is-undefined' |
  'name-already-exists';

// =================================================== UTIL FUNCTIONS =================================================== //

const toArray = (snapshotVal: { [x: string]: any; }) => {
  return [...Object.keys(snapshotVal).map(key => ( { id: key, ...snapshotVal[key] } )) ]; }

// =================================================== DATA ACCESS AND MANIPULATION FUNCTIONS =================================================== //

/**
 * // Usage example:
 * const card = {name: 'aa', description: 'ee'};
 * console.log("write card " + card + " --- " + writeCard(card).toString());
 */
export const writeCard = (card: CardType, update: boolean): WriteCardError => {

  // if (card === undefined) return 'card-is-undefined';

  const ref = db.ref('cards/');

  if (!update) {
    ref.orderByChild("name").equalTo(card.name).on("child_added", (snap) => {
      console.log(snap.val());
      return 'name-already-exists'; }); }
  
    let cardToWrite;

    if (update) {
      cardToWrite = {
        'id': card.id,
        'category': card.category,
        'name': card.name,
        'description': card.description, } }
    else {
      cardToWrite = {
        'category': card.category,
        'name': card.name,
        'description': card.description, } }

  db.ref("cards").push().set(cardToWrite);

  return 'success'; }

/**
 * // Usage example:
 * const cards = readCards('characters');
 * console.log(cards);
 */
export const readCards = (category: CategoryType, setter: { (cards: any): void; (arg0: any[]): void; }) => {

  const ref = db.ref('cards/');

  ref.orderByChild("category").equalTo(category).on("value", (snap) => {
    const snapArray = toArray(snap.val());
    console.log("LOG");
    console.log(snapArray);
    console.log("/LOG");
    setter(snapArray);});

  return () => ref.off(); }
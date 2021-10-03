// =================================================== FIREBASE =================================================== //

import { firebase } from '../initFirebase';
import { CardType, CategoryType } from './Rol';

const db = firebase.database();

// =================================================== TYPES =================================================== //


// =================================================== ERRORS =================================================== //

type WriteCardAnswer =
  'success' |
  'cant-create-because-name-already-exists' |
  'cant-update-because-card-doesnt-exist';

export type WriteCardType =
  'just-check-if-can-create' |
  'create-new-if-name-doesnt-exist' |
  'update-if-card-exists';

// =================================================== UTIL FUNCTIONS =================================================== //

const toArray = (snapshotVal: { [x: string]: any; }) => {
  return [...Object.keys(snapshotVal).map(key => ( { id: key, ...snapshotVal[key] } )) ]; }

// =================================================== DATA ACCESS AND MANIPULATION FUNCTIONS =================================================== //

/**
 * // Usage example:
 * const card = {name: 'aa', description: 'ee'};
 * console.log("write card " + card + " --- " + writeCard(card).toString());
 */
export const writeCard = (card: CardType, update: boolean): WriteCardAnswer => {

  // get reference

  const ref = db.ref('cards/');

  // name already exists?

  let nameAlreadyExists = false;

  if (!update) {
    ref.orderByChild("name").equalTo(card.name).on("child_added", (snap) => {
      nameAlreadyExists = true;
      console.log("wanting to write a NEW card, but name already exists! " + nameAlreadyExists);
      console.log(snap.val());
      console.log("/wanting to write a NEW card, but name already exists!"); }); }
  
  if (nameAlreadyExists) return 'cant-create-because-name-already-exists';
  console.log("How am I here if nameAlreadyExists is " + nameAlreadyExists + " ???");

  // write card

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
 * const card = {name: 'aa', description: 'ee'};
 * console.log("write card " + card + " --- " + writeCard(card).toString());
 * https://www.codegrepper.com/code-examples/typescript/check+if+a+user+already+exists+firebase+realtime+database+react+native
 */
// export const writeCard = async (card: CardType, action: WriteCardType): WriteCardAnswer => {
//   const ref = db.ref('cards/');

//   let answer: WriteCardAnswer = 'success';

//   await ref
//   .orderByChild('name')
//   .equalTo(card.name)
//   .once('value');
//   // .then(snapshot => {
//     if (snapshot.exists()) {
//       let cardData = snapshot.val();
//       if (
//         action === 'create-new-if-name-doesnt-exist' ||
//         action === 'just-check-if-can-create') {
//           answer = 'cant-create-because-name-already-exists';
//           console.log(answer);
//           return answer; }
//       else if (action === 'update-if-card-exists') {
//         const cardToWrite = {
//           'id': card.id,
//           'category': card.category,
//           'name': card.name,
//           'description': card.description, }
//         db
//         .ref("cards")
//         .push()
//         .set(cardToWrite)
//         .then(async cardd => {
//           console.log('Data updated', cardd);
//           return answer; }); }
//       return cardData; }
//     else {
//       if (action === 'create-new-if-name-doesnt-exist') {
//         const cardToWrite = {
//           'category': card.category,
//           'name': card.name,
//           'description': card.description, }
//         db
//         .ref("cards")
//         .push()
//         .set(cardToWrite)
//         .then(async cardd => {
//           console.log('Data created', cardd);
//           return answer; }); } }
//         //  }
//          );

//   // return answer;
//  }

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
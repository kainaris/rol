import { firebase } from '../../initFirebase';

const db = firebase.database();

const toArray = (snapshotVal: { [x: string]: any; }) => {
  return [...Object.keys(snapshotVal).map(key => ({
      id: key,
      ...snapshotVal[key]
  }))];
}

export const writeUser = (name: any, password: string) => {
  db.ref("users").push().set({
    'name': name,
    'password': password,
  });
}

export const readUsers = (setter: { (userss: any): void; (arg0: any[]): void; }) => {
  const ref = db.ref('users/');
  ref.on("value", (snapshot) => {
    setter(toArray(snapshot.val()));
  });
  return () => ref.off();
}

// export const CategoriesArray = [
//   'characters',
//   'skills',
//   'items',
//   'status effects',
//   'places',
//   'events',
//   'audio'
// ];
export type Categories =
  'characters' |
  'skills' |
  'items' |
  'status effects' |
  'places' |
  'events' |
  'audio' |
  'favorites';

// export const getCategoriesArray = () => {
//   Array()
// }

  // export enum Categories {
  //   'characters' |
  //   'skills' |
  //   'items' |
  //   'status effects' |
  //   'places' |
  //   'events' |
  //   'audio'
  // };

export const writeThing = (
  category: Categories,
  title: string,
  desc: string,
  imageURL: string) => {
  db.ref(category).push().set({
    title,
    desc,
    imageURL
  });
}

export const readThings = (setter: (arg0: any[]) => void) => {
  const ref = db.ref('users/');
  return ref.on("value", (snapshot) => {
    setter(toArray(snapshot.val()));
    return () => ref.off();
  });
}
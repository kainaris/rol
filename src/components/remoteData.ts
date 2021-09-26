// =================================================== FIREBASE =================================================== //

import { firebase } from './initFirebase';

const db = firebase.database();

// =================================================== TYPES =================================================== //

type UserType = {
  name: string,
  password: string,
}

export type Category =
  'characters' |
  'skills' |
  'items' |
  'status effects' |
  'places' |
  'events' |
  'audio' |
  'favorites';

// =================================================== ERRORS =================================================== //

type WriteUserError =
  'success' |
  'password-is-invalid' |
  'name-already-exists';

type LoginError =
  'success' |
  'user-doesnt-exist' |
  'password-is-incorrect';

// =================================================== REGEXPS =================================================== //

// https://digitalfortress.tech/js/top-15-commonly-used-regex/

const usernameRegexp = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

// =================================================== UTIL FUNCTIONS =================================================== //

const toArray = (snapshotVal: { [x: string]: any; }) => {
  return [...Object.keys(snapshotVal).map(key => ({
      id: key,
      ...snapshotVal[key]
  }))];
}

// =================================================== DATA ACCESS AND MANIPULATION FUNCTIONS =================================================== //

/**
 * // Usage example:
 * const user = {name: 'aa', password: 'ee'};
 * console.log("write user " + user + " --- " + writeUser(user).toString());
 */
export const writeUser = (user: UserType): WriteUserError => {
  // check if password is valid

  // check if name already exists
  let nameExists = false;
  const ref = db.ref('users/');
  ref.on("value", (snapshot) => {
    if (toArray(snapshot.val()).includes((x: UserType) => x.name === user.name)) return 'name-already-exists';
  });
  
  db.ref("users").push().set({
    'name': user.name,
    'password': user.password,
  });

  return 'success';
}

export const readUsers = (setter: { (userss: any): void; (arg0: any[]): void; }) => {
  const ref = db.ref('users/');
  ref.on("value", (snapshot) => {
    setter(toArray(snapshot.val()));
  });
  return () => ref.off();
}

export const loginUser = (user:UserType) => {
  const ref = db.ref('users/');
  ref.on("value", (snapshot) => {
    return toArray(snapshot.val()).includes((x: UserType) => x.name === user.name && x.password === user.password);
  });
  return () => ref.off();
}

export const writeThing = (
  category: Category,
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
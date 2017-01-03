import { browserHistory } from 'react-router';
import Firebase from 'firebase';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

const config = {
  apiKey: "AIzaSyDc45T0LogVnkaO16jMFoKXOALC2s2Mcf0",
  authDomain: "albumtracker-7462d.firebaseapp.com",
  databaseURL: "https://albumtracker-7462d.firebaseio.com",
};

Firebase.initializeApp(config);

// export function fetchAlbums() {
//   return function(dispatch) {
//     const userUid = Firebase.auth().currentUser.uid;

//     Firebase.database().ref(userUid).on('value', snapshot => {
//       dispatch({
//         type: FETCH_ALBUMS,
//         payload: snapshot.val()
//       })
//     });
//   }
// }

// export function signUpUser(credentials) {
//   return function(dispatch) {
//     Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
//       .then(response => {
//         dispatch(authUser());
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(authError(error))
//       });
//   }
// }

// export function signInUser(credentials) {
//   return function(dispatch) {
//     Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(response => {
//         dispatch(authUser());
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(authError(error))
//       });
//   }
// }

export function signOutUser() {
  browserHistory.push('/');

  return {
    type: SIGN_OUT_USER
  }
}

export function verifyAuth() {
  return function(dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  }
}

export function authUser() {
  return {
    type: AUTH_USER
  }
}

// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   }
// }

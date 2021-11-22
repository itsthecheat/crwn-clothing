import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyAZ7b4xkJjDOT1qkCdwG5X4tgoXbc5zNJk",
  authDomain: "crwn-db-b204b.firebaseapp.com",
  projectId: "crwn-db-b204b",
  storageBucket: "crwn-db-b204b.appspot.com",
  messagingSenderId: "130008962653",
  appId: "1:130008962653:web:9cd3341866532e94201fb4"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
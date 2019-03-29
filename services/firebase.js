import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC5rxkzk_eVwI3dQvFaC89hcpVBn4zCEnA",
    authDomain: "nxut-50586.firebaseapp.com",
    databaseURL: "https://nxut-50586.firebaseio.com",
    projectId: "nxut-50586",
    storageBucket: "nxut-50586.appspot.com",
    messagingSenderId: "1021053836954"
  };
  firebase.initializeApp(config);

  export default firebase
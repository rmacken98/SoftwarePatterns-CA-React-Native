import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAXQcycXOnkNueTIO74NAkAVc9COkkKFEg",
    authDomain: "softwarepartternsca.firebaseapp.com",
    projectId: "softwarepartternsca",
    storageBucket: "softwarepartternsca.appspot.com",
    messagingSenderId: "775887542139",
    appId: "1:775887542139:web:1f4c966a41cda437f1cfde",
    databaseURL: "https://softwarepartternsca-default-rtdb.europe-west1.firebasedatabase.app/",

}

let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
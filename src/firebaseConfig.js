// firebase.google.com to create a project
// set Database/rules to true, true for now
// import databse to NewPizza.vue

// npm install --save firebase
import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCiY2zpWkVtk68pabBALar4RxjAlL9_9us",
  authDomain: "pizzaplanet-df188.firebaseapp.com",
  databaseURL: "https://pizzaplanet-df188.firebaseio.com",
  projectId: "pizzaplanet-df188",
  storageBucket: "",
  messagingSenderId: "566814622250"
};
const firebaseApp = Firebase.initializeApp(config);

const db = firebaseApp.database() ;
export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders');

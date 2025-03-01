
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwcmVj-2hGhm7o-tCEi_rU1N-KDpgOJ5Q",
  authDomain: "rezelbuilds-68bd1.firebaseapp.com",
  databaseURL: "https://rezelbuilds-68bd1-default-rtdb.firebaseio.com",
  projectId: "rezelbuilds-68bd1",
  storageBucket: "rezelbuilds-68bd1.firebasestorage.app",
  messagingSenderId: "369827627620",
  appId: "1:369827627620:web:d550ab441fe304a2621571",
  measurementId: "G-XLVZSG1CV8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


Signup.addEventListener('click',(e)=>{

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid),{
      username: name,
      email: email,
      password: password
    })
    alert('User Created!');

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  
  });
});

login.addEventListener('click',(e)=>{

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const dt = new Date();
    update(ref(database, 'users/' + user.uid),{
      last_login: dt,
    })

    alert('User Login!');
    window.location.href = "templates.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
  
  }
});

logout.addEventListener('click',(e)=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    alert('User LogOut!');
    window.location.href = "index.html";

  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});


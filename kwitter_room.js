

const firebaseConfig = {
      apiKey: "AIzaSyB8KAg3uAit85YKQatjU9sZDRzsnKgbY58",
      authDomain: "kwitter-9069b.firebaseapp.com",
      databaseURL: "https://kwitter-9069b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9069b",
      storageBucket: "kwitter-9069b.appspot.com",
      messagingSenderId: "600959182480",
      appId: "1:600959182480:web:42268149783990e0ad1a15",
      measurementId: "G-CHK0XP1T21"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

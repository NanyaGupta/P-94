// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBMLzv8pUAr6JZivtCZjlyHc7fFUMGzNP8",
    authDomain: "kwitterwebapp-66112.firebaseapp.com",
    projectId: "kwitterwebapp-66112",
    storageBucket: "kwitterwebapp-66112.appspot.com",
    messagingSenderId: "565165382903",
    appId: "1:565165382903:web:5cecb5b61d61a5b60f47f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  userName=localStorage.getItem("userName");

   //End code
   });});}
getData();
function logOut(){
   localStorage.removeItem("userName");
   localStorage.removeItem("roomName");
   window.location="index.html";
}
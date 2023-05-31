
var  firebaseConfig = {
  apiKey: "AIzaSyBip1vMwJy6c3JQiPilk44McHrcgP6QZRY",
  authDomain: "kwitter-c035f.firebaseapp.com",
  databaseURL: "https://kwitter-c035f-default-rtdb.firebaseio.com",
  projectId: "kwitter-c035f",
  storageBucket: "kwitter-c035f.appspot.com",
  messagingSenderId: "214898755717",
  appId: "1:214898755717:web:378bf1597f18cdd0c541ec",
  measurementId: "G-LG2JLJYVPP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{

  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({

    purpose:"adding room name"
  });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomname(this.id)' >#"+Room_names+"</div></hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 

function redirecttoRoomname(name)
{

  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}



function logout()
{

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}




//Firebase is a NoSQL database
const config={
    apiKey: "AIzaSyAEXwEjxKrRktbxgElSpjtaCwkyrgUADTM",
    authDomain: "business-website-6e7db.firebaseapp.com",
    projectId: "business-website-6e7db",
    storageBucket: "business-website-6e7db.appspot.com",
    messagingSenderId: "491269676079",
    appId: "1:491269676079:web:da78482eb875a7f3efbada",
    measurementId: "G-DC0S927Z0R"
};
firebase.initializeApp(config);
var messageRef=firebase.database().ref('messages');
let form=document.getElementById("createform").addEventListener("submit",submit)
let email=document.getElementById("email")
function submit(e){
    e.preventDefault();
    let newMessageRef=messageRef.push();
    newMessageRef.set({
     email:email.value
 })
    alert("Your email saved to our database")
}

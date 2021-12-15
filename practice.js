var firebaseConfig = {
    apiKey: "AIzaSyD16hAgpMkFIiEFKQ48nD_OPoSHwQwN1ug",
    authDomain: "practice-activity-9103c.firebaseapp.com",
    databaseURL: "https://practice-activity-9103c-default-rtdb.firebaseio.com",
    projectId: "practice-activity-9103c",
    storageBucket: "practice-activity-9103c.appspot.com",
    messagingSenderId: "965950293361",
    appId: "1:965950293361:web:86d3e4bad74a95a265e2d0"
  };

firebase.initializeApp(firebaseConfig);
function addUser()
{
user_name = document.getElementById("user_name").value ;
firebase.database().ref("/").child(user_name).update({
    purpose: " adding user"
});
}
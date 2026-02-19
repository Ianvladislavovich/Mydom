// userdata.js

// Retrieve the authenticated user's data
const user = firebase.auth().currentUser;

// Access the user's information
const name = user.displayName;
const email = user.email;
const photoURL = user.photoURL;

// Update the HTML elements with the user's information
document.getElementById('name').innerHTML = name;
document.getElementById('email').innerHTML = email;
document.getElementById('photo').src = photoURL;
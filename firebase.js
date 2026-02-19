// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB30cj3b436MDMARBaxQ1Mexr3mMiqUGgc",
    authDomain: "success-628a1.firebaseapp.com",
    projectId: "success-628a1",
    storageBucket: "success-628a1.appspot.com",
    messagingSenderId: "860783429352",
    appId: "1:860783429352:web:62023fc54c20ef95e9ab5d",
    measurementId: "G-RKWD52DCYE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit button
const submit = document.getElementById('submit-button');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

 // Validate input fields
 if (validate_email(email) == false || validate_password(password) == false) {
  alert('Email or Password is Outta Line!!');
  return;
  // Don't continue running the code
}
if (validate_field(firstName) == false || validate_field(lastName) == false || validate_field(email) == false) {
  alert('One or More Extra Fields is Outta Line!!');
  return;
}

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

// Check if password and confirm password match
if (password !== confirmPassword) {
  alert("Passwords do not match!");
  return;
}

  createUserWithEmailAndPassword (auth, email, password, firstName, lastName)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    alert("Signing Up...");
    displayProfile(user.email); // Call the displayProfile function with the user's email
    // ...
    window.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
    alert(errorMessage);
  });
});

function displayProfile(email) {
  // Code to display the user's profile
  console.log("Displaying profile for user:", email);
}


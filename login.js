// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Firebase configuration
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

// Submit button listener
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful login, redirect to Dashboard.html
            window.location.href = "Dashboard.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage); // Display error message
        });
});

// Handle user state change
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in");
        // You can also handle UI updates or redirects here if necessary
    } else {
        console.log("No user is signed in");
        // Optionally hide certain elements
    }
});
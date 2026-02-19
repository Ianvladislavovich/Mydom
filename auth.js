// firebase.js

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      // Redirect or display a success message
    })
    .catch((error) => {
      // Sign-in failed
      console.error(error);
      // Display an error message
    });
});
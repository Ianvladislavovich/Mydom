const auth = firebase.auth();

const signupBtn = document.getElementById('signup-btn');

signupBtn.addEventListener('click', () => {
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      // User signed in
      toggleProfileDisplay();
    });
});

auth.onAuthStateChanged(user => {
    if(user) {
      toggleProfileDisplay(); 
    }
  });
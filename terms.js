// Assuming you have already loaded the necessary DOM elements

// Get the Accept button element
const acceptBtn = document.querySelector('.red-btn');

// Add a click event listener to the Accept button
acceptBtn.addEventListener('click', () => {
  // Set the acceptance state in local storage
  localStorage.setItem('termsAccepted', 'true');
  
  // Perform any actions you want when the terms are accepted
  
  // Redirect the user to another page or update the UI accordingly
  window.location.href = 'index.html';
});
// Assuming you have already loaded the necessary DOM elements

// Get the chatbox elements
const chatboxWrapper = document.querySelector('.chatbox-wrapper');
const messageInput = document.querySelector('.chatbox-message-input');
const messageForm = document.querySelector('.chatbox-message-form');

// Add a submit event listener to the message form
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the user's message
  const message = messageInput.value.trim();

  if (message !== '') {
    // Send the message to the backend
    fetch('/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
        // Handle the result if needed
      })
      .catch(error => {
        console.error('An error occurred:', error);
        // Handle the error if needed
      });
  }

  // Clear the input field
  messageInput.value = '';
});

// Toggle the chatbox visibility
const chatboxToggle = document.querySelector('.chatbox-toggle');
chatboxToggle.addEventListener('click', () => {
  chatboxWrapper.classList.toggle('chatbox-visible');
});








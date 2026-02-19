// Import required modules
const express = require('express');
const app = express();

// Define a route for accepting the terms
app.post('/accept', (req, res) => {
  // Perform any actions you want when the terms are accepted
  
  // Return a response to the client
  res.send('Terms accepted successfully!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
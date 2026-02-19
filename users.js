// server.js (Node.js Backend)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Mock data for recent updates
const updates = [
  { id: 1, name: 'John Doe', message: 'Placed an order', photo: 'images/john.jpg' },
  { id: 2, name: 'Jane Smith', message: 'Placed an order', photo: 'images/jane.jpg' },
  { id: 3, name: 'Alice Johnson', message: 'Placed an order', photo: 'images/alice.jpg' },
];

// Endpoint to fetch recent updates
app.get('/api/updates', (req, res) => {
  res.json(updates);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
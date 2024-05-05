const express = require('express');

// Create an instance of express called app
const app = express();

// Listen to port 7865 and log a message to the console when the server is started
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Endpoint to return available payment methods
app.get('/available_payments', (req, res) => {
  // Return the specified object
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  // Extract userName from the request body
  const { userName } = req.body;

  // Return the "Welcome :username" message
  res.status(200).send(`Welcome ${userName}`);
});

module.exports = app;
const express = require('express');

// Create an instance of express called app
const app = express();

// Listen to port 7865 and log a message to the console when the server is started
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Endpoint to return available payment methods
app.get('/available_payments', (req, res) => {
  // Return the specified object
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  // Extract userName from the request body
  const { userName } = req.body;

  // Return the "Welcome :username" message
  res.status(200).send(`Welcome ${userName}`);
});

module.exports = app;

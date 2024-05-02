const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 1245;

// Using routes defined in index.js
app.use('/', routes);

// Starts the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

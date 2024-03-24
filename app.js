// Student Name: Morgan Cividanes
// Student ID: 1214955807
// Date: March 24 2024
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('hello Morgan');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port 3000`);
});
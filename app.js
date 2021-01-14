const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const app = express();

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.use(express.static(__dirname + "/"));

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
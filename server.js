const express = require('express');
const bodyparser = require('body-parser');

const profile = require('./routes/api/profile');

const app = express();

const PORT = 5000; 

app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

app.use('/api/profile', profile);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
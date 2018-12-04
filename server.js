const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const PORT = 5000; 

app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
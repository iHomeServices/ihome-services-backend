const express = require('express');
const app = express();
const router = require('./router');

const hostname = 'localhost';
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
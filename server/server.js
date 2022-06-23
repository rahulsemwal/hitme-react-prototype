const path = require('path');

const express = require("express");

const serverless = require('serverless-http');

const server = express();

// const router = express.Router();

const axios = require('axios');

// const bodyParser = require('body-parser');

server.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

server.get("/newsapi", (req, res) => {
  const config = {};
  config.url = "https://newsapi.org/v2/everything?q=tesla&from=2022-06-23&sortBy=publishedAt&apiKey=c438f5b301e94324a9c5609062fe4b73";
  config.apiKey = "c438f5b301e94324a9c5609062fe4b73";
  axios.get(config.url).then((response) => {
    console.log(response.data);
    res.json(response.data);
  }).catch(e => {
    console.log("Error: ", e);
    res.json({});
  });
});

// All other GET requests not handled before will return our React app
// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client', 'index.html'));
// });
server.use(express.static(path.join(__dirname, '../client/build')));
// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express.js!</h1>');
//   res.end();
// });
// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));

// server.use(bodyParser.json());
// server.use('/.netlify/functions/server', router);  // path must route to lambda
// server.use('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build','index.html')));

module.exports = server;
module.exports.handler = serverless(server);
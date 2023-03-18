const path = require('path');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const axios = require('axios');

app.use(express.static(path.resolve(__dirname, '../client/build'))); 

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/newsapi", (req, res) => {
  const config = {};
  //[0 data coming on 2023-03] config.url = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-18&sortBy=publishedAt&apiKey=c438f5b301e94324a9c5609062fe4b73";
  // [for US]config.url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=c438f5b301e94324a9c5609062fe4b73';
  config.url = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=c438f5b301e94324a9c5609062fe4b73';
  // var req = new Request(url);
  config.apiKey = "c438f5b301e94324a9c5609062fe4b73";
  axios.get(config.url).then((response) => {
    console.log(response);
    res.json(response.data);
  }).catch(e => {
    console.log("Error: ", e);
    res.json({});
  });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


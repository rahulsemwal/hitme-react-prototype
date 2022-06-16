//https://www.developerdrive.com/a-simple-way-to-add-free-news-content-to-your-website/
//var feed =”http://feeds.bbci.co.uk/news/world/rss.xml”;
// var feed =”http://rss.cnn.com/rss/edition_world.rss”;
// var feed =”http://feeds.reuters.com/Reuters/worldNews “;
const Sources = [{
  "type":"newsApi",
  "@Docs":"",
  "domain":"https://newsapi.org",
  "format":"https://newsapi.org/v2/{*permalink}?{parameters added with & operators}&apiKey={*Generated apiKey}",
  "permalink":["top-headlines","everything"],
  "parameters":["country","category","sources","apiKey", "it may be object in future"],
  "apiKey":"c438f5b301e94324a9c5609062fe4b73",
  "url":"/newsapi",
  "method":"GET",
  "body":null,
  "maxHitLimit":"450",
  "reqParser":"newsApiRequestParser",
  "resParser":"newsApiResponseParser"
},{
  "type":"newsApiEntertainment",
  "@Docs":"",
  "domain":"https://newsapi.org",
  "format":"https://newsapi.org/v2/{*permalink}?{parameters added with & operators}&apiKey={*Generated apiKey}",
  "permalink":["top-headlines","everything"],
  "parameters":[{"country":[]},{"category":["business","entertainment"]},{"sources":[]},{"apiKey":["d518623f4ffd44aabfb7fbc701457dcc"]}],
  "apiKey":"d518623f4ffd44aabfb7fbc701457dcc",
  "url":"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d518623f4ffd44aabfb7fbc701457dcc",
  "method":"GET",
  "body":null,
  "maxHitLimit":"450",
  "reqParser":"newsApiRequestParser",
  "resParser":"newsApiResponseParser"
}]
export default Sources

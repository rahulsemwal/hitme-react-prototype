export default class ApiParser{
  // constructor(){}
  //genric get call
  asyncGetCall(config){
    return fetch(config.url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      return data
    })
    .catch(function(err){
      const error = {
        "error":err
      }
      console.log("Error in network call", err);
      return error
    });
  }
  //newsApi response parser
  newsApiResponseParser(data){
    let pipe = {...data}
    pipe.articles = data.articles.map(function(o,i){
      let capsule = {}
      capsule.source = o.source.name
      capsule.author = (o.author==null)?"Anonymous":o.author
      capsule.title = o.title
      capsule.description = o.description
      capsule.url = o.url
      capsule.urlToImage = o.urlToImage
      capsule.publishedAt = o.publishedAt
      capsule.content = o.content
      return capsule
    })
    console.log(pipe)
    return pipe;
  }
}

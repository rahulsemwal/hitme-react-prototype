import API from "./API"
import ApiParser from "./ApiParser"
class ApiProvider extends ApiParser{
  constructor(){
    super()
    this.collection = {type:"newsApi"}
  }
  get(config){
    let collection = {}
    if(config&&config.type){
      collection = API(config)
    }else{
      //default
      collection = API(this.collection)
    }
    this.collection = collection
    console.log("current collection ", this.collection)
    //Actual api call with fetch api, return promise
    //CALLING API BY FETCH AS STORED IN COLLECTION
    //PARSE RESPONSE AS PER THE GIVEN PARSER RULE IN collection
    //RETURN PARSED DATA TO COMPONENTS
    return this.asyncGetCall(this.collection).then((res)=>{
      return this[this.collection.resParser](res)
    })
  }
}

export default ApiProvider

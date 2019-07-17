/*
@@DOCS
@React 16.8 - componentWillMount, componentWillReceiveProps, componentWillUpdate must not use if you are using "static getDerivedStateFromProps"
*/
import React from 'react'
import Card from '../Card/Card'
import "./NewsBox.css"
class NewsBox extends React.Component{
  constructor(){
    super();
    this.state = {
      "buffer": {"articles":[]},
      "updateCounter":0,
    }
  }
  // static getDerivedStateFromProps(nextProps,state){
  //   console.log("inside getDerivedStateFromProps always call before render method", nextProps, state)
  //   return { "updateCounter": nextProps.data }
  // }
  componentWillMount(){
    // console.log("inside willMount, called first time only before render")
    console.log("=============================================================")
    this.methods.engine("play")
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("inside will receive props, will call when props changes, will not work if getDerivedStateFromProps method used",this.props, nextProps)
  //   // this.props = nextProps
  //   // this.methods.engine("play");
  //   // this.methods.updateState("updateCounter",nextProps.updateCounter);
  // }
  shouldComponentUpdate(nextProps, nextState){
    //trigger when
    // return a boolean value
    // console.log("inside shouldComponentUpdate, will call before render if and only if update in state happen",this.props, nextProps, this.state, nextState);
    console.log("INSIDE shouldComponentUpdate")
    console.log("current props     = ", this.props)
    console.log("current nextProps = ", nextProps)
    console.log("current state     = ", this.state)
    console.log("current nextState = ", nextState)
    console.log("=============================================================")

    if(!nextProps.updateCounter || nextProps.updateCounter!=this.props.updateCounter){
        return true
    }
    return false
  }
  // componentDidUpdate(prevProps, prevState){
  //   // console.log("inside didUpdate call after render if an only if state updated", prevProps, prevState)
  //   if(prevProps.updateCounter!=this.props.updateCounter){
  //     // this.methods.updateState("updateCounter",this.props.updateCounter)
  //   }
  // }
  componentDidMount(){
    // console.log("inside didmount, called first time only after render")
  }
  componentWillUnmount(){
    // console.log("inside willUnMount, called when component expires")
  }
  Source = {
    "newsapi":{
      "url":"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d518623f4ffd44aabfb7fbc701457dcc",
      "method": "GET",
      "body":{},
      "Content-Type":"JSON"
    }
  }
  service = {
    "fetchPost":(config)=>{
      // return Buffer;
      return fetch(this.Source[config.type].url)
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
  }
  methods = {
    "engine":(plug)=>{
      this.methods.getData().then((result)=>{
        // this.setState({"buffer":result})
        this.methods.updateState("buffer",result);
      });
    },
    "getData":()=>{
      return this.service.fetchPost({type:"newsapi"}).then( result => {
        return result;
      });
    },
    "updateState":(key,data)=>{
      let obj = {}
      obj[key] = data
      this.setState(obj)
    }
  }
  //render
  render(){
    console.log("INSIDE RENDER", this.state, this.props);
    console.log("=============================================================")
    return(
      <div className="news-board">
        {this.state.buffer.articles.map((o,i) => {
          return <Card  key={i} article={o}/>
        })}
      </div>
    )
  }
}

export default NewsBox

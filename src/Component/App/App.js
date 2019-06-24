import React , {Component} from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import Buffer from './Buffer'
import NoNetworkFound from '../NoNetworkFound/NoNetworkFound'
import FoodBox from "../FoodBox/FoodBox"
console.log("got buffer ",Buffer);

class App extends Component{
  constructor(){
    super();
    // this.refreshData();
    this.state = {
      "buffer": Buffer,
      "updateCounter":0,
      "offline": this.handleCheckOnline()
    }
    this.service.fetchPost("");
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }
  handleCheckOnline = () => window.navigator.onLine
  handleScroll = (event) =>{
    if(!window.scrollY){
      this.setState({
        "updateCounter":this.state.updateCounter +1,
        "offline": this.handleCheckOnline()
      });
    }
  }
  service = {
    "fetchPost":(config)=>{
      // return Buffer;
      fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d518623f4ffd44aabfb7fbc701457dcc')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log((data));
      });
    }
  }
  refreshData = () => {
    return "I am ankush"
    // @DOC
    const Sources = [{
      url:"news.api.com",
      method:"GET",
      body:{},
    },{
      url:"onlineWetherMap.com",
      method:"GET",
      body:{}
    }];

  }
  render(){
    return(
      <div className="App">
        <h1>Hitme.com {this.state.updateCounter}</h1>
        <Nav/>
        {this.state.offline?null:<NoNetworkFound/>}
        {this.state.buffer.articles.map((o,i) => {
          return <Card  key={i} article={o}/>
        })}
        <FoodBox/>
      </div>
    );
  }
}

export default App;

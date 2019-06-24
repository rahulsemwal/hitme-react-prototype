import React , {Component} from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import Buffer from './Buffer'
import NoNetworkFound from '../NoNetworkFound/NoNetworkFound'
console.log("got buffer ",Buffer);

class App extends Component{
  state = {
    "buffer": Buffer,
    "updateCounter":0
  }
  componentDidMount(){
     console.log("componentDidMount");
     console.log(this.state);
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event) =>{
    // console.log(Buffer);
    if(!window.scrollY){
      //logic for refresh app later
      this.setState({
        updateCounter:this.state.updateCounter +1
      });
    }
    console.log(this.state)
  }
  render(){
    return(
      <div className="App">
        <h1>Hitme.com {this.state.updateCounter}</h1>
        <Nav/>
        <NoNetworkFound/>
        {this.state.buffer.articles.map((o,i) => {
          return <Card  key={i} article={o}/>
        })}
      </div>
    );
  }
}

export default App;

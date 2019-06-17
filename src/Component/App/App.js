import React , {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import Buffer from './Buffer'
console.log("got buffer ",Buffer);
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hitme.com</h1>
        <Nav/>
        {Buffer.articles.map((o,i) => {
          return <Card article={o}/>
        })}
      </div>
    );
  }
}

export default App;

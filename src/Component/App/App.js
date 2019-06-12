import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hitme.com</h1>
        <Nav/>
      </div>
    );
  }
}

export default App;

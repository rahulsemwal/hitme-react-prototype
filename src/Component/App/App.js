import React , {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hitme.com</h1>
        <Nav/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}

export default App;

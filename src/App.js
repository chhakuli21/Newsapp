//import logo from './logo.svg';
import './App.css';
//forstucture rcc for class stuture and rfc for the function structure 


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

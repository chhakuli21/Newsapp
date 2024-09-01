//import logo from './logo.svg';
import './App.css';
//forstucture rcc for class stuture and rfc for the function structure 


import React, { Component } from 'react'

export default class App extends Component {
    C = 'Chhakuli';
    render() {
        return ( <
            div >
            hello my first class based component { this.C } <
            /div>
        )
    }
}
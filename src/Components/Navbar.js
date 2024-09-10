//rfcp 
import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class Navbar extends Component {
  

  render() {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data_bs_toggle="collapse" data_bs_target="#navbarSupportedContent" aria_controls="navbarSupportedContent" aria_expanded="false" aria_label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria_current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    
                   
                </ul>
              
                </div>
            </div>
    </nav>
        </div>
        </>
    )
  }
}

export default Navbar

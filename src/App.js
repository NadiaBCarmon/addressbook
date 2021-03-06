import React, { Component } from 'react';
import './App.css';
//import List from './List.js';
import TextAndSubmit from './TextAndSubmit';
import {Link} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div className="parent">
       
        <div className="title">
              <center>
              <div className="tabs">
                <ul>
                  <li className="AboutUs"><Link to="/AboutUs">About Us</Link></li>
                  <li className="ContactUs"><Link to="/ContactUs">Contact Us</Link></li>
                </ul>
              </div>
               </center>
       <div className="header"><h1>Address Book</h1></div>
        </div>

        <br />
        <br />
        <br />
        <div className="textandsubmit"> <TextAndSubmit /> </div>
        <div className="newaddresses"><h2></h2></div>
        <div className="list"><h2>{this.props.addresses}</h2></div>
     

      </div>
    )
  }
}

App.defaultProps = {

	addresses: [ <br />, 'O-Ren Ishii, +8174-788-1012, 191-1014, Nishishinjuku Shinjuku Nomurabiru(45-kai), Shinjuku-ku, Tokyo,', <br />, 'Vernita Green, (323)-280-4794, 1768 Norman Street, Los Angeles, CA 90017,', <br />, 'Budd, (626)-292-1202, 187 Fulsom Avenue, San Gabriel, CA 91775,', <br />, 'Elle Driver, (949)-569-4371, 1 East Bayberry Street, Hanford, CA 93230,', <br />, 'Bill, (413)-512-7496, 582 Creek Lane, El Cajon, CA 92021']
}


export default App;

import React from 'react';
import './App.css';
import List from './List.js';
import TextAndSubmit from './TextAndSubmit';

class App extends React.Component {

  render() {
    return (
      <div className="parent">
        <div className="title"><h1>The Bride's List</h1></div>
        <div className="textandsubmit"> <TextAndSubmit /></div>
        <div className="list"> <List /> </div>
      </div>
    )
  }
}

export default App;

import React from 'react';
//import className  result from './List.js';

class TextAndSubmit extends React.Component {

	//https://reactjs.org/docs/forms.html//
	//https://codepen.io/gaearon/pen/VmmPgp?editors=0010//
	//Look at assignment with "I hate mondays" text boxes//

 constructor() {
	super();

	this.state= {
		name: "",
		phone: "",
		address: ""
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	this.setState({name: event.target.value});
  	this.setState({phone: event.target.value});
  	this.setState({address: event.target.value})
  }

  handleSubmit(event) {
  	document.getElementById('result').innerHTML = this.state.name + this.state.phone + this.state.address;
  	event.preventDefault();
  }

	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Name" ref="name" value={this.state.name} onChange={this.handleChange}></input>
			<input type="text" placeholder="Phone Number" ref="phone" value={this.state.phone} onChange={this.handleChange}></input>
			<input type="text" placeholder="Address" ref="address" value={this.state.address} onChange={this.handleChange}></input>
			<input type="submit" value="Submit"></input>
			</form>
			</div>
		)
	}
}

export default TextAndSubmit;
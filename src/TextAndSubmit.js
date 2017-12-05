import React from 'react';
import './App.js';
import './Layout.css';

class TextAndSubmit extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			contacts: props.contacts
		};
	}

	addContact(event) {
		event.preventDefault();
		let name = this.refs.name.value;
		let email = this.refs.email.value;
		let phone = this.refs.phone.value;
		let address = this.refs.address.value;
		console.log(this);
		//this.state({
			//search: '',
			//contacts: this.state.contacts.concat({name, email, phone, address})
		//})

	}



	render() {

		//let filteredContacts = this.state.contacts.filter(
			//(contact) => {
		//return concat.contacts.toLowerCase().indexOf(this.state.search)
			
			//});

			//<h2>Button to remove last entry</h2>

		return(
		<div>		
			<center>
			<form onSubmit={this.addContact.bind(this)}>
			<input type="text" placeholder="Name" ref="name"></input>
			<input type="email" placeholder="Email" ref="email"></input>
			<input type="text" placeholder="Phone Number" ref="phone"></input>
			<input type="text" placeholder="Address" ref="address"></input>
			<input type="submit" placeholder="Submit"></input>
			</form>

			</center>
		</div>
		)
	}	
}

export default TextAndSubmit;
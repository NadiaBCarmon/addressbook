import React from 'react';
import {Link} from "react-router-dom";

class AboutUs extends React.Component {

	render() {
		return (
			<div>
			<h1>Learn more about what we do and how we were founded</h1>
			<center><li className="Home"><Link to="/">Home</Link></li> </center>
			</div>

			)
	}

}

export default AboutUs;
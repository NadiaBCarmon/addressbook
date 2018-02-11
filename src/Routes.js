import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


class Routes extends React.Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/AboutUs" component={AboutUs} />
					<Route exact path="/ContactUs" component={ContactUs} />
				</Switch>
			</Router>
			    )
	}

}

export default Routes;
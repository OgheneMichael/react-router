import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const About = () => <h1>About</h1>;
const Company = () => <h1>Company</h1>;
const User = ({ match }) => (
	<div>
		<h2>User: {match.params.user}</h2>
	</div>
);

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/company">Company</Link>
						</li>
						<li>
							<Link to="/kim">Kim</Link>
						</li>
						<li>
							<Link to="/chris">Chris</Link>
						</li>
					</ul>
					<Switch>
						<Route path="/about" exact component={About} />
						<Route path="/company" component={Company} />
						<Route path="/:user" component={User} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

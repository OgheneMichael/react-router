import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Settings from './Settings';
import Dashboard from './Dashboard';
import {fetchSettings, fetchDashboard} from './api'


const routes = [
	{
		path: '/settings',
		component: Settings,
		fetchInitialData: (id)=> fetchSettings(id)
	},
	{
		path: '/dashboard',
		component: Dashboard,
		fetchInitialData: (id)=> fetchDashboard(id)
	}
]

class App extends Component {
	render() {
		return (
			<Router>
				<div style={{ width: 1000, margin: "0 auto" }}>
					<ul>
						<li>
							<Link to="/settings">Settings</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
					</ul>

					<hr />

					{routes.map(({path, component: C, fetchInitialData}) => (
						<Route path={path} render={(props)=> <C {...props} fetchInitialData={fetchInitialData} />} />
					))}
					
				</div>
			</Router>
		);
	}
}

export default App;

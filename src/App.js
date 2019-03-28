import React, { Component } from "react";

import queryString from "query-string";

class Dashboard extends Component {
	componentDidMount() {
		console.log(this.props.location.search); // "?sorton=market-cap"
		const values = queryString.parse(this.props.location.search);
		console.log(values.sorton); // market-cap
		this.fetchDashboardData(values.sorton);
	}

	fetchDashboardData(value) {}

	render() {
		return <h1>hd</h1>;
	}
}

export default Dashboard;

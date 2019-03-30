import React, { Component } from "react";

import { Link } from "react-router-dom";

<Link to={{
	pathname: '/oghenemichael',
	state: {
		fromNotification: true
	}
}}>Oghene Michael</Link>

class Profile extends Component {
	componentDidMount() {
		const {handle} = this.props.match.params;
		const {fromNotification} = this.props.location.state
	}

	render() {
		return (

		);
	}
}

export default Profile;

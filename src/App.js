import React, { Component } from "react";
import { saveUser } from "./api";
import Form from "./Form";

import { Redirect } from "react-router-dom";

class Register extends Component {
	state = {
		toDashboard: false
	};

	handleSubmit = user => {
		saveUser(user).then(() =>
			this.setState(() => ({
				toDashboard: true
			}))
		);
	};

	render() {
		if (this.state.toDashboard === true) {
			return <Redirect to="/dashboard" />;
		}

		return (
			<div>
				<h1>Register</h1>
				<Form onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default Register;

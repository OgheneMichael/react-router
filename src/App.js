import React, { Component } from "react";
import { saveUser } from "./api";
import Form from "./Form";

import { withRouter } from "react-router-dom";

class Register extends Component {
	handleSubmit = user => {
		saveUser(user).then(() => this.props.history.push("/dashboard"));
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<Form onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default withRouter(Register);

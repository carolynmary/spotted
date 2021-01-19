import React from "react";
import { Col, Row } from "../Grid";
import useLogRender from "../../utils/useLogPath";
import logo from "../../images/spotted-logo.svg"
import "./Head.scss";

function Head() {
	useLogRender();

	return (
		<Row>
			<Col size="12">
				<header className="header">
					<a href="/"><img src={logo} alt="spotted" className="logo" /></a>
				</header>
			</Col>
		</Row>
	);
}

export default Head
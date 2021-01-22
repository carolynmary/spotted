import React from "react";
import { Col, Row } from "../Grid";
import useLogRender from "../../utils/useLogPath";
import logo from "../../images/spotted-logo.svg";
import { FaBars } from 'react-icons/fa';
import "./Head.scss";

const Head = ({ handleToggleSidebar }) => {
	useLogRender();

	return (
		<Row>
			<Col size="12">
				{/* hamburger */}
				<div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
					<FaBars />
				</div>

				{/* logo */}
				<header className="header">
					<a href="/"><img src={logo} alt="spotted" className="logo" /></a>
				</header>
			</Col>
		</Row>
	);
}

export default Head
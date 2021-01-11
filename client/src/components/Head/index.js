import React from "react";
import useLogRender from "../../utils/useLogPath";
import logo from "../../images/spotted-logo.svg"
import "./style.css";

function Nav() {
	useLogRender();

	return (
		<header>
			<a href="/"><img src={logo} alt="spotted" className="logo" /></a>
		</header>
	);
}

export default Nav;

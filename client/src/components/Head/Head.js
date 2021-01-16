import React from "react";
import useLogRender from "../../utils/useLogPath";
import logo from "../../images/spotted-logo.svg"
// import "./Head.scss";

function Head () {
	useLogRender();

	return (
		<header>
			{/* why whole row clickable? */}
			<span>
				<a href="/"><img src={logo} alt="spotted" className="logo" /></a>
			</span>
		</header>
	);
}

export default Head
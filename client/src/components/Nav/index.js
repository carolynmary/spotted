import React from "react";
import "./style.css";
import bird from "../../images/bird.svg"
import clinic from "../../images/clinic.svg"
import connect from "../../images/connect.svg"
import info from "../../images/info.svg"
import map from "../../images/map.svg"
import profile from "../../images/profile.svg"


function Nav() {
	return (
		<nav class="navbar nav flex-column">
			<a href="/feed"><img src={bird} alt="feed" className="icons"/></a>
			<a href="/map"><img src={map} alt="map" className="icons"/></a>
			<a href="/clinic"><img src={clinic} alt="clinic" className="icons"/></a>
			<a href="/connect"><img src={connect} alt="connect" className="icons"/></a>
			<a href="/info"><img src={info} alt="info" className="icons"/></a>
			<a href="/profile"><img src={profile} alt="profile" className="icons"/></a>
		</nav>
	);
}

export default Nav;

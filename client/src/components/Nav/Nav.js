import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import Bird from "../Icons/Bird"
import Map from "../Icons/Map"
import Clinic from "../Icons/Clinic"
import Connect from "../Icons/Connect"
import Info from "../Icons/Info"
import Profile from "../Icons/Profile"

const Nav = ({ collapsed, toggled, handleCollapsedChange, handleToggleSidebar, handleLogoutSubmit, user }) => {
	return (
		<ProSidebar
			collapsed={collapsed}
			toggled={toggled}
			breakPoint="sm"
			onToggle={handleToggleSidebar}
		>

			<SidebarHeader>
				<div className="block ">
					<Switch
						height={16}
						width={30}
						checkedIcon={false}
						uncheckedIcon={false}
						onChange={handleCollapsedChange}
						checked={collapsed}
						onColor="#2b49c8"
						offColor="#bbbbbb"
					/>
					<p>collapsed</p>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<Menu iconShape="circle">
					<MenuItem icon={<Bird />} >Spottings<Link to="/feed" /></MenuItem>
					<MenuItem icon={<Map />}>Map<Link to="/map" /></MenuItem>
					<MenuItem icon={<Info />}>Info<Link to="/info" /></MenuItem>
					<MenuItem icon={<Connect />}>Connect<Link to="/connect" /></MenuItem>
					<MenuItem icon={<Clinic />}>Clinic<Link to="/clinic" /></MenuItem>
					<SubMenu icon={<Profile />} title={"Profile"} >
						<MenuItem>Post a Sighting<Link to="/post" /></MenuItem>
						<MenuItem>Settings<Link to="/settings" /></MenuItem>
					</SubMenu>

					{
						Object.keys(user).length === 0 ?
							<div></div>
							: <div className="navText">Hello {user.username}</div>
					}

					{
						Object.keys(user).length === 0 ?
							<MenuItem id="login">Login<Link to="/login" /></MenuItem>
							: <MenuItem onClick={handleLogoutSubmit} id="logout">Logout</MenuItem>
					}

				</Menu>
			</SidebarContent>

		</ProSidebar>
	);
};

export default Nav;


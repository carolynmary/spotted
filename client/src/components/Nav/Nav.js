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

const Nav = ({ collapsed, handleCollapsedChange }) => {
	return (
	  <ProSidebar
		collapsed={collapsed}
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
			  onColor="#219de9"
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
			  <MenuItem>My Feed</MenuItem>
			  <MenuItem>Settings</MenuItem>
			</SubMenu>
			<MenuItem >Signup<Link to="/signup" /></MenuItem>
		  </Menu>
		</SidebarContent>
  
	  </ProSidebar>
  
	);
  };

  export default Nav;
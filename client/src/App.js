import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head/Head";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute"
import Nav from "./components/Nav/Nav"
import Feed from "./pages/Feed";
import Map from "./pages/Map";
import Clinic from "./pages/Clinic";
import Connect from "./pages/Connect";
import Info from "./pages/Info";
import Settings from "./pages/Settings";
import Post from "./pages/Post";
import "./App.scss";

function App() {
	const [userState, setUserState] = useState({});
	const [collapsed, setCollapsed] = useState(true);
	const [toggled, setToggled] = useState(false);

	useEffect(() => {
		// auth user on first render
		authenticate()
	}, []);

	//user authentication
	function authenticate() {
		return userAPI.authenticateUser()
			.then(({ data }) => {
				console.log('user:', data);
				setUserState(data);
			})
			.catch((err) => console.log('registered user:', err.response));
	}

	const handleCollapsedChange = (nextChecked) => {
		console.log("COLLAPSED: ", collapsed);
		console.log("NEXT: ", nextChecked);
		setCollapsed(nextChecked);
	};

	const handleToggleSidebar = (value) => {
		setToggled({ value });
		setCollapsed(false);
	};

	const handleLogoutSubmit = event => {
		event.preventDefault();
		return userAPI.logout(userState)
			.then(window.location.replace("/login"))
			.catch(err => console.log(err));
	};

	return (
		<Router>
			<Container>
				<Nav className={`app ${toggled ? 'toggled' : ''}`}
					collapsed={collapsed}
					toggled={toggled}
					handleCollapsedChange={handleCollapsedChange}
					handleToggleSidebar={handleToggleSidebar}
					handleLogoutSubmit={handleLogoutSubmit}
					user={userState}
					setUserState={setUserState}
				/>
				<main className={`mainOverrides app ${toggled ? 'toggled' : ''}`}>
					<Head
						toggled={toggled}
						handleToggleSidebar={handleToggleSidebar}
					/>
					<Switch>
						<ProtectedRoute exact path='/map' >
							<Map {...userState} />
						</ProtectedRoute>

						<ProtectedRoute exact path='/info' >
							<Info {...userState} />
						</ProtectedRoute>

						<ProtectedRoute exact path='/clinic' >
							<Clinic {...userState} />
						</ProtectedRoute>

						<ProtectedRoute exact path='/connect' >
							<Connect {...userState} />
						</ProtectedRoute>

						<ProtectedRoute exact path='/post' >
							<Post {...userState} />
						</ProtectedRoute>

						<ProtectedRoute exact path='/settings' >
							<Settings {...userState} />
						</ProtectedRoute>

						<Route exact path='/login' render={props => (
							<Login {...props} userState={userState} setUserState={setUserState} />
						)} />

						<Route exact path='/signup' render={props => (
							<Signup {...props} authenticate={authenticate} user={userState} />
						)} />

						<Route exact path={["/", "/feed"]} component={Feed} />

						<Route component={NoMatch} />
					</Switch>
				</main>

			</Container>
		</Router>
	);
}

export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Comments from "./pages/Comments";
import { Container } from "./components/Grid";
// import Comment from "./pages/Comment";
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
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Post from "./pages/Post";
import "./App.scss";

function App() {
	const [userState, setUserState] = useState({});
	const [collapsed, setCollapsed] = useState(true);

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

	const handleCollapsedChange = (checked) => {
		setCollapsed(checked);
	};

	const handleLogoutSubmit = event => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
		  userAPI.logout({
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			passwordConf: this.state.passwordConf,
	
		  })
			.then(res => {
			  if(res.status === 200 ){
				this.props.authenticate();
				return <Redirect to="/post" /> 
			  }
			})
			.catch(err => console.log(err.response.data));
		}
	  };

	return (
		<Router>
			<Container>
				<Nav className={`app`}
					collapsed={collapsed}
					handleCollapsedChange={handleCollapsedChange}
					handleLogoutSubmit={handleLogoutSubmit}
				/>
				<main className="mainOverrides">
					<Head />
					<Switch>
						{/* spotted routes */}
						<Route exact path={["/", "/feed"]} component={Feed} />
						<Route exact path='/map' component={Map} />
						<Route exact path='/info' component={Info} />
						<Route exact path='/clinic' component={Clinic} />
						<Route exact path='/connect' component={Connect} />
						<Route exact path='/profile' component={Profile} />

						<Route exact path='/signup' render={props => (
							<Signup {...props} authenticate={authenticate} user={userState} />
						)} />

						{/* <Route exact path='/login' component={Login} /> */}
						<Route exact path='/login' render={props => (
							<Login {...props} userState={userState} setUserState={setUserState} />
						)} />
						<ProtectedRoute exact path='/post' >
							<Post {...userState} />
						</ProtectedRoute>

						<ProtectedRoute exact path='/settings' >
							<Settings {...userState} />
						</ProtectedRoute>

						<Route component={NoMatch} />
					</Switch>
				</main>

			</Container>
		</Router>
	);
}

export default App;


// { userState.email ? <Redirect to="/feed" /> : <></>}


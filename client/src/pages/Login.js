import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import { Link, Redirect } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Input, FormBtn, FormBtnSecondary } from "../components/Form";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // WHY NOT REDIRECTING TO FEED??? ==========================================
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      userAPI.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if (res.status === 200) {
            this.props.setUserState(res.data);
            return <Redirect to="/feed" />
          }
        })
        .then ( )
        .catch(err => console.log(err));
    }
  };

  refreshPage = event => {
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
        <Row className="full-width">
          <Col size="12" >

            <div className="login-signup">

            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password"
                type="password"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              > Log in 
              </FormBtn>
              <FormBtnSecondary onClick={this.refreshPage}
              > Cancel 
              </FormBtnSecondary>
            </form>

            <p >Not a member? <Link to="/signup">Signup here.</Link></p>

            </div>

          </Col>
        </Row>
    );
  }
}

export default Login;
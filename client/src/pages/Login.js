import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

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
            return <Redirect to="/post" />
          }
        })
        .catch(err => console.log(err));
    }
  };

  refreshPage = event => {
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
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

              <FormBtn onClick={this.refreshPage}
              > Cancel </FormBtn>

              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </FormBtn>
            </form>
            <p >Not a member? <Link to="/signup" className="form-link">Signup here.</Link></p>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import { Col, Row } from "../components/Grid";
import { Input, FormBtn, FormBtnSecondary } from "../components/Form";

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConf: ""
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
      userAPI.signup({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,

      })
        .then(res => {
          if (res.status === 200) {
            this.props.authenticate();
            this.props.history.push("/feed");
          }
        })
        .catch(err => console.log(err.response.data));
    }
  };

  refreshPage = event => {
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <Row className="full-width">
        <Col size="12">

          <div className="login-signup">

            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username"
              />
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
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="confirm password"
                type="password"
              />

              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              > Signup
              </FormBtn>

              <FormBtnSecondary onClick={this.refreshPage}
              > Cancel
              </FormBtnSecondary>


            </form>
          </div>

        </Col>

      </Row>
    );
  }
}

export default Signup;
// {/* redirect on authenticated */}
// {this.props.authenticated ? <Redirect to='/feed' /> : <div></div>}
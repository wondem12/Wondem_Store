import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
		  <div class="banner-top">
	<div class="container">
		<h3 >Login</h3>
		<h4><Link to="/">Home</Link><label>/</label>Login</h4>
		<div class="clearfix"> </div>
	</div>
</div>
        <div class="login">
          <div class="main-agileits">
            <div class="form-w3agile">
              <h3>Login</h3>

              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="form-control"
                />
                <br />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="form-control"
                />
                <br />
                <input
                  type="submit"
                  name="Login"
                  value="Login"
                  className="btn btn-warning"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;


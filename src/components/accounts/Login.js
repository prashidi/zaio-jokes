import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    isAuthenticated: false
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "joker@zaio.io" && password === "zaiojoke") {
      this.setState({
        isAuthenticated: true
      });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;

    if (this.state.isAuthenticated) {
      return <Redirect to="/joke" />;
    } else {
      console.log("Error");
    }
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;

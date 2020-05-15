import React, { Component } from "react";
import "../../../src/App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends Component {
  render() {
    return (
      <Form className="Login-form">
        <h1 className="text-center">
          <span className="font-weight-bold">Login</span>
        </h1>
        <h3 className="text-center">Welcome</h3>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Log in</Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a class="text-warning bg-dark" href="/Signup">
            Sign up
          </a>
          <span className="p-2">|</span>
          <a class="text-white bg-dark" href="/forgot-password">
            Forgot Password
          </a>
        </div>
      </Form>
    );
  }
}

export default Login;

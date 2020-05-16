import React, { Component } from "react";
import "../../../src/App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <Form className="Contact-form">
        <h1 className="text-center">
          <span className="font-weight-bold">Contact Us</span>
        </h1>
        <h9>Please contact us for more information or suggestion!</h9>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Name" required />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" required />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <Input type="textarea" placeholder="Message" required />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Send</Button>
      </Form>
    );
  }
}

export default Contact;

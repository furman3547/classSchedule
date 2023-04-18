import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="Enter First Name..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Last Name..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" placeholder="Enter a Username..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="name" placeholder="Enter Email..." />
      </Form.Group>


      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;



import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";


function Login() {
  return (
    <div className='box'>
      <div className="label">
        <div className="text-wrapper">
          Login
        </div>
      </div>
      <div className="values">
        <Form>
          <Form.Group className="email" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Id</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form className="password">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Button className='button' variant="secondary" size="lg">
              Login
            </Button>
            <div className="signUp">
              <div className="line"></div>
              <div className="sign">
                Or Sign Up with
              </div>
              <div className="line"></div>
            </div>
            <div className="images">

              <img  src={google} alt="google" />
              <img src={facebook} alt="facebook" />
              <img src={apple} alt="apple" />
            </div>
          </Form>
        </Form>
      </div>
    </div>
  );
}

export default Login;

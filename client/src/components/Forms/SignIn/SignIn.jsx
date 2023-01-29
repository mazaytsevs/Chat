import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../redux/actions/user.action';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const [userSignIn, setUserSignIn] = useState({
    nick: '',
    password: '',
  });

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(userSignIn, navigate));
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="reg-group">

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Nick</Form.Label>
          <Form.Control
            type="nick"
            name="nick"
            onChange={changeHandler}
            placeholder="Nick"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your nickname.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={changeHandler}
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="button" onClick={submitHandler} variant="dark" className="submit-button">Sign In</Button>
    </Form>
  );
}

export default SignIn;

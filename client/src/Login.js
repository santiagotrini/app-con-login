import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const url = '/api/users/login';

const Login = props => {

  const { setLoggedInUser } = props;

  const [user, setUser] = useState({ username: '', password: '' });
  const history = useHistory();
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios.post(url, user)
      .then(res => {
        console.log(res.data);
        // localStorage.setItem('token', JSON.stringify(res.data));
        setLoggedInUser(res.data);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>

    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control name="username" value={user.username} onChange={handleChange} type="text" placeholder="Tu usuario" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  </Container>
  );
};

export default Login;

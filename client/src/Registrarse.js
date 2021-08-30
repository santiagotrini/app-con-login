import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const url = '/api/users';

function Registrarse(props) {

  const [user, setUser] = useState({ username: '', password: '' });
  const history = useHistory();
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('HOLA');
    axios.post(url, user)
      .then(res => {
        console.log(res.data);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container className="mx-5">
    <h1>Registrar nuevo usuario</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control name="username" onChange={handleChange} value={user.username} type="text" placeholder="Elegi tu nombre de usuario" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  </Container>
  );
};

export default Registrarse;

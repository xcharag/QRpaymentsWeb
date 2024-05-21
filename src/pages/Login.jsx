import React from 'react';
import '../styles/Login.css';
import { Container, Card, Row, Col, Button, Form, Image } from 'react-bootstrap';

function App() {
    const verifyLogin = (event) => {
        event.preventDefault();
        console.log('Login');
    };

    return (
        <Container className='my-5 background-container'>
            <Card className="border-5">
                <Row className='g-0 d-flex align-items-center'>
                    <Col md='4'>
                        <Image src='./src/assets/images/login-image.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                    </Col>
                    <Col md='8'>
                        <Card.Body>
                            <Form onSubmit={verifyLogin}>
                                <Form.Group className='mb-4' controlId='formEmail'>
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type='email' placeholder='Ingresar Usuario' />
                                </Form.Group>
                                <Form.Group className='mb-4' controlId='formPassword'>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type='password' placeholder='Contraseña' />
                                </Form.Group>
                                <div className="d-flex justify-content-between mx-4 mb-4">
                                    <Form.Check type='checkbox' label='Recuerdame' />
                                </div>
                                <Button variant='primary' className="mb-4 w-100" type={"submit"}>Iniciar Sesion</Button>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default App;

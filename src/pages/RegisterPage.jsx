import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import imageLogo from '../ImagemLivros/imageLogo.png';

const RegisterPage = () => {
    return (
        <Container className="bg-dark">
            <Row className="justify-content-md-center pt-5">
                <Col md={6}>
                    <div className="card large">
                    <img className="d-block mx-auto w-50" src={imageLogo} />
                      <h1 className="text-left p-5 pt-0 pb-0">Login</h1>
                        <Form className="d-inline">
                            <Form.Group className="p-5 pt-0 pb-1">
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Control className="p-2" type="email" placeholder="Usuario@gmail.com" />
                            </Form.Group>
                            <Form.Group className="p-5 pt-0 pb-2">
                                <Form.Label><b>Password</b></Form.Label>
                                <Form.Control className="p-2" type="password" placeholder="senha123" />
                            </Form.Group>
                            <div className="d-flex justify-content-center p-5 pt-0 pb-2">
                                <Button className="col-sm-8 col-md-8 col-lg-12 p-2 info" variant="info" type="submit">
                                    <b>Login</b>
                                </Button>
                            </div>
                            <p className="d-flex justify-content-center">não possui cadastro?</p>
                            <div className="d-flex justify-content-center p-5 pt-0">
                                <Button className="col-sm-8 col-md-8 col-lg-12 p-2 info" type="submit" href="/RegisterPage">
                                    <b>Realizar Cadastro</b>
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;
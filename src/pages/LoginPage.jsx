import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import imageLogo from '../ImagemLivros/imageLogo.png';

const LoginPage = () => {
    return (
        <Container className="bg-dark">
            <Row className="justify-content-md-center pt-5">
                <Col md={8}>
                    <div className="card">
                        <img className= "d-flex justify-content-center w-50" src={imageLogo} />
                        <h1 className="text-left p-5 pt-0">Login</h1>
                        <Form className="d-inline">
                            <Form.Group className="p-5 pt-0">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite o seu email" />
                            </Form.Group>
                            <Form.Group className="p-5 pt-0">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-flex justify-content-center p-5 pt-0">
                                <Button className="col-sm-8 col-md-8 col-lg-12 p-2" variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
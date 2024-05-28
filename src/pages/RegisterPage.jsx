import axios from 'axios';
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import imageLogo from '../ImagemLivros/imageLogo.png';

const RegisterPage = () => {
    const [email   , setEmail    ] = useState('');
    const [password, setPassword ] = useState('');
    const [name    , setName     ] = useState('');
    const [error   , setError    ] = useState(null);
    const [success , setSuccess  ] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
    
        let response = await axios.post(`http://143.198.156.185/api/auth/register`, {
            "email"    : email,
            "name"     : name,
            "password" : password
        });

        console.log(response.data);
        setSuccess("Cadastro bem sucedido!");   
        setError  ("Cadastro mal sucedido!");
    }

    return (    
        <Container className="bg-dark">
            <Row className="justify-content-md-center pt-5">
                <Col md={6}>
                    <div className="card large">
                    <img className="d-block mx-auto w-50" src={imageLogo} />
                      <h1 className="text-left p-5 pt-0 pb-0">Cadastro</h1>
                        <Form onSubmit={handleSubmit} className="d-inline">
                            
                        <Form.Group className="p-5 pt-0 pb-2">
                            <Form.Label><b>Name</b></Form.Label>
                            <Form.Control 
                            className  = "p-2"
                            type       = "text"
                            placeholder= "fulano de tal"
                            value      = {name}
                            onChange   = {(e) => setName(e.target.value)} />
                        </Form.Group>
                            
                        <Form.Group className="p-5 pt-0 pb-1">
                            <Form.Label><b>Email</b></Form.Label>
                            <Form.Control
                            className  = "p-2"
                            type       = "email"
                            placeholder= "Usuario@gmail.com"
                            value      = {email}
                            onChange   = {(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        
                        <Form.Group className="p-5 pt-0 pb-2">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control 
                            className  = "p-2" 
                            type       = "password"
                            placeholder= "senha123"
                            value      = {password}
                            onChange   = {(e) => setPassword(e.target.value)}/>
                        </Form.Group>

                        <div className="d-flex justify-content-center p-5 pt-3 pb-5">
                            <Button className="col-sm-8 col-md-8 col-lg-12 p-2 info" variant="info" type="submit">
                            <b>Cadastrar</b>
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
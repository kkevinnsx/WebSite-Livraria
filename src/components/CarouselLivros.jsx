import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


    function CarouselLivros() {
        const [livros, setLivros] = useState([]);
    
        useEffect(() => {
            async function buscarLivros() {
                const response = await axios.get("http://143.198.156.185/api/livros");
                    setLivros(response.data);            
                }
            buscarLivros();
        }, []);
        
        return (
            <>
        <Row>
            <Carousel className='teste'>
                {livros.map((livro, index) => (
                    <Carousel.Item key={index}>
                        <img 
                            className="d-block w-100 top"
                            src={livro.imagens[1].url}
                            alt={livro.titulo} 
                        />
                        <Carousel.Caption>
                            <h3>{livro.title}</h3>
                            <p>{livro.sinopse}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Row>
            <Row className='d-flex p-5'><h1>Livros</h1></Row>
            <Row className="p-5">
                {livros.map((livro, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} key={index}>
                        <Link className="link" to={"/Livros/" + livro.id}>
                        <Card className='carta'>
                            <Card.Img className="cartaIMG" src={livro.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{livro.titulo}</Card.Title>
                                <Card.Subtitle className='pb-2'>Categoria: {livro.categoria}</Card.Subtitle>
                                <Card.Subtitle className='pb-2'>N° de Favoritos: {livro.qtd_favoritos}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
        );
    }
    export default CarouselLivros;
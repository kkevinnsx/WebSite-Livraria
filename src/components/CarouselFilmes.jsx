import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function CarouselFilmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            try {
                const response = await axios.get("http://143.198.156.185/api/home");
                setFilmes(response.data);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }
        buscarFilmes();
    }, []);

    return (
        <>
            <Carousel className='teste'>
                {filmes.map(filme => (
                    <Carousel.Item key={filme.id}>
                        <img className="d-block w-100 top"
                            src={filme.imagens[2]}
                            alt={filme.titulo} />
                        <Carousel.Caption>
                            <h3>{filme.title}</h3>
                            <p>{filme.sinopse}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Row className='d-flex p-5'><h1>Filmes</h1></Row>
            <Row className="p-5">
                {filmes.map((filme, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} key={index}>
                        <Card className='carta'>
                            <Card.Img src={filme.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
export default CarouselFilmes;
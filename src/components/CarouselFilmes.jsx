import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function CarouselFilmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
                const response = await axios.get("http://143.198.156.185/api/filmes");
                setFilmes(response.data);
        }
        buscarFilmes();
    }, []);

    return (
        <>
            <Carousel className='teste'>
                {filmes.map((filme) => (
                    <Carousel.Item key={filme.id}>
                        <img className="d-block w-100 top"
                            src={filme.url}
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
                            <Card.Img className="cartaIMG" src={filme.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                                <Card.Subtitle className='pb-2'>Categoria: {filme.categoria}</Card.Subtitle>
                                <Card.Subtitle className='pb-2'>N° de Favoritos: {filme.qtd_favoritos}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
export default CarouselFilmes;
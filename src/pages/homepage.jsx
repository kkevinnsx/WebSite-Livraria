import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const [filmes, setFilmes] = useState([]);
    const [livros, setLivros] = useState([]);
    const [home  , setHome]   = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            const searchFilmes = await axios.get("http://143.198.156.185/api/filmes");
            setFilmes(searchFilmes.data);
        }
        
        async function buscarLivros(){
            const searchLivros = await axios.get("http://143.198.156.185/api/livros");
            setLivros(searchLivros.data);
        }

        async function buscarHome(){
            const searchHome = await axios.get("http://143.198.156.185/api/home");
            setHome(searchHome.data);
        }

        buscarHome();
        buscarFilmes();
        buscarLivros();
    }, 
    []);

    return (
        <>
        <Row>
        <Carousel className='teste'>
                {home.map((home, index) => (
                    <Carousel.Item key={index}>
                        <img 
                            className="d-block w-100 top"
                            src={home.imagens[1].url}
                            alt={home.titulo}
                        />
                        <Carousel.Caption>
                            <h3>{home.title}</h3>
                            <p>{home.sinopse}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
        </Row>
            <Row className='d-flex p-5'><h1>Filmes</h1></Row>
            <Row className="p-5">
                {filmes.map((filme, index) => (
                <Col xs={6} sm={4} md={3} lg={2} key={index}>
                    <Link className="link" to={"/Filmes/" + filme.id}>
                        <Card className='carta'>
                            <Card.Img className="cartaIMG" src={filme.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                                <Card.Subtitle className='pb-2'>Categoria:       {filme.categoria}</Card.Subtitle>
                                <Card.Subtitle className='pb-2'>N° de Favoritos: {filme.qtd_favoritos}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                    </Col>
                ))}
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
                                <Card.Subtitle className='pb-2'>Categoria:       {livro.categoria}</Card.Subtitle>
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
    
export default HomePage;
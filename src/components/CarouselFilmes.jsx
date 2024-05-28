import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';

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

        
    );
}

export default CarouselFilmes;

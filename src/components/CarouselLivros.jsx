import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

    function CarouselLivros() {
        const [livros, setLivros] = useState =([]);
    
        useEffect(() => {
            async function buscarLivros() {
                const response = await axios.get("http://143.198.156.185/api/home");
                    setLivros(response.data);
            }
            buscarLivros();
        }, []);
        
        return(
        <Carousel className='teste'>                                                   
            {livros.map(livro => (
                <Carousel.Item key={livro.id}>
                    <img className='d-block w-100 top' 
                        src={livro.imagens[2]}
                        alt={livro.titulo}/>
                    <Carousel.Caption>
                        <h3>{livro.title}</h3>
                        <p> {livro.sinopse}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
      );
    }
    export default CarouselLivros;
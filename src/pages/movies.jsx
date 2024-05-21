import React from "react";
import { Container } from 'react-bootstrap';
import CarouselFilmes from '../components/CarouselFilmes';


const Movies = () => {
    return (
        <>
        <Container className="bg-dark w-100">
        <CarouselFilmes>
        </CarouselFilmes>
        </Container>
        </>
      );
    }
    
export default Movies;
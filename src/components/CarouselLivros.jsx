import Carousel from 'react-bootstrap/Carousel';
import CoralineLivro      from '../ImagemLivros/CoralineLivro.jpg';
import FormaDaAguaLivro   from '../ImagemLivros/FormaDaAguaLivro.jpg'; 
import HarryPotterLivros  from '../ImagemLivros/HarryPotterLivros.png'; 
import PercyJacksonLivros from '../ImagemLivros/PercyJacksonLivros.jpg'; 

    function CarouselLivros() {
      return (
        <Carousel className='bg-dark '>
            <Carousel.Item c>
                <img className= "d-block w-100" src={CoralineLivro} />
                <Carousel.Caption>
                    <h3>Coraline e o Mundo Secreto</h3>
                    <p>Data de lançamento: 13 de fevereiro de 2009</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className= "d-block w-100" src={HarryPotterLivros} />
                <Carousel.Caption>
                    <h3>Harry Potter e a Pedra Filosofal</h3>
                    <p>Data de lançamento: 23 de novembro de 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className= "d-block w-100" src={PercyJacksonLivros} />
                <Carousel.Caption>
                    <h3>Percy Jackson e os Olimpianos</h3>
                    <p>Data de Lançamento: 19 de dezembro de 2023</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      );
    }
    export default CarouselLivros;
import Carousel from 'react-bootstrap/Carousel';
import CoralineFilmes from '../ImagemFilmes/CoralineFilmes.jpg';
import HarryPotterFilmes from '../ImagemFilmes/HarryPotterFilmes.jpg';
import PercyJacksonFilmes from '../ImagemFilmes/PercyJacksonFilmes.jpg';
import FormaDaAguaFilme from '../ImagemFilmes/FormaDaAguaFilme.png';

function CarouselFilmes() {
    return (
        <Carousel className='bg-dark '>
            <Carousel.Item>
                <img className= "d-block w-100" src={CoralineFilmes} />
                <Carousel.Caption>
                    <h3>Coraline e o Mundo Secreto</h3>
                    <p>Data de lançamento: 13 de fevereiro de 2009</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className= "d-block w-100" src={HarryPotterFilmes} />
                <Carousel.Caption>
                    <h3>Harry Potter e a Pedra Filosofal</h3>
                    <p>Data de lançamento: 23 de novembro de 2001</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className= "d-block w-100" src={PercyJacksonFilmes} />
                <Carousel.Caption>
                    <h3>Percy Jackson e os Olimpianos</h3>
                    <p>Data de Lançamento: 19 de dezembro de 2023</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default CarouselFilmes;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Livros = () => {
    const {id} = useParams();
    const [livro, setLivro] = useState('');

    useEffect(() =>{
        async function buscarlivro(){
            const Livros = axios.get(`http://143.198.156.185/api/livros/porid/${id}`).then(function (value) {
                setLivro(value.data);
            }).catch(function (value){
                console.log(value);
            });
        }
        buscarlivro();
    });

    return(
    <>
    <Container className='d-flex justify-content-center'>
        <div className='card w-50 cardInfo'>
            <div className="card-header">
                <h2>{livro.titulo}</h2>
            </div>
        <div className='card-body'>
            <h5>{livro.sinopse}</h5>
        </div>
            <div className='card-body'>
            {livro.imagens && livro.imagens[1] && (
            <img className="cardImg p-3" 
                 src ={livro.imagens[1].url}/>
                )}
            </div>
        </div>
        </Container>
    </>
    );
    }
    
export default Livros;
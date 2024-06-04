import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Filmes = () => {
    const {id} = useParams();
    const [filme, setFilme] = useState('');

    useEffect(() =>{
        async function buscarFilme(){
            const filmes = axios.get(`http://143.198.156.185/api/filmes/porid/${id}`).then(function (value) {
                setFilme(value.data);
            }).catch(function (value){
                console.log(value);
            });
        }
        buscarFilme();
    });

    return(
    <>
    <Container className='d-flex justify-content-center'>
        <div className='card w-50 cardInfo'>
            <div className="card-header">
                <h2>{filme.titulo}</h2>
            </div>
        <div className='card-body'>
            <h5>{filme.sinopse}</h5>
        </div>
            <div className='card-body'>
            {filme.imagens && filme.imagens[1] && (
            <img className="cardImg p-3" 
                 src ={filme.imagens[0].url}/>
                )}
            </div>
        </div>
        </Container>
    </>
    );
    }
    
export default Filmes;
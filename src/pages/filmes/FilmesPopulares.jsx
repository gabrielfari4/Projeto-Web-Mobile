import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {


    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
           
            setFilmes(resultado.data.results);
        })

    }, [])

    

    return (
        <div>
            <h1>Filmes Populares</h1>
            <Row>
                {filmes.map(filme => (
                    <Col key={filme.id} md={3} className="mb-3">
                    <Card title={filme.title}>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                        <Card.Body>
                            <Card.Title>{filme.title}</Card.Title>
                            <p>({filme.original_title})</p>
                             <Link to={`/filmes/${filme.id}`} className="btn btn-dark">Detalhes</Link>
                         </Card.Body>
                    </Card>
                </Col>
                  
                ))}
            </Row>
        </div>
    )
}

export default FilmesPopulares

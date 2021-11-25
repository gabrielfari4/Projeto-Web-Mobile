import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {


    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('/movie/popular').then(resultado => {
            // console.log(resultado.data.results)
            setFilmes(resultado.data.results)
        })

    }, [])

    console.log('primeiro')


    return (
        <div>
            <h1>Filmes Populares</h1>
            <Row>
                {filmes.map(filme => (
                    <Col key={filme.id} md={3} className='mb-3'>
                    <Card >
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                        <Card.Body>
                            <Card.Title>{filme.title}</Card.Title>
                         </Card.Body>
                    </Card>
                </Col>
                  
                ))}
            </Row>
        </div>
    )
}

export default FilmesPopulares

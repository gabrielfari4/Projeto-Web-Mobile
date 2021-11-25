import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Carregando from '../../components/Carregando'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = (props) => {


    const params = useParams()
    const id = params.id

    const [filme, setFilme] = useState({})

    useEffect(() => {

        //apiFilmes.get('/movie/' + id + '?language=pt-BR').then(resultado=>{
        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data)

        })

    }, [props])





    return (
        <div>

            {!filme.id && <Carregando />}
            {filme.id &&
            <Row>
                <Col md={3}>
                    <Card title={filme.title}>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>
                <Col md={9}>
                    <h1>{filme.title}</h1>
                    <p style={{fontSize:"15px"}}>({filme.original_title})</p>
                    {
                        filme.budget > 0 &&
                        <p>Orçamento: {filme.budget}</p>
                    }
                    
                    <hr/>
                    <p style={{fontSize:"20px"}}>Sinopse: {filme.overview}</p>
                    <Link to="/filmes/populares" className="btn btn-success">Voltar</Link>
                    
                </Col>


            </Row>
            }
        </div>
    )
}

export default FilmesDetalhes

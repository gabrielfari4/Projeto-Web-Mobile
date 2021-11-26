import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Carregando from '../../components/Carregando'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = (props) => {


    const params = useParams()
    const id = params.id

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {

        //apiFilmes.get('/movie/' + id + '?language=pt-BR').then(resultado=>{
        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data)

        })
        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then(resultado => {
            setAtores(resultado.data.cast)

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
                        <p style={{ fontSize: "15px" }}>({filme.original_title})</p>
                        {
                            filme.budget > 0 &&
                            <p>Orçamento: {filme.budget}</p>
                        }

                        <hr />
                        <p style={{ fontSize: "20px" }}>Sinopse: {filme.overview}</p>
                        <Link to="/filmes/populares" className="btn btn-success">Voltar</Link>

                    </Col>
                    <Col md={12}>
                        <h1>Atores</h1>
                        <Row>
                            {atores.map(ator => (
                                <React.Fragment key={ator.id}>
                                    {ator.profile_path &&
                                        <Col md={1} >
                                            <Card title={ator.name}>
                                                
                                                    <Link to={`/atores/${ator.id}`} src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path}>
                                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} >
                                                    
                                                    </Card.Img>
                                                    </Link>
                                            </Card>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>


                </Row>
            }
        </div>
    )
}

export default FilmesDetalhes

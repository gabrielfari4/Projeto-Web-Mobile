import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Carregando from '../../components/Carregando'
import apiFilmes from '../../services/apiFilmes'


const AtoresDetalhes = (props) => {

const params = useParams()
const id = params.id


const [atores, setAtores] = useState([])


useEffect(() => {

    apiFilmes.get(`/person/${id}?language=pt-BR`).then(resultado => {
        setAtores(resultado.data)
        
    })

      
   

}, [props])


    return (
        <div>
            
            {!atores.id && <Carregando />}
            {atores.id &&
                <Row>
                    <Col md={3}>
                        <Card title={atores.name}>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + atores.profile_path} />
                        </Card>
                    </Col>
                    <Col md={9}>
                        <h1>{atores.name}</h1>
                        <p style={{ fontSize: "15px" }}>Nascimento: {atores.birthday}</p>
                        

                        <hr />
                        <p style={{ fontSize: "20px" }}>Biografia: {atores.biography}</p>
                        <Link to="/filmes/populares" className="btn btn-success">Voltar</Link>

                    </Col>
                    


                </Row>
            }
        </div>
    )
}

export default AtoresDetalhes

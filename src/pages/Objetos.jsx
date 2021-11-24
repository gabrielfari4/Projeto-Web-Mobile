import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Objetos = () => {

    const carros = [
        { marca: 'Fiat', modelo: '147', cor: 'bege', foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2018/03/qr-706-classic-147-8358.jpg?quality=70&strip=info' },
        { marca: 'VW', modelo: 'Fusca', cor: 'preto', foto: 'https://www.chavesnamao.com.br/imn/0500x0350/N/veiculos/54016/577220/volkswagen-fusca-1-2-8v-2p_e9dcf2ef56e.jpeg' },
        { marca: 'VW', modelo: 'Brasília', cor: 'amarela', foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/57f3c5fd0e21630270059e00publi_brasiliaamarela_quatrorodas_foto_principal.jpeg' },
        { marca: 'Chevrolet', modelo: 'Opala', cor: 'branco', foto: 'https://i.pinimg.com/originals/1d/47/e7/1d47e7acc5113ae7329c04be4cb15e92.jpg' }
    ]

    return (
        <div>
            <h1>Objetos</h1>

            <Row>
            {carros.map(carro => (
                <Col md={3}>
                    <Card >
                        <Card.Img variant="top" src={carro.foto} />
                        <Card.Body>
                            <Card.Title>{carro.marca}</Card.Title>
                            <Card.Text>
                                {carro.modelo} {carro.cor}
                                                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default Objetos

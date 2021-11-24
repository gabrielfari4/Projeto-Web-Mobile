import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Estados = () => {

    const [contador, setContador] = useState(0)

    const nome = 'Gabriel'
    // let contador = 0

    function adicionar(){
          //   console.log('Contador: ' + contador++)
          const qtd  = contador + 1
          setContador(qtd)

    }

    function subtrair(){
          //   console.log('Contador: ' + contador--)
          
          setContador(contador - 2)

    }

    return (
        <div>
            <h1>Estados</h1>
            <h2>{nome}</h2>
            <Button variant="danger" onClick={subtrair}>-</Button>
            {'  '}<span>{contador}</span>{'  '}
            <Button variant="success" onClick={adicionar}>+</Button>
        </div>
    )
}

export default Estados

import React from 'react'

const Arrays = () => {

    const nome = 'Gabriel Faria'

    const carros = ['Fiat 147', 'Fusca', 'Brasília', 'Passat', 'Kombi', 19, true, [1, 2, 3, 'Gabriel']]

    return (
        <div>
            <h1>Arrays</h1>
           
            <p>{carros[5]}</p>


            {
                carros.map(carro => (
                <p>{carro}</p>
                
                ))}


        </div>
    )
}

export default Arrays

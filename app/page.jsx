"use client"//Todo lo que se usa en app son componentes del servidor o backend, para usar componentes del cliente o frontend hay que colocar esta línea para que next sepa que se usará front-end

import Users from"../components/Users"

export default function HomePage(){
    return <section>
        <h1>Hola Mundo</h1>
        <button onClick={() => {
            alert('Bienvenido')
        }}>Entrar</button>
    
        <Users/>
    </section> 
}
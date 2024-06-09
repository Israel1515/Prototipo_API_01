import Link from 'next/link' //Esto es un componente de reak que remplaza la etiqueta a, con el fin de que las paginas no sean pedidas nuevamente por el servidor y no se refresquen. Las etiquetas Link deben empezar en MAYUSCULA

import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar py-5">
                <h1 className='text-3xl font-bold'>Framework Next JS</h1>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/publicaciones'>Publicaciones</Link>
                    </li>
                    <li>
                    <Link href='/tienda'>Tienda</Link>
                    </li>
                    <li>
                    <Link href='/tienda/categoria'>Categoria</Link>
                    </li>

                </ul> 
            </nav>  
    )
}
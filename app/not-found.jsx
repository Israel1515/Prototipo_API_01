//En este archivo se maneja el mensaje de error de las páginas
import Link from 'next/link'
export default function NotFound(){
    return <section>
        <h1>Error 404</h1>
        <p>Página No Encontrada</p>
        <Link href="/">Volver a la Página Principal</Link>
    </section>
}

//Este archivo layout engloba todos los componentes que se usara en la aplicación o pág web
import Navbar from '../components/Navbar' //Aquí se importa el archivo navbar o el archivo navegación que esta en su propio componenente o archivo, se hace esto para tener el proyecto lo más limpio posible

import {Roboto} from 'next/font/google' //Esto es para poder exportar otras funtes de ltra, es decir, para cambiar el estilo de las letras de la aplicaciones que viene por defecto. Dentro de las valles va el nombre de la letra. Se puede buscar en google font

import "./globals.css" //Aquí se llama al archivo css


const roboto = Roboto({
    weight:["300", "400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],
}) //Primero se debe colocar los estilos que tendra la letra y convertirlo en una clase, para llamarlo en el body



export default function RootLayout({ children }) { //El objetivo de RootLayout es para que todas las páginas compartan un apartado. Abajo del body se coloca el componente de Navbar, esto quiere decir que allí estará ubicado el navegador para todas las páginas

    return <html>

         <head>
         <title>Mi aplicación</title> 
           </head>

           <body className={roboto.className}>

            <Navbar />

            {children} 

            
           </body>
    </html>
        
    
}
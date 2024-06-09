"use client";
import Link from 'next/link' //Esto es para que las págs tengan su link


//Este es un componente de react js por parte del cliente, o RCC

function PostCard({post}) {//Esto es un componente para que el cliente pueda interactuar mediante un botón
    return (
        <div className='bg-gray-950 p-10'>
            <Link href={`/publicaciones/${post.id}`}>
             <h3 className='text-xl font-bold mb-4'>{post.id}. {post.title}</h3> 
            
            </Link>
          <p className='text-slate-300'>{post.body}</p>
          <button onClick={() => {
            alert('Bienvenido a esta publicación')
          }}>Entrar</button>
        </div>
    );
}

export default PostCard;
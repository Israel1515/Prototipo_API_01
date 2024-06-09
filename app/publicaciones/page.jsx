//En este archivo se están utilizando datos de prueba

//import PostCard from '../../components/PostCard' Esta es una forma de importar los archivos
import PostCard from '@/components/PostCard' //Esta es otra forma más corta. El arroba ya te ubica en lo principal
import "./posts.css"

async function loadPosts(){ //Esta función carga las publicaciones
   const res = await fetch('https://jsonplaceholder.typicode.com/posts'); //Aquí se estan llamando los datos de la página 
   const data = await res.json()
   console.log(data)
   return data
}

//Este es el componente de react js por parte del servidor, o un RSC
async function PostPages(){
  const posts = await loadPosts()
  console.log(posts);

  return (
    <div className='grid'>
      
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />

      ))}
    </div>
  );
}

export default PostPages;
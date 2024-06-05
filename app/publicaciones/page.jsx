//En este archivo se están utilizando datos de prueba

async function loadPosts(){
   const res = await fetch('https://jsonplaceholder.typicode.com/posts') //Aquí se estan llamando los datos de la página jsonplaceholder
   const data = await res.json()
   return data;
}


async function PostPages(){

  const posts = await loadPosts()
  console.log(posts);

    return (
      <div>
        <h1>Ejemplo de Publicaciones</h1>
        
        {posts.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            
        ))}

      </div>
    );
}

export default PostPages;
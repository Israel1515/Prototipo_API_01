async function loadPost(id) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
}

//Este archivo esta resiviendo unos parametros
async function Page({params}) {
   const post = await loadPost(params.postId)

    return (
        <div>
            <h1>Publicación Seleccionada</h1>
            <h3>{post.id} {post.title}</h3>
            <p>{post.description}</p>
        </div>
    )
}

export default Page
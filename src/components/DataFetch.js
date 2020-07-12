import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [post, setPost] = useState({})
    const [id, setId ] = useState(1)
    const [idFromButtonClick, setidFromButtonClick] = useState(1)

    const clickHandler = ()=>{
        setidFromButtonClick(id)
    }
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button" onClick={clickHandler}>Fetch data</button>
            <div>{post.title}</div>
            {/* <ul>
    {posts.map(post =>(<li key={post.id}>{post.title}</li>))}
            </ul>
             */}
        </div>
    )
}

export default DataFetch

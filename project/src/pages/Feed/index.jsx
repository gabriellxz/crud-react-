import { useEffect, useState } from 'react';
import { Card } from '../../components/Card'
import './styles.css'
import api from '../../lib/axios'

export function Feed() {

  const [post, setPost] = useState([])

  useEffect(() => {
    api.get('/posts')
      .then((response) => {
        console.log(response.data)
        setPost(response.data)
      }).catch(() => {
        console.log("Error: 404")
      })
  }, [])

  function handleDelete(id) {
    api.delete(`posts/${id}`)
    setPost(post.filter(post => post.id !== id))
  }

  return (
    <div className="feedContainer">
      {
        post.map((posts) => (
          <Card key={posts.id} post={posts} handleDeletePost={handleDelete}/>
        ))
      }
    </div>
  );
}

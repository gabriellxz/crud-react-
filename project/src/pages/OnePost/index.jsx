import { useEffect, useState } from "react";
import "./styles.css";
import api from '../../lib/axios'
import { useParams } from "react-router-dom";

export function OnePost() {

  const [post, setPost] = useState({})
  const {id} = useParams()

  async function getPost() {
    const response = await api.get(`/posts/${id}`)
    setPost(response.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>
        {post.content}
      </p>
    </article>
  );
}

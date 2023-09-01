import { useNavigate } from "react-router-dom";
import "./styles.css";
import { MdDelete } from "react-icons/md";

export function Card({post, handleDeletePost}) {

  const navigate = useNavigate()

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.title}</h2>
        <MdDelete size={28} color="#ed4337" onClick={() => handleDeletePost(post.id)}/>
      </header>
      <p>
        {post.description}
      </p>

      <div className="buttonsContainer">
        <button onClick={() => navigate(`/post/${post.id}`)}>Ver publicação</button>
        <button onClick={() => navigate(`/updatePost/${post.id}`)}>Atualizar</button>
      </div>
    </article>
  );
}

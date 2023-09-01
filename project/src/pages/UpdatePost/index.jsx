import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import api from "../../lib/axios";

export function UpdatePost() {

    const navigate = useNavigate()
    const { id } = useParams()

    function handleUpdatePost(data) {
        api.put(`/posts/${id}`, data)
        navigate('/')
    }

    // useEffect(() => {
    //     api.get(`/posts/${id}`)
    //     .then(response => {
    //         console.log(response.data)
    //     })
    // }, [])

    return (
        <div>
            <Form title={"Editar publicação"} button={"Atualizar"} onAction={handleUpdatePost}/>
        </div>
    )
}
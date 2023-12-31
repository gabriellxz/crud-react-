import { Route, Routes } from "react-router-dom"
import { Feed } from "./pages/Feed/index"
import { CreatePost } from "./pages/CreatePost/index"
import { UpdatePost } from "./pages/UpdatePost/index"
import { OnePost } from "./pages/OnePost/index" 

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/updatePost/:id" element={<UpdatePost />} />
            <Route path="/post/:id" element={<OnePost/>} />
        </Routes>
    )
}
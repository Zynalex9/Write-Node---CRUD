import { Route, Routes } from "react-router-dom";
import { Home, CreatePost, PageNotFound} from "../pages"
const AllRoutes = () => {
  return (
 <main>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="create" element={<CreatePost/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
 </main>
  )
}

export default AllRoutes

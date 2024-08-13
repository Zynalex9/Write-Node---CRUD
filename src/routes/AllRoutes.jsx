import { Route, Routes } from "react-router-dom";
import { Home, CreatePost, PageNotFound} from "../pages"
import ProtectedRoute from "./ProtectedRoute";
const AllRoutes = () => {
  return (
 <main>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="create" element={<ProtectedRoute><CreatePost/></ProtectedRoute>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
 </main>
  )
}

export default AllRoutes

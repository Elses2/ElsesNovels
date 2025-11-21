import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
//import AuthorDashboard from "../pages/AuthorDashboard";
///import CreateNovel from "../pages/CreateNovel";
//import EditNovel from "../pages/EditNovel";
//import Novel from "../pages/Novel";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Público */}
      <Route path="/" element={<Home />} />
      ///<Route path="/novel/:id" element={<Novel />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Sección Autor */}
      ///<Route path="/author" element={<AuthorDashboard />} />
      ///<Route path="/author/create" element={<CreateNovel />} />
      ///<Route path="/author/edit/:id" element={<EditNovel />} />
    </Routes>
  );
}


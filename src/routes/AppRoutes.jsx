import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
// import AuthorDashboard from "../pages/AuthorDashboard";
import AddNovel from "../pages/AddNovel.jsx";
// import EditNovel from "../pages/EditNovel";
// import Novel from "../pages/Novel";
import SelectRole from "../pages/SelectRole.jsx";
import Novelas from "../pages/Novelas.jsx";
import Register from "../pages/Registro.jsx";
export default function AppRoutes() {
  return (
    <Routes>
      {/* Público */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/novel/:id" element={<Novel />} /> */}

      {/* Login */}
      <Route path="/login" element={<Login />} />
      {/* seleccionar rol: Autor o Lector */}
      <Route path="/select-role" element={<SelectRole />} />
      {/*Registro*/}
      <Route path="/register" element={<Register />} />
      {/* Sección Autor */}
      {/* <Route path="/author" element={<AuthorDashboard />} /> */}
      <Route path="/author/create" element={<AddNovel />} /> 
      {/* <Route path="/author/edit/:id" element={<EditNovel />} /> */}

      {/*Directorio Novelas*/}
      <Route path="/novelas" element={<Novelas />} />
    </Routes>
  );
}

import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar.jsx';
export default function SelectRole() {
  return (
    <> 
    <div>
      {/* Navbar placeholder */}
      <Navbar />
    </ div>
    <div className="min-h-screen flex items-center justify-center text-gray-200 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-center text-3xl font-bold mb-10">
          Registrarse como:
        </h1>

        <div className="space-y-6">
          {/* Botón Autor */}
          <Link
            to="/register"
            className="block w-full text-center py-5 rounded-2xl 
              border-2 border-slate-700 bg-slate-800 
              text-xl font-semibold transition-all duration-300
              hover:border-violet-500 hover:shadow-[0_0_20px_#a855f7]"
          >
            Autor
          </Link>

          {/* Botón Lector */}
          <Link
            to="/register"
            className="block w-full text-center py-5 rounded-2xl 
              border-2 border-slate-700 bg-slate-800 
              text-xl font-semibold transition-all duration-300
              hover:border-violet-500 hover:shadow-[0_0_20px_#a855f7]"
          >
            Lector
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}


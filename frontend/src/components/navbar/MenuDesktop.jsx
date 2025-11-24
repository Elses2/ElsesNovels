import { Link } from "react-router-dom";
export default function MenuDesktop() {
  return (
   <ul className="hidden md:flex gap-6 text-lg">
      <li>
        <Link to="/" className="cursor-pointer hover:text-gray-400">Inicio</Link>
      </li>
      <li>
        <Link to="/novelas" className="cursor-pointer hover:text-gray-400">Novelas</Link>
      </li>
      <li>
        <Link to="/select-role" className="cursor-pointer hover:text-gray-400">Register</Link>
      </li>
      <li>
        <Link to="/Login" className="cursor-pointer hover:text-gray-400">Login</Link>
      </li>
    </ul> 
  );
}


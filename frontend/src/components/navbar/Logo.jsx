import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // ajusta el path
import favicon from "/favicon.png"; // ajusta el path

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* Logo más grande */}
      <img 
        src={favicon} 
        alt="favicon" 
        className="h-14 cursor-pointer" 
      />
      {/* Texto al lado */}
      <span className="text-xl font-bold cursor-pointer text-gray-800 hover:text-gray-200">
        ElsesNovels
      </span>
    </Link>
  );
}


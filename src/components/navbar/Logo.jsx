import {Link} from "react-router-dom";
import logo from "../../assets/logo.png"; // ajusta el path

export default function Logo() {
  return (
    <Link to="/">
    <img 
      src={logo} 
      alt="Logo" 
      className="h-10 cursor-pointer"
    />
    </ Link>
  );
}


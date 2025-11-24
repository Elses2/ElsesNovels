export default function MenuMobile({ open }) {
  if (!open) return null;

  return (

    <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-start gap-4 p-5 md:hidden shadow-lg">
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


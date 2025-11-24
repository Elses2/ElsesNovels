import { useState } from "react";
import Logo from "./Logo.jsx";
import MenuDesktop from "./MenuDesktop.jsx";
import MenuMobile from "./MenuMobile.jsx";
import ToggleMenuButton from "./ToggleMenuButton.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between relative">
      
      <Logo />

      <ToggleMenuButton open={open} setOpen={setOpen} />

      <MenuDesktop />

      <MenuMobile open={open} />
    </nav>
  );
}


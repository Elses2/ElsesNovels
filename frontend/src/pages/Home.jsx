import { useEffect, useState } from "react";
import Navbar from '../components/navbar/Navbar.jsx'; 
export default function Home() {
  ///fetch to list of novels from the backend
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    fetch("https://elsesnovels.onrender.com/novels")
      .then(res => res.json())
      .then(data => setNovels(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

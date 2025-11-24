import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import logo from "../assets/logo.png";

export default function Register() {
  return (
    <>
      <div>
      <Navbar />
      </div>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto">
        
        {/* Logo + Nombre */}
        <a href="#" className="flex flex-col items-center mb-6 text-3xl font-bold text-white">
          <img src={logo} alt="logo" className="h-28 w-auto mb-2" />
          ElsesNovels
        </a>

        <div className="w-full bg-slate-800 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border border-slate-700">
          <div className="p-6 space-y-6 sm:p-8">

            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Create an account
            </h1>

            {/* FORMULARIO */}
            <form className="space-y-6">

              {/* USERNAME */}
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
                  UserName
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="YourUserName123"
                  required
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg 
                  block w-full p-2.5 placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg 
                  block w-full p-2.5 placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  required
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg 
                  block w-full p-2.5 placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              {/* BOTÓN */}
              <button
                type="submit"
                className="w-full text-white bg-violet-600 hover:bg-violet-700 
                focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>

              {/* LINK LOGIN */}
              <p className="text-sm font-light text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/Login"
                  className="font-medium text-violet-500 hover:underline"
                >
                  Login here
                </Link>
              </p>

            </form>

          </div>
        </div>

      </section>
    </>
  );
}


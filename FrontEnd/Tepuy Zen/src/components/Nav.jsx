import Logo from "../assets/img/logo.png"
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 pr-8 pl-8 bg-[#77BFA3]" style={{ backgroundColor: "#77BFA3" }}>
      
      <img src={Logo} className="w-40 -ml-5 -mt-4 -mb-2" alt="Logo"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center text-center gap-3">
      <NavLink to='/Login' className="navbar-brand">
        <button className=" amatic-sc-regular text-3xl rounded-full hover:bg-[#98C9A3] hover:text-white hover:shadow-lg hover:rounded-full p-3 transition duration-500" value="Perfil">Login</button>
      </NavLink>

      <NavLink to='/' className="navbar-brand">
                <button className=" amatic-sc-regular text-3xl rounded-full hover:bg-[#98C9A3] hover:text-white hover:shadow-lg hover:rounded-full p-3 transition duration-500" value="Perfil">Registro</button>
      </NavLink>
    </div>
    </header>
  );
}

export default Nav;
import React from "react";
import Logo from "../assets/img/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#EDEEC9] p-3 text-center text-gray-700 md:flex md:justify-center md:items-center md:flex-row flex-col dark:text-white dark:bg-[#C6D3A9]">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="Logo" className="h-24 mr-4" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4">
        <p>&copy; 2023 Tepuy Zen. Todos los derechos reservados.</p>
        <div className="mt-4 ">
          <a href="#" className="text-gray-700 hover:text-gray-900 hover:underline mr-4">
            Facebook
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 hover:underline mr-4">
            Twitter
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
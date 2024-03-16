import React from "react";
import { NavLink } from 'react-router-dom';

import Logo from '../assets/img/logo.png'

const Back = () => {
    return (
<header className="top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 pr-8 pl-8 bg-[#77BFA3]" style={{ backgroundColor: "#77BFA3" }}>
      
      <img src={Logo} className="logo w-40 -mt-4 -mb-2" alt="Logo"/>

    <NavLink to='/dashboard' className="amatic-sc-regular text-3xl">
            <button className="flex basis-full flex-col items-center space-y-4"><i class="fa-solid fa-backward"></i>ATRAS</button>
    </NavLink>

    </header>
    );
};

export default Back;
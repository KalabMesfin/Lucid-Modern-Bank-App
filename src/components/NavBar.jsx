import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => (
  <nav className="w-full flex py-6 justify-between items-center navbar">
    <img src="/logo.png" alt="hoobank" className="w-[124px] h-[32px]" />
  </nav>
)

export default NavBar
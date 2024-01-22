import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CiStar } from "react-icons/ci";

import logo from "../assets/Logo.svg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header>
      <div className=" md:flex justify-end px-4 py-2 space-x-4 hidden ">
        <a className="border-r-4 px-4 outline-1 border-black" href="">
          help
        </a>
        <a className="border-r-4 px-4 outline-1 border-black" href="">
          Join Us
        </a>
        <a href="">Sign In</a>
      </div>
      <nav className="flex justify-between p-5 items-center border-b bg-[#e7e7e7d1] nav">
        <div className="md:hidden z-10" onClick={handleClick}>
          {nav ? (
            <FaTimes size={25} color="white" />
          ) : (
            <RxHamburgerMenu size={25} />
          )}
        </div>
        <img src={logo} alt="logo" />
        <ul className="hidden md:flex gap-6">
          <li>HOME</li>
          <li>NEW ARRIVAL</li>
          <li>SHOP</li>
          <li>LAST COLLECTION</li>
          <li>MEN</li>
          <li>WOMEN</li>
        </ul>

        <ul
          className={`${
            nav
              ? "text-white transform translate-x-0"
              : "transform -translate-y-full"
          } transition-transform absolute top-0 z-50 left-0 w-full h-fit py-4 bg-zinc-500 flex flex-col justify-center items-center text-2xl`}
          onClick={() => setNav(false)}>
          <li>HOME</li>
          <li>NEW ARRIVAL</li>
          <li>SHOP</li>
          <li>LAST COLLECTION</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <div className=" space-x-4">
            <a href="">Join Us</a>
            <a href="">Sign In</a>
          </div>
        </ul>
        <div className="space-x-4 flex items-center">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block py-2 px-4 rounded-2xl"
            />
          </div>
          <BsBag className="w-8 h-8" />
          <CiStar className="w-8 h-8" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

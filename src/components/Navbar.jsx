import React, { useState } from "react";

import { ReactComponent as AiOutlineMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as AiOutlineClose } from "../assets/images/icon-menu-close.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex flex-row sm:my-10 my-5 justify-between px-global font-interRegular">
      <div>
        <Logo />
      </div>
      <div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 w-screen h-screen bg-black/60"
              : "hidden"
          }
        ></div>
        <div className="sm:hidden">
          <AiOutlineMenu
            size={40}
            className={!nav ? "mt-4" : "hidden"}
            onClick={toggleNav}
          />

          {/* mobile menu */}
          <div
            className={
              nav
                ? "flex flex-col fixed top-0 right-0 w-[70%] h-screen bg-white"
                : "hidden"
            }
          >
            <AiOutlineClose
              size={45}
              className="absolute right-0 top-0 mt-8 mr-6"
              onClick={toggleNav}
            />
            <div className="h-full">
              <ul className="flex flex-col text-veryDarkBlue cursor-pointer h-[30%] mt-[70%] ml-6">
                <li className="my-4 hover:text-softRed">Home</li>
                <li className="my-4 hover:text-softRed">New</li>
                <li className="my-4 hover:text-softRed">Popular</li>
                <li className="my-4 hover:text-softRed">Trending</li>
                <li className="my-4 hover:text-softRed">Categories</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="text-darkGrayishBlue cursor-pointer hidden sm:flex sm:flex-row">
          <li className="ml-8 hover:text-softRed">Home</li>
          <li className="ml-8 hover:text-softRed">New</li>
          <li className="ml-8 hover:text-softRed">Popular</li>
          <li className="ml-8 hover:text-softRed">Trending</li>
          <li className="ml-8 hover:text-softRed">Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

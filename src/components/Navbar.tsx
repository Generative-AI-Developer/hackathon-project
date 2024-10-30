import React from "react";
import Link from "next/link";
import { NavigationMenuDemo } from "./Navlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-myWhite">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="p-0 text-2xl lg:hidden">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"#"}>Tops</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Pants</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Accesories/Jewelary</Link>
                    </li>
                    <li>
                      <Link href={"#"}>Shoes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <Image src="/Logo.png" alt="logo" height={50} width={100} />
          </div>
        </div>
        <div className="navbar-center ">
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

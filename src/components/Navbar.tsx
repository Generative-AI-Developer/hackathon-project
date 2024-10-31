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

          <Image
            src="/Logo.png"
            alt="logo"
            height={100}
            width={100}
            className="hidden lg:block bg-myWhite pl-4"
          />
        </div>
        <div className="navbar-center ">
          <Image
            src="/Logo.png"
            alt="logo"
            height={50}
            width={100}
            className="block lg:hidden bg-myWhite pl-4  "
          />
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="pr-4 cursor-pointer">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item hover:font-semibold duration-300">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

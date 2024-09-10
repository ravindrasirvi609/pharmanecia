"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import InstallPWA from "./InstallPWA";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white text-black px-4 py-4 fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-black text-3xl text-black">PHARMANECIA 4.E</h1>
        </Link>

        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>

        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-ochre transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="#"
                className="hover:text-ochre transition duration-300"
              >
                About
              </Link>
              <ul className="absolute left-0  space-y-2 bg-white text-black border border-gray-200 rounded-md shadow-lg group-hover:block hidden">
                <li>
                  <Link
                    href="/host"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Host
                  </Link>
                </li>
                <li>
                  <Link
                    href="/organization"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Organisation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/organisingCommittee"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Organising Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ooty"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Ooty
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/Schedule"
                className="hover:text-ochre transition duration-300"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/Sponsors"
                className="hover:text-ochre transition duration-300"
              >
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                href="/Registration"
                className="hover:text-ochre transition duration-300"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="hover:text-ochre transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav className="lg:hidden mt-4 bg-white shadow-md rounded-lg">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <li>
              <Link
                href="/"
                className="block hover:text-ochre transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="#"
                className="block hover:text-ochre transition duration-300"
              >
                About
              </Link>
              <ul className="absolute left-0 mt-2 space-y-2 bg-white text-black border border-gray-200 rounded-md shadow-lg group-hover:block hidden">
                <li>
                  <Link
                    href="/host"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Host
                  </Link>
                </li>
                <li>
                  <Link
                    href="/organization"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Organisation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/organisingCommittee"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Organising Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ooty"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Ooty
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/Schedule"
                className="block hover:text-ochre transition duration-300"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/Sponsors"
                className="block hover:text-ochre transition duration-300"
              >
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                href="/Registration"
                className="block hover:text-ochre transition duration-300"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="block hover:text-ochre transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <InstallPWA />
        </nav>
      )}
    </header>
  );
};

export default Navbar;

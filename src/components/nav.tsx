"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white text-black px-4 py-6 pt-1 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-black text-3xl text-black my-auto mt-4">
            PHARMANECIA 4.E
          </h1>
        </Link>

        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4 mt-4">
            <li>
              <Link href="/" className="hover:text-ochre">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link href="/#about" className="hover:text-ochre">
                About
              </Link>
              <ul className="absolute left-0 space-y-2 bg-white text-black px-2 py-1 rounded-md group-hover:block hidden">
                <li>
                  <Link href="/host" className="hover:text-ochre">
                    About Host
                  </Link>
                </li>
                <li>
                  <Link href="/organization" className="hover:text-ochre">
                    About Organisation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/organisingCommittee"
                    className="hover:text-ochre"
                  >
                    Organising Committee
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Schedule" className="hover:text-ochre">
                Schedule
              </Link>
            </li>
            {/* <li>
              <Link href="/Speakers" className="hover:text-ochre">
                Speakers
              </Link>
            </li> */}
            <li>
              <Link href="/Sponsors" className="hover:text-ochre">
                Sponsors
              </Link>
            </li>
            <li>
              <Link href="/Registration" className="hover:text-ochre">
                Registration
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-ochre">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {menuOpen && (
        <nav className="lg:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="hover:text-ochre">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ochre">
                About
              </Link>
              <ul className="absolute left-0 mt-2 space-y-2 bg-white text-black px-2 py-1 rounded-md group-hover:block hidden">
                <li>
                  <Link href="/host" className="hover:text-ochre">
                    About Host
                  </Link>
                </li>
                <li>
                  <Link href="/organization" className="hover:text-ochre">
                    International Speakers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Schedule" className="hover:text-ochre">
                Schedule
              </Link>
            </li>
            {/* <li>
              <Link href="/Speakers" className="hover:text-ochre">
                Speakers
              </Link>
            </li> */}
            <li>
              <Link href="/Sponsors" className="hover:text-ochre">
                Sponsors
              </Link>
            </li>
            <li>
              <Link href="/Registration" className="hover:text-ochre">
                Registration
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-ochre">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

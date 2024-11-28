import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Moviesz</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/movies" className="hover:text-gray-200">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

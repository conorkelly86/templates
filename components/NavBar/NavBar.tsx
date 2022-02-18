import React, { ReactElement, useState } from "react";
import logo from "./logo.svg";
import menu from "./menu.svg";
import favicon from "./favicon.svg";
interface NavBarProps {}

function NavBar({}: NavBarProps): ReactElement {
  const [state, setState] = useState("hidden");
  const toggleMenu = () => {
    setState(state === "" ? "hidden" : "");
  };
  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="/"
                  className="flex items-center py-5 px-3 text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex mr-2 to-blue-500"
                    fill="none"
                    stroke="#3b82f6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>

                  <span className="font-bold">Conor Kelly</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                {/* <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 ">
                  Features
                </a>
                <a href="" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Pricing
                </a> */}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1 text-gray-700">
              <a href="#" className="py-5 px-3 hover:text-gray-900">
                <span className="font-bold">Contact</span>
              </a>
              <a href="#" className="py-5 px-3 hover:text-gray-900">
                <span className="font-bold">Blog</span>
              </a>
            </div>
            <div
              onClick={toggleMenu}
              className="md:hidden flex-col items-center py-5 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex h-6 w-6 mr-2 to-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3b82f6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <div className={`md:hidden items-center ${state}`}>
            <a
              href="/contact"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
            >
              Contact
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

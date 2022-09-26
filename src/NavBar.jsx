import React from "react";
import logo from "../src/image/book.png";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bookIsbn, setBookIsbn] = useState();
  const HandleClick = (e) => {
    if (e.key === "Enter") {
      navigate(`/${bookIsbn}`);
    }
  };

  return (
    <div className="container flex flex-row">
      <div className="w-auto md:w-screen h-auto bg-white fixed flex flex-wrap justify-start items-center align-middle flex-row z-50 ">
        <div className="flex flex-col md:flex-row justify-start gap-0 md:gap-20 md:item-center w-screen px-10">
          <div className="flex flex-row  items-center gap-2 w-full relative  justify-between md:w-auto md:static md:block md:justify-start">
            <a
              className="flex flex-row justify-center items-center gap-2"
              href="/isbn"
            >
              <img src={logo} alt="logo" className="h-16 w-16" />
              <h1 className="font-bold text-xl text-opacity-10"> XYZ </h1>
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">
                <AiOutlineBars />
              </i>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow flex-col md:flex-row items-start md:items-center justify-center  pr-8 md:pr-0" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div />
            <div className="flex justify-start items-center">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 flex justify-center"
                >
                  Search
                </label>
                <div className="relative w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block p-2 pl-10 w-auto  md:w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    value={bookIsbn}
                    onChange={(e) => setBookIsbn(e.target.value)}
                    onKeyDown={HandleClick}
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-row md:w-auto  justify-start gap-10 item-center w-screen px-5 md:px-16 pb-2">
              <div className="flex md:flex-row flex-col justify-start items-start md:items-center gap-2 md:gap-10 text-sm">
                <a href="/isbn">
                  <span> Home </span>
                </a>
                <span> Rent Textbooks </span>
                <span> Buy Textbooks </span>
                <span> Sell Textbooks </span>
                <span className="flex flex-row justify-center items-center gap-1">
                  <BsGlobe style={{ color: "blue" }} /> En
                </span>
                <span className=" h-7 md:h-10 w-20 rounded-lg bg-blue-600 text-white flex justify-center items-center">
                  Contact{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;

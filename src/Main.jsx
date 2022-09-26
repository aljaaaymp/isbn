import React from "react";
import bg1 from "../src/image/bg-1.PNG";
import bg2 from "../src/image/bg-2.PNG";
import { SiBinance } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import pic1 from "../src/image/pic1.PNG";
import pic2 from "../src/image/pic2.PNG";
import pic3 from "../src/image/pic3.PNG";

const Main = () => {
  return (
    <>
      <div className="w-screen h-auto bg-gradient-to-b from-blue-100 to-sky-300 flex justify-center items-center flex-col">
        <div className="flex flex-col-reverse w-full h-full md:flex-row gap-10 justify-center items-center   md:justify-start md:px-20  py-32">
          <div className="flex flex-col gap-4 md:gap-10 justify-start items-center md:items-start px-0 md:px-20">
            <span className="text-3xl md:text-7xl font-bold text-opacity-10 flex w-1/2 h-auto">
              <h1>
                The&nbsp;Cheapest <br />
                Textbooks
              </h1>
            </span>
            <span className="text-lg md:text-2xl font-bold text-blue-500 ">
              Save Up to 90% on Millions of Titles
            </span>
            <span className="font-semibold text-xs md:text-sm">
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
              <br />
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </span>
            <span className="text-white text-sm md:text-xl items-center flex rounded-xl justify-center w-28 md:w-52 h-10 md:h-14 bg-blue-500">
              Get Started >
            </span>
          </div>
          <div className="flex w-screen md:w-1/2 h-auto justify-start items-start">
            <span>
              <img
                src={bg1}
                alt="pic1"
                className="object-cover h-full w-full items-center "
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row h-auto w-screen justify-center gap-2  ">
          <div className="flex flex-col w-screen md:w-auto md:flex-row gap-10 justify-start px-0 md:px-20 py-0 md:py-10">
            <div className="flex w-screen md:w-1/2 h-auto justify-center items-center">
              <span>
                <img src={bg2} alt="secondImage" className=" h-auto w-full " />
              </span>
            </div>
            <div className="flex w-screen md:w-1/2 h-full flex-col justify-center items-center md:items-start px-0 md:px-20">
              <span className="text-xl md:text-4xl text-white font-bold  py-2">
                <h1>Our commitment</h1>
              </span>

              <span className="text-xs md:text-sm font-semibold text-white pb-10 ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
                sed diam nonumy eirmod tempor invidunt ut labore et <br />{" "}
                dolore magna aliquyam erat, sed diam voluptua.
                <br /> At vero eos et accusam et justo duo dolores et ea rebum
              </span>
              <span className="text-blue-300 md:text-xl text-xs items-center flex rounded-xl justify-center w-20 md:w-44 h-10 md:h-14 bg-blue-900">
                Learn more >
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-20 w-screen items-center">
          <div>
            <span className="text-2xl md:text-5xl text-white font-bold ">
              {" "}
              Trusted By Awesome
              <span className="text-orange-300"> Clients </span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 py-10 pb-5 md:pb-36 items-start md:text-3xl text-xl text-white">
            <span className="flex flex-row justify-center items-center gap-5">
              {" "}
              <SiBinance className="text-3xl md:text-6xl" /> Binance
            </span>
            <span className="flex flex-row justify-center items-center gap-5">
              {" "}
              <FaBitcoin className="text-3xl md:text-6xl" /> Bitcoin
            </span>
            <span className="flex flex-row justify-center items-center gap-5">
              {" "}
              <SiBinance className="text-3xl md:text-6xl" /> Solana
            </span>
            <span className="flex flex-row justify-center items-center gap-5">
              {" "}
              <FaEthereum
                className="text-3xl md:text-6xl"
                style={{ color: "#7FFFD4" }}
              />{" "}
              Ethereum
            </span>
            <span className="flex flex-row justify-center items-center gap-5">
              {" "}
              <SiBinance className="text-3xl md:text-6xl" /> Tether
            </span>
            <span className="flex flex-row justify-center items-center gap-5">
              {" "}
              <SiBinance className="text-3xl md:text-6xl" /> XRP
            </span>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto bg-white flex justify-center items-center flex-col">
        <div className="container flex flex-col justify-center items-center pt-10 md:pt-20">
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-2xl md:text-4xl">
              {" "}
              Explore our Books
            </span>
            <span className="text-center text-xs md:text-sm px-5">
              {" "}
              With our dedicated customer support team, you can rest easy
              knowing that we’re doing everything <br />
              we can to save you time, money, and stress.
            </span>
            <div className="grid grid-rows-1 md:grid-cols-3 pt-16 gap-10 z-10">
              <div className="flex flex-col justify-center">
                <img src={pic1} alt="book1" className=" h-fit w-fit pb-5" />
                <span className="text-black md:text-white text-2xl font-bold pl-4">
                  Doughnuts And Doom
                </span>
                <span className="text-blue-300 pt-5 pl-4">
                  View Book Details >
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <img src={pic2} alt="book2" className=" h-fit w-fit pb-5" />
                <span className="text-black md:text-white text-2xl font-bold pl-4">
                  The Bend Of Luck
                </span>
                <span className="text-blue-300 pt-5 pl-4">
                  View Book Details >
                </span>
              </div>{" "}
              <div className="flex flex-col justify-center">
                <img src={pic3} alt="book3" className=" h-fit w-fit pb-5" />
                <span className="text-white text-2xl font-bold pl-4">
                  The Underwater Welder
                </span>
                <span className="text-blue-300 pt-5 pl-4">
                  View Book Details >
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-900 h-auto w-full -skew-y-3 -mt-40 flex flex-col">
        <div className="flex flex-col justify-center items-center px-14">
          <span className="text-orange-300 pt-52 text-sm pl-20 skew-y-3">
            {" "}
            LOREM IPSUM{" "}
          </span>
          <span className="text-white pt-2 pl-20 skew-y-3 text-2xl font-bold">
            {" "}
            3 Reasons To Shop With Us
          </span>
          <div className="flex flex-col md:flex-row justify-center items-center  skew-y-3 pb-32 ">
            <div className="flex flex-col justify-start items-center md:items-start">
              <span className="text-blue-300 pt-10 pl-0 md:pl-20 skew-y-3 ">
                <SiBinance size={30} />
              </span>
              <span className="text-white pt-10 pl-0 md:pl-20 text-sm font-semibold text-center">
                All textbook rentals come <br />
                with free return shipping.
              </span>
              <span className="text-white pt-2 pl-0 md:pl-20 text-xs md:text-start text-center px-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore Stet
                clita kasd gubergren, no sea takimata.
              </span>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start">
              <span className="text-blue-300 pt-10 pl-0 md:pl-20 skew-y-3">
                <SiBinance size={30} />
              </span>
              <span className="text-white pt-10 pl-0 md:pl-20 text-sm font-semibold text-center">
                Dedicated customer <br /> support and help portal.
              </span>
              <span className="text-white pt-2 pl-0 md:pl-20 text-xs md:text-start text-center px-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore Stet
                clita kasd gubergren, no sea takimata.
              </span>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start">
              <span className="text-blue-300 pt-10 pl-0 md:pl-20 skew-y-3">
                <SiBinance size={30} />
              </span>
              <span className="text-white pt-10 pl-0 md:pl-20 text-sm font-semibold text-center">
                Buy or rent cheap textbooks <br />& save up to $500 per year!
              </span>
              <span className="text-white pt-2 pl-0 md:pl-20 text-xs md:text-start text-center px-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore Stet
                clita kasd gubergren, no sea takimata.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-auto h-auto pb-28 bg-white justify-start items-center">
        <div className="flex flex-col w-screen md:w-auto justify-center items-center py-20">
          <span className="font-bold text-xl"> Andrew Santellan</span>
          <span className="text-sm text-blue-400 py-2 font-semibold">
            {" "}
            Product Manager, Binance
          </span>
          <span className="flex flex-row justify-center items-center gap-4 text-gray-400 font-semibold text-lg">
            {" "}
            <SiBinance size={56} />
            Binance
          </span>
        </div>
        <div className="w-sreen md:w-1/2 h-auto rounded-xl bg-blue-400 flex flex-col justify-center items-center ">
          <span className="w-5/6 h-6 bg-blue-200 -mt-6 rounded-t-md " />
          <span className="w-24 h-24 rounded-full bg-black -mt-10 " />
          <span className="px-20 text-center text-white text-lg font-semibold pt-2 ">
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </span>
          <span className="text-yellow-400 py-10 flex flex-row gap-3">
            <AiFillStar size={28} />

            <AiFillStar size={28} />
            <AiFillStar size={28} />
            <AiFillStar size={28} />

            <AiFillStar size={28} />
          </span>
        </div>
      </div>
      <div className="w-auto h-auto bg-gray-100">
        <div className="flex flex-col justify-center items-center py-20">
          <div className="flex justify-start flex-col  gap-10">
            <span className="text-4xl font-bold text-center">
              {" "}
              Frequently Asked Question
            </span>
            <span className="text-blue-500 font-bold text-lg text-center">
              {" "}
              Dedicated customer support and help portal.
            </span>
            <span className="text-blue-500 font-bold text-lg text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </span>
            <span className="text-blue-500 font-bold text-lg text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </span>
            <span className="text-blue-500 font-bold text-lg text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

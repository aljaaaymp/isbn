import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import logo from "../src/image/book.png";

const Footer = () => {
  return (
    <div className="w-auto h-auto bg-WHITE py-20">
      <div className="grid grid-row-1 md:grid-cols-4 gap-10 px-20">
        <div className="flex flex-col gap-9">
          <div className="flex items-center justify-start gap-2">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <h1 className="font-bold text-3xl text-opacity-10"> XYZ </h1>
          </div>
          <span className="pb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </span>

          <input
            type="search"
            id="default-search"
            className="block p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-blue-500"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="font-bold text-lg hover:cursor-pointer"> Menu </span>
          <span> Shop All</span>
          <span> About Us</span>
          <span> Community</span>
          <span> FAQs</span>
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="font-bold text-lg"> Support </span>
          <span> Shipping & Returns</span>
          <span> Help & FAQ</span>
          <span> Terms & Conditions</span>
          <span> Privacy Policy </span>
          <span> Contact</span>
          <span> Login</span>
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="font-bold text-lg"> Resources </span>
          <span> Shipping & Returns</span>
          <span> Help & FAQ</span>
          <span> Terms & Conditions</span>
          <span> Privacy Policy </span>
          <span> Contact</span>
          <span> Login</span>
        </div>
      </div>
      <div className="flex flex-row justify-between px-20 pt-20">
        <span className="text-xs font-semibold"> &copy; 2022 Aljay.</span>
        <div className="flex  text-blue-800 gap-4">
          <span className="bg-slate-200 rounded-full w-10 h-10 flex justify-center items-center">
            <GrFacebookOption size={15} />
          </span>
          <span className="bg-slate-200 rounded-full w-10 h-10 flex justify-center items-center">
            <GrLinkedinOption size={15} />
          </span>
          <span className="bg-slate-200 rounded-full w-10 h-10 flex justify-center items-center">
            <AiOutlineTwitter size={15} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

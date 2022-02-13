import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiUnicorn } from "react-icons/gi";
// import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

function NavBar() {
  return (
    <div className="bg-[#1E5128] w-screen px-[1.2rem] py-[0.8rem] flex">
      <div className="flex items-center cursor-pointer">
        <p className="ml-[0.8rem] text-white font-semibold text-3xl">
          <GiUnicorn />
        </p>
        <div className="ml-[0.8rem] text-white font-semibold text-2xl">
          The Animal Project
        </div>
      </div>
      <div className="flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]">
        <div className="text-[#8a939b] mx-3 font-bold text-lg">
          <AiOutlineSearch />
        </div>
        <input
          className="h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]"
          placeholder="Explore Endangered Species NFTs"
        />
      </div>
      <div className="flex items-center justify-end">
        {/* <Link href="ref">
          <div className={style.headerItem}> Collections </div>
        </Link> */}
        <div className="text-white px-4 font-bold  hover:text-white cursor-pointer">
          {" "}
          Stats{" "}
        </div>
        <div className="text-white px-4 font-bold hover:text-white cursor-pointer">
          {" "}
          Resources{" "}
        </div>
        <div className="text-white px-4 font-bold  hover:text-white cursor-pointer">
          {" "}
          Create{" "}
        </div>
        <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
          <CgProfile />
        </div>
        <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
          <MdIcons.MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

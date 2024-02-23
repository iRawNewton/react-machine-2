import React from "react";
import { NavData } from "../../constants/NavData";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="max-w-[1639px] mx-auto h-[140px] bg-white">
      <nav className="w-full flex items-center justify-between px-5">
        <div className="flex space-x-7">
          <img src="/logo.png" alt="logo" className="w-[229px] h-[100px]" />
          {NavData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-2  "
            >
              <p className={`font-sans ${index === 0 && "font-semibold"}`}>
                {item.title}
              </p>
              {item.title === "Shop" && <FaChevronDown />}
            </div>
          ))}
        </div>
        <div className="w-[330px] h-[50px] border-2 rounded-full flex items-center px-3">
          <input
            type="text"
            className="h-full w-full outline-none"
            placeholder="Search"
          />
          <FaSearch />
        </div>
        <div className="flex space-x-4 items-center">
          <img
            src="/Vector.png"
            alt="heart logo"
            className="h-[36px] w-[36px]"
          />
          <img src="/cart.png" alt="heart logo" className="h-[36px] w-[36px]" />
          <button className="bg-[#0EEA90] px-[36px] py-[18px] text-white rounded-full">
            Account
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

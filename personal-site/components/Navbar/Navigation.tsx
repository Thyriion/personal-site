import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [dropDownClasses, setDropdownClasses] = useState<string>("");

  useEffect(() => {
    setDropdownClasses(
      `absolute w-full h-60 z-10 bg-gray-800 text-2xl md:invisible top-0 transform -translate-y-full ${
        openDropdown ? "transform-none" : ""
      } transition-transform duration-500 shadow-lg`
    );
  }, [openDropdown]);

  return (
    <nav className="h-20 shadow-lg grid grid-flow-col justify-end items-center md:block relative text-zinc-300 ">
      <section className="grid grid-flow-col text-2xl gap-10 justify-center items-center h-full invisible md:visible">
        <a
          href="#"
          className="hover:text-zinc-100 hover:border-b-2 border-zinc-300"
        >
          Skills
        </a>
        <a
          href="#"
          className="hover:text-zinc-100 hover:border-b-2 border-zinc-300"
        >
          Werdegang
        </a>
        <a
          href="#"
          className="hover:text-zinc-100 hover:border-b-2 border-zinc-300"
        >
          Referenzen
        </a>
      </section>
      <section className="md:invisible ml-auto mr-auto">
        <FaBars
          size={70}
          className="px-4 cursor-pointer hover:scale-105 hover:text-zinc-100 focus:scale-105 focus:text-zinc-100"
          onClick={() => {
            setOpenDropdown(true);
          }}
        />
      </section>
      <section className={dropDownClasses}>
        <div className="flex flex-col items-center gap-3 h-full justify-end pb-6">
          <a href="#" className="hover:border-b-2 border-zinc-300">
            Skills
          </a>
          <a href="#" className="hover:border-b-2 border-zinc-300">
            Werdegang
          </a>
          <a href="#" className="hover:border-b-2 border-zinc-300">
            Referenzen
          </a>
        </div>
        <AiOutlineClose
          className="z-20 absolute right-0 top-0 mt-2 mr-2 md:invisible cursor-pointer hover:scale-105 hover:text-zinc-100 focus:scale-105 focus:text-zinc-100"
          onClick={() => {
            setOpenDropdown(false);
          }}
          size={40}
        />
      </section>
    </nav>
  );
}

export default Navigation;

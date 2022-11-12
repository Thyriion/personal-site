import React from "react";
import { FaGithub, FaGlobeEurope } from "react-icons/fa";

function Referenzen() {
  return (
    <div>
      <div className="w-fit text-2xl mx-auto">
        <a
          href="https://github.com/Thyriion"
          target="_blank"
          className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
          rel="noreferrer"
        >
          <FaGithub />
          Quellcode
        </a>
      </div>
      <div className="w-fit text-2xl mx-auto my-5">
        <a
          href="https://www.selectline.de/jobs/"
          target="_blank"
          className="flex justify-center items-center gap-5 hover:scale-105 hover:text-gray-100"
          rel="noreferrer"
        >
          <FaGlobeEurope />
          SelectLine Jobsseite
        </a>
      </div>
    </div>
  );
}

export default Referenzen;

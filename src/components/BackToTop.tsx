import React, { useEffect, useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div
      className={`
      w-12 p-2 z-50 fixed sm:bottom-20 sm:right-20 bottom-10 right-10 rounded-full bg-primary-400 text-white 
      transition duration-500 delay-300 cursor-pointer hover:opacity-100
      ${visible ? "opacity-50 scale-100" : "opacity-0 scale-0"}
    `}
    >
      <Link to={"header-top"} spy={true} smooth={true} offset={-40}>
        <ChevronDoubleUpIcon />
      </Link>
    </div>
  );
};

export default BackToTop;

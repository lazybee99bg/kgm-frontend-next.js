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
      transition duration-500 cursor-pointer w-12 p-2 z-50 fixed bottom-10 right-10 rounded-full bg-primary-400 text-white
      ${visible ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
    >
      <Link to={"header-top"} spy={true} smooth={true} offset={-40}>
        <ChevronDoubleUpIcon />
      </Link>
    </div>
  );
};

export default BackToTop;

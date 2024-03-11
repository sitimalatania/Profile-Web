import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown = window.scrollY > 0;
      setScrollDown(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` z-50 rounded-3xl text-center md:top-5 h-16 w-1/4 mx-auto grid place-items-center sticky ${
        scrollDown
          ? "md:bg-yellow-200 transition-colors duration-1000"
          : " transition-colors duration-1000 bg-transparent"
      }`}
    >
      <div className="hidden md:flex">
        <ul className="flex items-center gap-10 font-medium">
          <li
            className={
              scrollDown
                ? " transition-colors duration-1000 hover:text-white text-cyan-900"
                : "transition-colors duration-1000 hover:text-white text-yellow-100"
            }
          >
            <Link to="beranda">Home</Link>
          </li>
          <li
            className={
              scrollDown
                ? "transition-colors duration-1000 hover:text-white text-cyan-900"
                : "transition-colors duration-1000 hover:text-white text-yellow-100"
            }
          >
            <Link to="skills">Skills</Link>
          </li>
          <li
            className={
              scrollDown
                ? "transition-colors duration-1000 hover:text-white text-cyan-900"
                : "transition-colors duration-1000 hover:text-white text-yellow-100"
            }
          >
            <Link to="project">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="pt-0">
      <div className="flex flex-wrap ">
        <div className="w-full flex items-center justify-center gap-3 md:flex-row md:justify-center md:items-center md:gap-8 mt-24 pb-12 md:pb-12">
          <h2 className="font-semibold text-yellow-50  text-base max-w-md lg:text-xl">
            Get in touch with me :
          </h2>
          <div className="flex items-center gap-1.5 md:gap-6">
            <a
              href="mailto:smalatania@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact me at Email"
            >
              <IoMail className="text-2xl md:text-4xl text-yellow-100 hover:text-yellow-200" />
            </a>
            <a
              href="https://github.com/sitimalatania"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithubSquare className="text-2xl md:text-4xl text-yellow-100 hover:text-yellow-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/sitimalatania127/"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              <FaLinkedin className="text-2xl md:text-4xl text-yellow-100 hover:text-yellow-200" />
            </a>
            <a
              href="https://www.instagram.com/sitimalatania/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Instagram"
            >
              <FaInstagramSquare className="text-2xl md:text-4xl text-yellow-100 hover:text-yellow-200" />
            </a>
          </div>
        </div>
        <div className="w-full px-4 pb-3 bg-yellow-100">
          <div
            className="w-full flex justify-center pt-4 text-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            <p className="font-bold text-sm text-cyan-900 lg:text-lg">
              &quot;Let your work speak volumes&quot;
            </p>
          </div>
          <div
            className="w-full flex justify-center text-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            <p className="font-semibold text-sm text-cyan-900 md:text-base xl:text-lg">
              @2024.sitimalatania
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

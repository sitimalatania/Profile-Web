import React, { useEffect, useState } from "react";
import { IoIosDownload } from "react-icons/io";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

function Beranda() {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  function toggleTextExpansion() {
    setIsTextExpanded(!isTextExpanded);
  }

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 300,
      easing: "ease-in-sine",
      duration: 1000,
    });
  }, []);

  function handleDownload() {
    const fileURL = " ";
    window.open(fileURL, "_blank");
  }

  return (
    <section id="beranda">
      <div className="pt-0 md:pt-20 px-10 pb-5">
        <div className="flex flex-wrap">
          <div
            className="w-full lg:mb-20 self-center lg:w-1/2"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <h1 className="text-sm font-semibold text-yellow-50 lg:text-3xl">
              Hello !
            </h1>
            <h2 className="font-bold text-yellow-200 text-2xl mt-3 lg:text-5xl xl:text-6xl">
              I am Siti Malatania
            </h2>
            <p className="font-medium text-yellow-50 mt-2 text-sm mb-3 md:mb-5 md:text-base xl:text-lg">
              i&apos;m a{" "}
              <span className="text-yellow-200 font-bold">
                Front-End Developer
              </span>
            </p>
            <div>
              <p
                className={`font-small text-yellow-50 leading-relaxed text-justify lg:mr-6 text-md md:text-lg lg:font-medium ${
                  isTextExpanded
                    ? ""
                    : "overflow-hidden line-clamp-3 lg:line-clamp-none"
                }`}
              >
                I am a fresh graduate of Information Engineering at
                Gadjah Mada University. I have an interest and experience 
                in software engineering, particularly in UI/UX design and 
                front-end development. I'm highly disciplined, hardworking, 
                adaptable, and able to work under pressure. I'm eager to learn 
                in a new technological organization or company.
              </p>
              {!isTextExpanded ? (
                <span
                  onClick={toggleTextExpansion}
                  className="cursor-pointer text-sm lg:font-semibold font-semibold text-yellow-200 hover:underline md:text-base md:hidden"
                >
                  Read More...
                </span>
              ) : (
                <span
                  onClick={toggleTextExpansion}
                  className="cursor-pointer text-sm lg:font-semibold font-semibold text-yellow-200 hover:underline md:text-base"
                >
                  Read Less
                </span>
              )}
            </div>

            <button
              onClick={handleDownload}
              className="text-sm lg:font-semibold font-semibold flex items-center text-black bg-yellow-200 py-2 px-3 mt-10  rounded-md hover:shadow-xl hover:bg-yellow-400 md:font-semibold md:text-lg md:py-2 md:px-5"
            >
              <IoIosDownload className="mr-2 text-lg lg:text-2xl " />
              Download CV
            </button>
          </div>
          <div className="w-full self-end lg:w-1/2">
            <div
              className="mt-10 lg:mt-0 lg:right-0"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/profile-picture.png"
                alt="profile-picture"
                className=" max-w-full mx-auto object-cover"
                width="400"
                height="200"
              />
            </div>
            <div
              className="w-full flex items-center justify-center gap-3 md:flex-row md:justify-end md:items-center md:gap-8 mt-24 pb-12 md:pb-0"
              data-aos="fade-up"
            >
              <h2 className="font-semibold text-yellow-50 text-base max-w-md lg:text-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beranda;

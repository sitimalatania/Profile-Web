import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgArrowTopRightR } from "react-icons/cg";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya terjadi sekali
    });
  }, []);

  return (
    <section id="project">
      <div className="pt-36 pb-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:px-14">
          <h1 className="font-bold text-xl uppercase text-yellow-200 mb-2 lg:text-3xl">
            My Project
          </h1>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Project 1 */}
          <div
            className="mb-5 p-4 flex bg-amber-100 flex-col md:flex-row gap-8 rounded-md"
            data-aos="zoom-in"
          >
            <div className="mb-0 md:mb-0 md:w-1/2" data-aos="zoom-in">
              <img
                src="/embersense.jpg"
                alt="Prakalight"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 data-aos="fade-up">
                <div className="font-bold text-base text-cyan-900 mb-1 lg:text-2xl">
                  Embersense
                </div>
              </h2>
              <p
                className="font-normal pr-4 text-sm text-secondary text-cyan-900 text-justify lg:text-base lg:font-medium mt-3"
                data-aos="fade-up"
              >
                EmberSense is an Internet of Things (IoT) based forest fire
                detection system that communicates almost in real-time via a
                website to notify you if a fire occurs. The sensor used in this
                system is a Linear Heat Sensor (LHS) which will be used to
                maintain temperature continuously and identify temperature
                changes as an initial indication of a forest fire.
              </p>
              <div className="flex items-center mt-4 gap-2" data-aos="zoom-in">
                <a
                  href="https://embersense.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-3 text-sm md:px-4 py-2 rounded-md md:text-base font-semibold hover:bg-cyan-900 hover:text-yellow-400"
                >
                  <CgArrowTopRightR />
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Project 2 */}
          <div
            className="mb-5 p-4 flex bg-amber-100 flex-col md:flex-row gap-8 rounded-md"
            data-aos="zoom-in"
          >
            <div className="mb-0 md:mb-0 md:w-1/2" data-aos="zoom-in">
              <img
                src="/paw.jpg"
                alt="Prakalight"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 data-aos="fade-up">
                <div className="font-bold text-base text-cyan-900 mb-1 lg:text-2xl">
                  Pieces of Artwork
                </div>
              </h2>
              <p
                className="font-normal pr-4 text-sm text-secondary text-cyan-900 text-justify lg:text-base lg:font-medium mt-5"
                data-aos="fade-up"
              >
                Pieces of Artwork is a website that provides a platform for
                artists to display their work to the general public as a form of
                appreciation and expression of opinion. This is a project from a
                web application development course assignment
              </p>
              <div className="flex items-center mt-8 gap-2" data-aos="zoom-in">
                <a
                  href="https://pieces-of-artwork.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-3 text-sm md:px-4 py-2 rounded-md md:text-base font-semibold hover:bg-cyan-900 hover:text-yellow-400"
                >
                  <CgArrowTopRightR />
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

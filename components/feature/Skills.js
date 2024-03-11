function Skills() {
  return (
    <section id="skills">
      <div className="pt-36 pb-32">
        <div
          className="mx-auto text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="font-bold text-xl text-yellow-200 uppercase lg:text-3xl">
            Skills & Tools
          </h2>
        </div>
        <div
          className="w-full px-4"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="1000"
        >
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[110px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[110px] lg:mx-6 lg:max-w-[130px] xl:max-w-[150px] xl:mx-8"
            >
              <img src={"/s1.png"} alt="HTML5" />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[80px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[110px] xl:mx-8"
            >
              <img src={"/s2.png"} alt="Css" />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[80px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
            >
              <img src={"/s3.png"} alt="Javascript" />
            </a>
            <a
              href="https://tailwindui.com/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[80px] mx-4 py-4 Class
              Properties
              saturate-0	filter: saturate(0);
              saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
            >
              <img src={"/s4.png"} alt="Tailwind" />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[80px] mx-4 py-4 saturate-100 opacity-60 transition duration-200 hover:saturate-50 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
            >
              <img src={"/s5.png"} alt="Bootstrap5" />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[80px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
            >
              <img src={"/s6.png"} alt="React Js" />
            </a>
            <a
              href="https://www.php.net/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[100px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[110px] lg:mx-6 lg:max-w-[120px] xl:max-w-[130px] xl:mx-8"
            >
              <img src={"/s7.png"} alt="PHP" />
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[80px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[90px] lg:mx-6 lg:max-w-[100px] xl:max-w-[120px] xl:mx-8"
            >
              <img src={"/s8.png"} alt="Python" />
            </a>
            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[100px] mx-4 py-4 saturate-50 opacity-60 transition duration-200 hover:saturate-100 hover:opacity-100 md:max-w-[110px] lg:mx-6 lg:max-w-[120px] xl:max-w-[140px] xl:mx-8"
            >
              <img src={"/s9.png"} alt="MYSQL" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

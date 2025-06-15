import React from "react";
import aboutPhoto from "../assets/images/about-photo.png";
import gridBox from "../assets/images/grid-box.png";

export default function AboutUs() {
  return (
    <section id="about" className="font-montserrat bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* LEFT: Text */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span
              className="inline-flex items-center justify-center text-cyberred font-extrabold"
              style={{
                backgroundImage: `url(${gridBox})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width: "120px",
                height: "60px",
                lineHeight: "1",
              }}
            >
              About
            </span>{" "}
            <span className="text-cyberviolet">Us</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Cybernest IT Solutions empowers public and private institutions to achieve seamless digital transformation
            through its end-to-end Flow Management system—optimizing people, tasks, and data for greater efficiency.
            As a key enabler, Cybernest drives innovation in service-oriented organizations.
          </p>

          <p className="text-base font-bold text-cyberviolet mb-1">What is Cybernest?</p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            Cybernest IT Solutions helps private and government institutions deliver seamless digital transformation by
            providing an end-to-end Flow Management system that optimizes the movement of people, tasks, and data.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="bg-cyberred text-white font-semibold text-sm px-6 py-2 rounded-full flex items-center gap-2 justify-center">
              Learn More <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-3/5">
          <img
            src={aboutPhoto}
            alt="About"
            className="w-full max-w-[700px] rounded-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
}

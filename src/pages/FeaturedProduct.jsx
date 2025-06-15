import { CheckCircle, XCircle } from "lucide-react";
import flowDot from "../assets/images/flow.png";
import flowPlus from "../assets/images/flow-plus.png";
import gridBox from "../assets/images/grid-box.png";
export default function FeaturedProduct() {
  return (
    <section id="products" className="px-6 py-20 font-montserrat text-gray-700 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center md:text-left mb-10 px-4 sm:px-6 lg:px-20">
  {/* Left Heading & Intro */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
      <span
        className="inline-flex items-center justify-center text-cyberred font-extrabold"
        style={{
          backgroundImage: `url(${gridBox})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "150px",
          height: "60px",
          lineHeight: "1",
        }}
      >
        Featured
      </span>{" "}
      <span className="text-cyberviolet">Product</span>
    </h2>
    <p className="text-sm sm:text-base text-gray-600">
      Discover how our FLOW solutions help streamline your operations,
      reduce wait times, and enhance client satisfaction—
      whether you’re running a small clinic or a midsize institution.
    </p>
  </div>

  {/* Supporting Text */}
  <div className="flex flex-col justify-center">
    <p className="text-sm sm:text-base text-gray-600">
      Learn more about how Flow works and how it can help you in optimizing your queueing system.
    </p>
  </div>
</div>


        {/* Comparison Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Basic Version */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-lg w-full border border-gray-200">
          <div className="absolute bg-cyberviolet text-white text-xs font-bold px-10 py-2 rounded-t-2xl w-fit mx-6 mt-[-30px]">
            Basic Version
          </div>
            <div className="p-6 text-left flex gap-20">
              <div className="w-1/2">
                <img src={flowDot} alt="Flow Basic" className="h-12 object-contain" />
                <p className="text-[10px] mb-20 text-gray-600 px-2">
                  Basic queuing system for small offices and clinics with
                  simple registration and public queue display.
                </p>
                <p className="text-[9px] mb-2 text-gray-600 px-2">
                  Book a quick meeting with our team for more in depth inquiries.
                </p>
                <button className="text-xs px-8 py-2 bg-cyberviolet text-white rounded-full font-bold   ">
                  Book a Meeting
                </button>
              </div>
              <div className="w-3/5">
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Queueing System</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Booking System</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Client Tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Digital or Physical Kiosk</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Dashboard CRM</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Auto Assign Client</li>
                  <li className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> Point of Sale (POS)</li>
                  <li className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> Client Demographics</li>
                  <li className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> Data Analytics</li>
                </ul>
              </div>
            </div>
          </div>

        {/* Premium Version */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-lg w-full border border-gray-200">
          <div className="absolute bg-cyberred text-white text-xs font-bold px-10 py-2 rounded-t-2xl w-fit mx-6 mt-[-30px]">
            Premium Version
          </div>
        <div className="p-6 text-left flex gap-20">
            <div className="w-1/2">
            <img src={flowPlus} alt="Flow+" className="h-12 object-contain" />
            <p className="text-[10px] mb-20 text-gray-600 px-2">
                Enhanced system with digital registration, automated tracking, and CRM for midsize institutions.
            </p>
            <p className="text-[9px] mb-2 text-gray-600 px-2">
                Book a quick meeting with our team for more in depth inquiries.
            </p>
            <button className="text-xs px-8 py-2 bg-cyberred text-white rounded-full font-bold">
                Book a Meeting
            </button>
            </div>
            <div className="w-3/5">
            <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Queueing System</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Booking System</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Client Tracking</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Digital or Physical Kiosk</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Dashboard CRM</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Auto Assign Client</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Point of Sale (POS)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Client Demographics</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Data Analytics</li>
            </ul>
            </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}

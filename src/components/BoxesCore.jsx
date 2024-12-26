import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx"; 
import TiltText from "./TiltText";

// Importing Heroicons for Twitter and LinkedIn icons
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "--sky-400",
    "--pink-400",
    "--green-400",
    "--yellow-400",
    "--red-400",
    "--purple-400",
    "--blue-400",
    "--indigo-400",
    "--violet-400",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const mouseMoving=(e) => {
    console.log(e.clientX,e.clientY);
  }

  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
    }} className="overflow-hidden relative w-screen h-screen bg-gradient-to-r from-customBlueStart to-customBlueEnd text-white flex items-center justify-center">
      {/* Logo in the top-left corner */}
      <div className="absolute p-1 top-4 left-4 z-10">
        <img
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" // Replace with your logo file path
          alt="Logo"
          className="w-12 h-12"
        />
      </div>

      {/* Hire Me button in the top-right corner */}
      <div className="absolute top-4 right-4 z-10 px-4">
        <button className="px-4 py-2 bg-black border-4 text-xl rounded-full text-white shadow-lg hover:bg-gray-500 transition">
          Hire Me
        </button>
      </div>

      {/* TiltText Component in Center */}
      <div className="absolute z-10">
        <TiltText text="I am a Creative Web Developer" className="text-4xl text-gray-50 font-bold-sans" />
      </div>

      {/* Background */}
      <div
        style={{
          transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        }}
        className={clsx(
          "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
          className
        )}
        {...rest}
      >
        {rows.map((_, i) => (
          <motion.div
            key={`row-${i}`}
            className="w-16 h-8 border-l bg-slate-800 relative"
          >
            {cols.map((_, j) => (
              <motion.div
                whileHover={{
                  backgroundColor: `var(${getRandomColor()})`,
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2 },
                }}
                key={`col-${j}`}
                className="w-16 h-8 border-r border-t border-slate-700 relative"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-200 stroke-[1px] pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Text in the Bottom Left Corner */}
      <div className="absolute bottom-4 left-4 z-10 text-white text-xl font-semibold p-4">
        WEBSITE DESIGN | FREELANCE
      </div>

      {/* Social Links in the Bottom Right Corner */}
      <div className="absolute bottom-4 right-4 z-10 flex space-x-4 p-4">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

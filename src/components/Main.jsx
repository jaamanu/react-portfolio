import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaTwitter, FaMedium } from "react-icons/fa";

const Main = () => {
  return (
    <div className="items-center flex-col" id="main">
      <div
        className="w-full h-screen relative bg-slate-700"
        style={{
          backgroundImage: 'url("../assets/Screenshot 2023-05-23 at 16.06.45.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center  text-white ">
          <h1 className="sm:text-5xl font-bold text-blue-500 ">
            I'm James Asibey Manu
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white pl-4 pr-4">
            I'm a
            <TypeAnimation
              sequence={[
                "FullStack Developer", // Types 'One'
                2000, // Waits 1s
                "Network Engineer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "IT Specialist",
                2000, // waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div>
            <p className=" shadow-slate-100 mt-4 rounded-md text-white pr-2 pl-2">
              With a background in developing efficient software applications in a global market. More than 1300+ hours of experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline. Strong skills include React, Redux, JavaScript, Ruby on Rails, Figma, and Animation Libraries!
            </p>
          </div>

          <div className="flex justify-between pt-6 max-w-[200px] w-full text-white ">
            <a
              href="https://github.com/jaamanu"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesasibeymanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://twitter.com/JamesAsibeyManu"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://medium.com/@jaamanu"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <FaMedium className="cursor-pointer" size={20} />
            </a>
          </div>
          <div className="mt-8 max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-110">
            <div className="px-4 py-6">
              <h1 className="text-xl font-medium text-gray-800 text-center">
                Download Resume
              </h1>
              <a
                href="https://docs.google.com/document/d/1ngESDgjMGzfRkxhqCjwu_6tyC26bnZD3aeThcbWUGzk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-left px-4 py-2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-white rounded-md transition duration-300"
              >
                Click here to download
              </a>
            </div>
          </div>
          <div
            className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white animate-snow"
            style={{
              animationDuration: "5s",
              animationIterationCount: "infinite",
              transform: "translateY(-100%) translateX(-100%) scale(0.5)",
              opacity: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

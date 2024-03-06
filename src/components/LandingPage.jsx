import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["we create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className=" w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] , duration:1}}
                    className="mr-[0.6vw] w-[9vw] h-[6vw] relative top-[0.6vw] rounded-md bg-green-500"
                  ></motion.div>
                )}
                <h1 className=" uppercase text-[9vw] leading-[8vw] tracking-tighter  font-myFonts font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 mb-10 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex justify-center gap-5">
          <div className="uppercase px-5 py-2 border-[1px]  border-zinc-500 rounded-full font-light text-md ">
            start the project
          </div>
          <div className=" w-10 h-10 border-[1px]  border-zinc-500 rounded-full flex justify-center items-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

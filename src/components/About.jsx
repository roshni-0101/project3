import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.19" className="w-full p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-4 border-t-2 border-[#a1b562] mt-20 pt-10 ">
        <div className="w-1/2">
          <h1 className=" text-7xl">Our approach: </h1>
          <button className="px-10 py-6 mt-10 bg-zinc-900 text-white uppercase rounded-full flex items-center gap-10">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] rounded-3xl bg-red-500">
          <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default About;

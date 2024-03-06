import React from "react";

function Acards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex  items-center gap-5 px-32">
      <div className="cardsContainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full flex items-center  justify-center rounded-xl bg-[#004D43]">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""/>
            <button className="absolute px-5 py-1 rounded-full text-[#CDEA68] border-2 border-[#CDEA68] left-10 bottom-10 "> &copy; 2019-2022</button>
        </div>
      </div>
      <div className="cardsContainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative w-1/2 h-full flex items-center justify-center rounded-xl bg-[#06201c]">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""/>
            <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 "> Rating 5.0 on Clutch</button>
        </div>
        <div className="card relative w-1/2 h-full flex items-center  justify-center rounded-xl bg-[#06201c]">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""/>
            <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 "> Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  );
}

export default Acards;

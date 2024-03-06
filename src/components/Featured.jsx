import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0", scale: 1 }); // Increase scale on hover
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%", scale: 1.5 }); // Restore original scale on hover end
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-[#CDEA68] leading-none tracking-tighter z-[9]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <motion.img
                initial={{ scale: 1 }}
                animate={cards[1.5]}
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh] rounded-xl"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <h1 className="absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-8xl text-[#CDEA68] leading-none tracking-tighter z-[9]">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <motion.img
                initial={{ scale: 1 }}
                animate={cards[1.5]}
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const bgref = useRef(null);
  const bgref2 = useRef(null);
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);

  const headset1Ref = useRef(null);
  const headsetRef2 = useRef(null);

  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);

  useGSAP((context, contextSafe) => {
    // <-- there it is

    // ✅ safe, wrapped in contextSafe() function and we remove the event listener in the cleanup function below. 👍
    const onClickGood = contextSafe(() => {
      gsap.to(bgref.current, { opacity: 0 });
      gsap.to(bgref2.current, { opacity: 1 });
      gsap.to(headset1Ref.current, { x: -400, y: 400, opacity: 0 });
      gsap.from(headsetRef2.current, { opacity: 0, x: 400, y: -400 });
      gsap.to(headsetRef2.current, { opacity: 1 }); // Set opacity after other animations
      gsap.to(firstDivRef.current, {
        y: -500,
        opacity: 0,
        onComplete: () => {
          firstDivRef.current.style.display = "none"; // Hide first div after animation
        },
      });
      secondDivRef.current.style.display = "flex"; // Show second div
    });
    buttonRef.current.addEventListener("click", onClickGood);
    buttonRef2.current.addEventListener("click", onClickGood);

    return () => {
      // <-- cleanup (remove listeners here)
      buttonRef.current.removeEventListener("click", onClickGood);
      buttonRef2.current.removeEventListener("click", onClickGood);
    };
  });

  return (
    <div className="max-w-[1639px] mx-auto bg-white px-5 grid grid-cols-2">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col justify-center gap-5" ref={firstDivRef}>
          <img
            src="/dbPulse.png"
            alt="DB Pulse"
            className="w-[186px] h-[48px]"
          />
          <h1 className="font-sans text-6xl font-bold">
            The <span className="text-[#EA0E68]">ultimate listning</span>{" "}
            experience.
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus arcu lobortis magna tempus placerat. In consectetur turpis
            at interdum facilisis. Nam sagittis neque id suscipit dapibus.
            Quisque imperdiet est sit amet libero auctor, ut convallis tortor
            egestas.
          </p>

          <div className="flex justify-evenly mt-24">
            <p className="font-semibold">Active Noise Cancellation</p>
            <p className="font-semibold">40H Battery life</p>
          </div>
        </div>

        <div
          className="flex-col justify-center gap-5 hidden"
          ref={secondDivRef}
        >
          <img
            src="/dbPulse.png"
            alt="DB Pulse"
            className="w-[186px] h-[48px]"
          />
          <h1 className="font-sans text-6xl font-bold">
            The <span className="text-[#0EEA90]">ultimate listning</span>{" "}
            experience.
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus arcu lobortis magna tempus placerat. In consectetur turpis
            at interdum facilisis. Nam sagittis neque id suscipit dapibus.
            Quisque imperdiet est sit amet libero auctor, ut convallis tortor
            egestas.
          </p>

          <div className="flex justify-evenly mt-24">
            <p className="font-semibold">Active Noise Cancellation</p>
            <p className="font-semibold">40H Battery life</p>
          </div>
        </div>

        <button className="flex mt-20 rounded-full gap-[12px] justify-center items-center text-white font-semibold bg-gradient-to-r from-[#EA0E68] to-[#F31220] w-[274px] px-[48px] py-[24px]">
          Explore <img src="/explore.png" />
        </button>
      </div>

      <div className="flex relative items-center justify-center">
        <img
          ref={bgref}
          src="/design.png"
          alt="background"
          className="absolute"
        />
        <img
          ref={bgref2}
          src="/design2.png"
          alt="background"
          className="absolute opacity-0"
        />
        <img
          ref={headset1Ref}
          src="/headset.png"
          alt="Head phone"
          className="absolute h-[415px] object-contain top-7"
        />
        <img
          ref={headsetRef2}
          src="/headset2.png"
          alt="Head phone"
          className="absolute h-[415px] object-contain top-7 opacity-0"
        />
        <div className="absolute bottom-1 right-10 space-x-5">
          <button
            className="bg-gray-400 text-green-600 rounded-full p-3"
            ref={buttonRef}
          >
            <FaChevronLeft />
          </button>
          <button
            className="bg-gray-400 text-green-600 rounded-full p-3"
            ref={buttonRef2}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

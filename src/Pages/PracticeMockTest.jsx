import React from "react";
import one from "../assets/images/mock/top1.png";
import two from "../assets/images/mock/top2.png";
import end from "../assets/images/mock/end.png";

import MockTestPurchase from "../Components/MockTestPurchase";

const PracticeMockTest = () => {
  return (
    <div className="pb-10">
      <div
        className="bg-gradient-to-r from-[#EDF3FB]  to-[#D4E0F1]"
        style={{
          height: "calc(90vh - 130px)", // subtract header height
        }}
      >
        <div className="w-[80%]   mx-auto">
          <div className="flex items-end flex-col md:flex-row pt-10  gap-10 justify-end md:p-16 md:py-32">
            <div className="w-full ">
              <p className="be-vietnam text-2xl md:text-5xl  leading-snug font-semibold">
                {" "}
                Save Up to 40%
                <br />
                Through Our Exciting
                <br /> Deal
              </p>
              <button className="bg-primary poppins mt-4 text-white px-8 py-2 rounded-3xl">
                Buy Now
              </button>
            </div>
            <div className="w-full flex items-end   ">
              <img src={two} alt="" className=" " />
              <img
                src={one}
                alt=""
                className="relative hidden md:block -top-20 right-10  "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-[60%] mx-auto">
        <MockTestPurchase />
      </div>
      <div className="my-10 w-[90%] md:w-[80%] mx-auto">
        <div className=" inter">
          <p className="text-2xl md:text-4xl font-semibold text-center my-20 ">
            Take your preparation a step further
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full space-y-8">
              <p className="text-2xl md:text-4xl font-semibold">
                Give <span className="text-primary">Practice Mock Tests</span>{" "}
                in Real Exam Environment
              </p>
              <p>
                At Opal Institute, we offer real exam environment to our
                students to practice PTE Tests to gain confidence and be fully
                prepared for their big exam. We have very limited spots and take
                exam on the announced dates each month. Book your spot now with
                us to take your PTE Exam preparation to a step further.
              </p>
              <button className="bg-primary px-8 py-3 rounded-3xl text-white">
                Reserve your Spot Now
              </button>
            </div>
            <div className="w-full">
              <img src={end} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeMockTest;

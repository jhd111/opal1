import React from "react";
import logo2 from "../assets/logo-2.png";
import el from "../assets/images/elements.png";
import one from "../assets/images/result/1.png";
import { NavLink } from "react-router-dom";

import { fetchResults } from "../Services/HomeResults";

const Resultsrow = () => {

  const { data: Results, isLoading, error } = fetchResults();

  return (
    <div>
      <div className=" space-y-4 mb-10 p-4 ">
        <p className=" text-xl font-semibold lg:text-3xl lg:font-bold be-vietnam ">
          See Our Student’s Results
        </p>
        <p className="text-xs lg:text-sm plus-jakarta">
        Our students’ PTE results speak volumes — consistently achieving top scores that open doors to global opportunities.
        </p>
      </div>

      <div className="grid  md:grid-cols-2 be-vietnam  gap-10">
        {Results &&
          Results?.data?.map((val, i) => (
            <div key={i} className="border bg-white rounded-md">
              <div className="px-4 md:px-10 py-4">
                <p className="text-xl font-semibold lg:text-3xl lg:font-bold my-4 text-gray-700 ">
                  Overall Score: {val.overall_score /* Example dynamic content */}
                </p>
                <div className="flex my-2">
                  <div className="flex gap-3 md:gap-3">
                    <div className="">
                      <div className="space-y-2">
                        <div className="w-16 h-16 rounded-full border-2 relative border-black">
                          <p className="text-xl font-bold absolute top-[29%] left-[30%]">
                            {val.listening}
                          </p>
                        </div>
                        <p className="text-center">Listening</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="space-y-2">
                        <div className="w-16 h-16 rounded-full border-2 relative border-black">
                          <p className="text-xl font-bold absolute top-[29%] left-[30%]">
                            {val.reading}
                          </p>
                        </div>
                        <p className="text-center">Reading</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="space-y-2">
                        <div className="w-16 h-16 rounded-full border-2 relative border-green-500">
                          <p className="text-xl font-bold absolute top-[29%] left-[30%]">
                            {val.speaking}
                          </p>
                        </div>
                        <p className="text-center">Speaking</p>
                      </div>
                    </div>
                    <div className="">
                      {/* top-1/3 */}
                      <div className="space-y-2">
                        <div className="w-16 h-16 rounded-full border-2 relative border-pink-700">
                          <p className="text-xl font-bold absolute  top-[29%] left-[30%]">
                            {val.writing}
                          </p>
                        </div>
                        <p className="text-center">Writing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 items-center bg-slate-50 px-4 md:px-10 py-2 rounded-md justify-between">
                <div className="flex items-center gap-2">
                  <img src={val.image} alt={`Result ${i}`} width={50} height={15} />
                  <span>{val.student_name}</span>
                </div>
                <NavLink
                  // to="/results"
                  to={{
                    pathname: "/results",
                  }}
                  state={{ object: val }} // Pass the full object here
                  className="bg-gray-100 px-6 py-2 rounded-md text-xs"
                >
                  Read Full Story
                </NavLink>
              </div>
            </div>
          ))}

        {/* <div className="border  bg-white  rounded-md">
          <div className=" px-4 md:px-10 py-4">
            <p className="font-bold my-4 text-gray-700 text-2xl">
              Overall Score: 88
            </p>
            <div className="flex my-2 ">
              <div className="flex gap-3 md:gap-3">
                <div className="">
                  <div className=" space-y-2">
                    <div className="w-16 h-16 rounded-full border-2 relative border-black">
                      <p className="text-xl font-bold absolute top-1/3 left-[30%]">
                        87
                      </p>
                    </div>
                    <p className="text-center">Listening</p>
                  </div>
                </div>
                <div className="">
                  <div className=" space-y-2">
                    <div className="w-16 h-16 rounded-full border-2 relative border-yellow-500">
                      <p className="text-xl font-bold absolute top-1/3 left-[30%]">
                        87
                      </p>
                    </div>
                    <p className="text-center">Listening</p>
                  </div>
                </div>
                <div className="">
                  <div className=" space-y-2">
                    <div className="w-16 h-16 rounded-full border-2 relative border-green-500">
                      <p className="text-xl font-bold absolute top-1/3 left-[30%]">
                        87
                      </p>
                    </div>
                    <p className="text-center">Listening</p>
                  </div>
                </div>
                <div className="">
                  <div className=" space-y-2">
                    <div className="w-16 h-16 rounded-full border-2 relative border-pink-700">
                      <p className="text-xl font-bold absolute top-1/3 left-[30%]">
                        87
                      </p>
                    </div>
                    <p className="text-center">Listening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6 items-center bg-slate-50 px-4 md:px-10 py-2 rounded-md justify-between">
            <div className="flex items-center  gap-2">
              <img src={one} alt="" width={50} height={10} /> <span>Name</span>
            </div>
            <NavLink
              to="/results"
              className="bg-gray-100 px-6 py-2 rounded-md text-xs"
            >
              Read Full Story{" "}
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resultsrow;

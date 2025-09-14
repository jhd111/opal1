import React, { useState } from "react";
import img from "../assets/voc.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import CollapsRow from "../Components/Collapsrow";
import { GoCheck } from "react-icons/go";
// import { NavLink } from "react-router-dom";
import { NavLink,useLocation } from "react-router-dom";

import { Products } from "../Services/Products";

const GetAlfaPTPortal = () => {
const { data: Product, isLoading: productsLoading } = Products();

  const location = useLocation();
  const { name ,path} = location.state || {}; // Retrieve the passed object
  

console.log(name)
console.log("path",path)

  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(1);

  localStorage.setItem('count',count)
  localStorage.setItem("price",name?.price)

  

  return (
    <div>
      <div className=" flex flex-col md:flex-row w-[90%] md:w-[70%] mx-auto mt-10 gap-10 ">
        <div className="w-full lg:sticky lg:top-10 lg:h-fit  space-y-10">
          <div className="">
            <p className="text-sm text-gray-500">
              Home / CompTIA /{" "}
              <span className="text-primary">
                {name?.name}
              </span>
            </p>
          </div>
          <img src={name?.image} alt="" className="w-full" />
        </div>
        <div className="w-full">
          <div className=" space-y-8 border-b pb-4">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold dm-sans">
              {name?.name}
            </p>
            <p className="text-2xl font-semibold text-[#39B856] poppins">
            RS {""} {Math.floor(name?.price)}
            </p>
          </div>
          <p className="text-xs  poppins py-4 ">
            {name?.detail}
          </p>
          <div className="flex gap-5 mt-5">
            <div className=" flex items-center gap-5 rounded-3xl px-4 py-3 bg-slate-100">
              <span className="text-xs">
                <FaMinus  onClick={() => setcount((e) => (e > 0 ? e - 1 : e))} />
              </span>
              {count}
              <span className="text-xs">
                <FaPlus onClick={() => setcount((e) => e + 1)} />
              </span>
            </div>
            <div className="bg-primary text-white rounded-3xl w-full text-center py-3">
              <NavLink to="/check-out" state={{ name: name,pathh:path }}
              >Proceed to Checkout</NavLink>
            </div>
          </div>
          <div className="flex items-center text-xs gap-2 mt-6 poppins font-medium">
            <span>
              <GoCheck className="font-bold " />
            </span>
            <label htmlFor="valid-for-pak ">Validity only for Pakistan</label>
          </div>
          <div className=" mt-6 poppins">
            <button className="w-full rounded-3xl poppins text-sm font-medium border-4 py-2 border-[#1018280F]">
              Details
            </button>
          </div>
          <CollapsRow />
        </div>
      </div>
      {!productsLoading  ? (
          <div className="w-[90%] md:w-[70%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Product?.data?.map((categoryData, categoryIndex) => (
                <div
                  key={categoryData.category.id}
                  className="bg-white rounded-lg border border-[#E2E8F0] shadow-[0_0_8px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col"
                >
                  {/* Category Image - using first voucher's image as category representative */}
                  <div className="p-5 pb-0">
                    <img
                      src={categoryData.vouchers[0]?.image_url}
                      alt={categoryData.category.name}
                      className="w-[100%] lg:w-full lg:h-36 2xl:h-60 object-contain md:object-cover rounded"
                    />
                  </div>

                  {/* Category Content */}
                  <div className="p-5 pt-3 flex flex-col flex-grow">
                    {/* Category Title */}
                    <h3 className="text-md inter font-normal 2xl:text-lg mb-2">
                      {categoryData.category.name}
                    </h3>

                    {/* Original Price (strikethrough) */}
                    <p className="text-red-500 text-md font-normal mb-2 line-through">
                      Rs. 70,199
                    </p>

                    {/* Current Price */}
                    <p className="text-[#0F172A] text-md md:text-lg inter font-bold mb-2">
                      Rs. 60,999
                    </p>

                    {/* Buy Now Button */}
                    <NavLink
                      to="/BuyScoredPracticeMockTests"
                      state={{
                        object: categoryData.vouchers,
                        path: "get-payment-detail/",
                      }}
                      className="w-full block text-center text-sm md:text-lg bg-[#ECECEC] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : productsLoading ? (
          <div className="mt-6 text-center text-gray-500">
            Loading related categories...
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-500">
            No other categories available.
          </div>
        )}
    </div>
  );
};

export default GetAlfaPTPortal;

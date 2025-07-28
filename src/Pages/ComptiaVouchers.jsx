import React from "react";
import voc from "../assets/voc.svg";
// import { NavLink } from "react-router-dom";
import { NavLink,useLocation } from "react-router-dom";

import { VoucherDetails } from "../Services/VouchersDetail";

import Loader from "../Components/Loader"

const ComptiaVouchers = () => {

   const location = useLocation();
  const { object,path } = location.state || {}; // Retrieve the passed object
console.log("object",object)
console.log("path",path)
  const category_id = object?.id ; // Fallback to 1 if `object.id` is undefined

   const { data: Vouchers, isLoading, error } = VoucherDetails(category_id);

   console.log(Vouchers)

  

  return (
    <>
    {
      isLoading ?
      <Loader/>
    :
    <div>
      <div className="w-[80%] mx-auto">
        <div className="mt-10">
          <div className="text-center inter">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold ">{object?.name}</p>

            <p className="text-xs lg:text-lg mt-10 text-[#55595F]">
              Welcome to our CompTIA Exam Vouchers store, your one-stop solution
              for discounted and reliable voucher codes for all CompTIA
              certification exams.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <p>Showing {Vouchers?.data.length} results</p>
          <select name="" id="">
            <option value="">Sort by</option>
            <option value="">Price</option>
            <option value="">Name</option>
            <option value="">Date</option>
          </select>
        </div>
        <div className="mx-auto  mt-10 w-[90%]">
          <div className="grid md:grid-cols-3  gap-10   ">
            {Vouchers?.data.map((val, i) => {
              return (
                <div index={i}
                  className=" flex  dm-sans flex-col justify-between p-4 shadow"
                >
                  <img src={val?.image_url} alt="" />

                  <p className="text-center  text-sm   my-2  px-4 font-semibold">
                    {val?.name}
                  </p>
                  <p className="text-red-500 text-center  text-sm  inter my-2 px-4 font-semibold">
                    RS    {" "}{val?.price}
                  </p>
                  <NavLink
                    // to="/buy-voucher"
                      to={{
                    pathname: "/buy-voucher",
                  }}
                  state={{ object: val,pathh:path }} // Pass the full object here
                    className="bg-[#F1F1F3] text-center py-2 px-10 rounded-md font-semibold"
                  >
                    Order Now
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
}
    </>
  );
};

export default ComptiaVouchers;

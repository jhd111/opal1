import React from "react";
import success from "../assets/images/success.png";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Successfullpayment = ({ Message, orderid, shortmsg }) => {
  return (
    <div>
      <div className="w-[80%] mx-auto ">
        {/* <div className=" py-10">
          <p className="text-2xl font-semibold">Check Out</p>
          <div className="flex items-center text-gray-700 text-xs gap-1">
            <p>Vouchers</p> <IoIosArrowForward /> <p>Checkout</p>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        <img src={success} alt="" />
        <div className=" mt-4 text-center">
          <p className="capitalize font-semibold">{Message}</p>
          <p>{shortmsg}</p>
          <p>{orderid}</p>
        </div>
        <div className="">
          <br />
          <NavLink
            to="/"
            className="bg-primary rounded-md px-10 py-2 text-white font-semibold"
          >
            Back To Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Successfullpayment;

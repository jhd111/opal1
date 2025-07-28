import React from "react";
import success from "../assets/images/success.png";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const PayFastSuccessful = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <img src={success} alt="Success" />
        <div className=" mt-4 text-center">
          <p className="capitalize font-semibold">You'll receive an email shortly.</p>
          <p>Your Order ID: {orderId}</p>
        </div>
        <br />
        <NavLink
          to="/"
          className="bg-primary rounded-md px-10 py-2 text-white font-semibold"
        >
          Back To Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default PayFastSuccessful;

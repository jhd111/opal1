import React, { useState } from "react";
import img from "../assets/logo-2.png";
import { useLocation } from "react-router-dom";

const CheckoutcardDetails = ({name}) => {
console.log("name",name)
  const location = useLocation();
  const path = location.pathname;

  const quantity=localStorage.getItem("count")
  const ItemPrice = localStorage.getItem("price")

  const ptevoucher=localStorage.getItem('price1')

  const selectedPrice = path.includes("/checkout-pte-user") ? ptevoucher : ItemPrice;
  return (
    <>
      <div className="rounded-2xl w-[60%] bg-[#408BFC0D] p-10">
        <div className="">
          <img src={img} alt="" width={100} />
        </div>
        <div className="  my-4 text-2xl font-semibold">
          {name}
        </div>
        <div className="">
          <p className="font-medium mb-4">Order Summary</p>
          <div className="bg-white text-gray-400 rounded-md p-6">
            <div className="pb-4 border-b border-gray-300">Payment Details</div>
            <div className="flex mb-4 my-4 justify-between">
              <p>Quantity </p> <p>{quantity || 1}</p>
            </div>
            <div className="flex justify-between">
              <p>Price</p>
              <p>RS {Math.floor(selectedPrice)}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between  bg-white p-6 rounded-md">
            <p className="font-semibold text-gray-800">Total</p>
            <p className="text-lime-400 font-semibold">RS {Math.floor(quantity || 1) * selectedPrice}
</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutcardDetails;

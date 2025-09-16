import React, { useState } from "react";
import img from "../assets/logo-2.png";
import { useLocation } from "react-router-dom";

const CheckoutcardDetails = ({name,type}) => {
console.log("name",name)
  const location = useLocation();
  const path = location.pathname;

  const quantity=localStorage.getItem("count")
  const displayQuantity = path.includes("/checkout-pte-user") ? 1 : (quantity || 1);
  // const ItemPrice = localStorage.getItem("price")
  const ItemPrice = localStorage.getItem("price_display")
  const ItemPricePkr = localStorage.getItem("price_pkr")


  const ptevoucher=localStorage.getItem('price1')
  const priceCurrency = localStorage.getItem("price_currency") || "Rs.";
  const selectedPrice = path.includes("/checkout-pte-user")   ? `Rs ${ptevoucher}`
  : `${priceCurrency} ${ItemPrice}`

  // Extract symbol and number from selectedPrice string like "$ 236.51"
const symbol = selectedPrice.split(" ")[0]; // → "$" or "Rs."
const numberPart = parseFloat(selectedPrice.split(" ")[1]) || 0; // → 236.51 or 133000

const total = Math.floor(displayQuantity || 1) * numberPart;
  return (
    <>
      <div className="rounded-2xl w-[60%] bg-[#408BFC0D] p-10">
        <div className="">
          <img src={img} alt="" width={100} />
        </div>
        <div className="  my-4 text-2xl font-semibold">
          {name}
        </div>
        {
         name?. type &&
          <p className="font-medium mb-4">{type}</p> 

        }

        <div className="">
          <p className="font-medium mb-4">Order Summary</p>
          <div className="bg-white text-gray-400 rounded-md p-6">
            <div className="pb-4 border-b border-gray-300">Payment Details</div>
            <div className="flex mb-4 my-4 justify-between">
            <p>Quantity </p> 
<p>{path.includes("/checkout-pte-user") ? 1 : (quantity || 1)}</p>
            </div>
            <div className="flex justify-between">
              <p>Price</p>
              <p>{selectedPrice}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between  bg-white p-6 rounded-md">
            <p className="font-semibold text-gray-800">Total</p>
            <p className="text-lime-400 font-semibold">{symbol} {total}
</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutcardDetails;

import React, { useState } from "react";
import img from "../assets/images/buypte/ptevoucher.png";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const CheckoutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const location = useLocation();
  

  const deal = location.state?.object1;
  console.log(deal)
  localStorage.setItem("price1",deal.price)

  const faqs = [
    {
      question: "VALIDITY",
      answer:
        "PTE Voucher’s Validity only for Pakistan.Pearson Scored Practice Mock Teat is valid Globally.",
    },
    {
      question: "DELIVERY",
      answer: "Typically delivers within 3-4 hours via email.",
    },
    {
      question: "HOW TO USE",
      answer: "You Will Get an email with details",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[80%] mx-auto poppins py-16">
      <p className="text-xs text-gray-500 mb-10">
        Home / Buy PTE Voucher/ Checkoout
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <img src={deal?.score_practice?.image_url} alt="" />
        </div>
        <div className="w-full">
          <div className="space-y-4  ">
            <p className="text-2xl font-semibold ">
             {deal.name}
            </p>
            <p className="text-2xl  font-semibold text-green-500">
            RS {deal.price}
            </p>
            <div className="">
              <NavLink
                to="/checkout-pte-user"
                className="bg-primary rounded-full block text-center text-white w-full py-3 p-2"
              >
                Proceed to Checkout
              </NavLink>
              <div className=" my-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheck />
                    <span>PTE Voucher’s Validity only for Pakistan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck />
                    Scored Practice Mock Test is Valid Globally.
                  </li>
                </ul>
              </div>
              <div className="">
                <button className=" font-semibold border-4  rounded-full   w-full  p-2">
                  Details
                </button>
              </div>
              <div className="my-4">
                <div className=" relative  poppins    mx-auto ">
                  <div className="space-y-4 w-[90%]  mx-auto">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className=" border-b  border-[#01B0C7]/10  py-4"
                      >
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleFAQ(index)}
                        >
                          <h2 className="font-medium ">{faq.question}</h2>
                          {openIndex === index ? "-" : "+"}
                        </div>
                        {openIndex === index && (
                          <p className="mt-3  text-gray-500 ">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="radient-effect  bottom-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

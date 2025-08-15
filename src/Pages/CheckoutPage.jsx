import React, { useState } from "react";
import img from "../assets/images/buypte/ptevoucher.png";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  const location = useLocation();
  const deal = location.state?.object1;
  const pathh = location.state?.path;

  console.log(deal);
  console.log("pathh", pathh);
  localStorage.setItem("price1", deal.price);

  const faqs = [
    {
      question: "VALIDITY",
      answer:
        "PTE Voucher’s Validity only for Pakistan. Pearson Scored Practice Mock Test is valid Globally.",
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

  // Determine if the button should be disabled
  const isButtonDisabled = deal?.name.includes("SPMT") && !selectedType;

  return (
    <div className="w-[80%] mx-auto poppins py-16">
      <p className="text-xs text-gray-500 mb-10">
        Home / Buy PTE Voucher / Checkout
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <img src={deal?.main_image} alt="" />
        </div>
        <div className="w-full">
          <div className="space-y-4">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold">
              {deal.name}
            </p>
            <p className="text-2xl font-semibold text-green-500">
              RS {Math.floor(deal.price)}
            </p>
            {deal?.name.includes("SPMT") ? (
              <div className="p-4 w-full max-w-md">
                <label htmlFor="mockType" className="block mb-2 text-sm font-medium text-gray-700">
                  Select Mock Test Type
                </label>
                <select
                  id="mockType"
                  value={selectedType}
                  onChange={handleChange}
                  className="block w-2/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Select Type --</option>
                  <option value="Score Practice Mock Test Type A">Score Practice Mock Test Type A</option>
                  <option value="Score Practice Mock Test Type B">Score Practice Mock Test Type B</option>
                  <option value="Score Practice Mock Test Type C">Score Practice Mock Test Type C</option>
                  <option value="Score Practice Mock Test Type D">Score Practice Mock Test Type D</option>
                  <option value="Score Practice Mock Test Type E">Score Practice Mock Test Type E</option>
                </select>
              </div>
            ) : null}

            <div className="">
              <NavLink
                to="/checkout-pte-user"
                state={{ name: deal, SelectedTYPE: selectedType, pathh: pathh }}
                className={`bg-primary rounded-full block text-center text-white w-full py-3 p-2 ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                style={isButtonDisabled ? { pointerEvents: "none" } : {}}
              >
                Proceed to Checkout
              </NavLink>
              <div className="my-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheck />
                    <span>PTE Voucher’s Validity only for Pakistan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck />
                    <span>Scored Practice Mock Test is Valid Globally.</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <button className="font-semibold border-4 rounded-full w-full p-2">
                  Details
                </button>
              </div>
              <div className="my-4">
                <div className="relative poppins mx-auto">
                  <div className="space-y-4 w-[90%] mx-auto">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-[#01B0C7]/10 py-4"
                      >
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleFAQ(index)}
                        >
                          <h2 className="font-medium">{faq.question}</h2>
                          {openIndex === index ? "-" : "+"}
                        </div>
                        {openIndex === index && (
                          <p className="mt-3 text-gray-500">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="radient-effect bottom-0"></div>
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
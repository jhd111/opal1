import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import valid from "../assets/images/buypte/valid.png";
import Loader from "../Components/Loader";

import { ApeUniVoucher } from "../Services/Ape_uni_practice_voucher";

import { Alfa_PTE_Portal_Access } from "../Services/Get_Alfa_PTE_Portal_Access";

import { Pearson_Pte_voucher } from "../Services/Pearson_pte_voucher";

import { Score_Practice_Mock_Test } from "../Services/Score_Practice_Mock_Test";
import { Products } from "../Services/Products";

import { Our_Deals } from "../Services/Our_Deals";
import image from "../assets/images/Image.png";
import Hero from "../Components/Hero1";
import BuyVoucher from "./BuyVoucher";
import BuyVouchers from "./BuyVouchers";

const ButPtevoucher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: Product, isLoading: productsLoading } = Products();
  console.log("Products", Product);

  // const { data: ApeVoucher, isLoading, isError } = ApeUniVoucher();

  const {
    data: Alfa_PTE_Portal,
    isLoading: Portal_loading,
    isError: portal_error,
  } = Alfa_PTE_Portal_Access();

  // const {
  //   data: Buy_Peasrson_Pte_Voucher,
  //   isLoading: Buy_Peasrson_Pte_Voucher_loading,
  //   isError: Buy_Peasrson_Pte_Voucher_error,
  // } = Pearson_Pte_voucher();

  const {
    data: Pearson_Scored_Practice_Mock,
    isLoading: Pearson_Scored_Practice_Mock_loading,
    isError: Pearson_Scored_Practice_Mock_error,
  } = Score_Practice_Mock_Test();
  console.log(" Pearson_Scored_Practice_Mock", Pearson_Scored_Practice_Mock);
  const {
    data: Deals,
    isLoading: Deals_loading,
    isError: Deals_error,
  } = Our_Deals();
  const filteredDeals = Deals?.slice(3);

  console.log("filteredDeals", filteredDeals);

  // const fullRows = Math.floor(mockTests.length / 3);
  // const remainder = Pearson_Scored_Practice_Mock?.data?.length % 3;
  // const lastRowItems =
  //   remainder === 0
  //     ? []
  //     : Pearson_Scored_Practice_Mock?.data?.slice(-remainder);
  // const otherItems =
  //   remainder === 0
  //     ? Pearson_Scored_Practice_Mock?.data
  //     : Pearson_Scored_Practice_Mock?.data.slice(0, -remainder);

  function splitFeatures(text = "") {
    const result = [];
    let current = "";
    let insideParentheses = false;

    for (let char of text) {
      if (char === "(") insideParentheses = true;
      if (char === ")") insideParentheses = false;

      // If we hit a comma or newline AND we're not inside parentheses, split
      if ((char === "," || char === "\n") && !insideParentheses) {
        if (current.trim()) result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }

    if (current.trim()) result.push(current.trim());
    return result;
  }

  return (
    <>
      {
        // isLoading &&
        Portal_loading &&
        // Buy_Peasrson_Pte_Voucher_loading &&
        Pearson_Scored_Practice_Mock_loading &&
        Deals_loading ? (
          <Loader />
        ) : (
          <>
            <Hero />
            <div className="w-[85%] poppins   mx-auto py-14 mt-10">
              <p className="text-center mb-2 text-2xl lg:text-4xl font-semibold">
                Choose from our Deals
              </p>
              <p className="text-xs text-gray-500 text-center">
                You can choose a plan which suits you best.
              </p>

              {/* <div className="w-[80%] poppins   mx-auto py-14 mt-10">    */}
              <div className="mx-auto my-10">
                {/* Deals Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Deals?.slice(0, 3).map((deal, index) => (
                    <div
                      key={deal.id}
                      className={`flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:p-10 bg-${
                        index % 2 === 0 ? " white shadow" : "[#EFF2FF]"
                      } min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] max-h-[600px] sm:max-h-[650px] lg:max-h-[700px] overflow-y-auto transition-all`}
                    >
                      {/* Header Section */}
                      <div className="mb-4">
                        <div className="min-h-[5rem] flex items-center">
                          <p className="text-xl font-semibold md:text-3xl md:font-bold leading-tight">
                            {deal.name}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Order Now & Save Big
                        </p>
                      </div>

                      {/* Price Section */}
                      <div className="mb-6">
                        <div className="flex items-center gap-x-2">
                          <p className="text-2xl font-light">
                            Rs. {Math.floor(deal.price)}/-
                          </p>
                          <p className="text-sm text-gray-600 font-medium rounded-2xl px-2 py-1 bg-[#D5DFFF]">
                            Save Rs. {Math.floor(deal.save_rs)}
                          </p>
                        </div>
                      </div>

                      {/* Button Section */}
                      <div className="mb-6">
                        <NavLink
                          to={`/checkout-PTE/`}
                          state={{ object1: deal, path: "deals-payment/" }}
                          className="bg-[#3F51B5] hover:bg-[#2f3aa0] w-full text-center text-white text-sm font-semibold px-6 py-3 rounded-full inline-block transition-all"
                        >
                          Order Now
                        </NavLink>
                      </div>

                      <hr className="mb-6 border-[#D1D1F7]" />

                      {/* Features Section */}
                      <div className="flex-grow max-h-[200px] overflow-y-auto">
                        <p className="font-semibold text-black mb-4">
                          Key Features
                        </p>
                        <ul className="text-sm text-gray-700 space-y-2 mb-6">
                          {splitFeatures(deal.key_features).map(
                            (feature, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-1"
                              >
                                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                <span>{feature.trim()}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Logos Section */}
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {[
                          deal.image_1,
                          deal.image_2,
                          deal.image_3,
                          deal.image_4,
                        ]
                          .filter(Boolean)
                          .map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`deal-image-${index}`}
                              className="w-[60px] h-[60px] object-fill rounded"
                            />
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Filter Cards Section */}
                {/* <div className="mt-10"> */}
                <div className="mt-10">
                  <div
                    className={`${
                      filteredDeals?.length === 1
                        ? "grid grid-cols-1 justify-items-center"
                        : filteredDeals?.length === 2
                        ? "flex justify-center gap-6 flex-wrap"
                        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    }`}
                  >
                    {filteredDeals?.map((deal) => (
                      <div
                        key={deal.id}
                        className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:p-10 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] max-h-[600px] sm:max-h-[650px] lg:max-h-[700px] overflow-y-auto transition-all bg-white shadow`}
                      >
                        {/* Top content */}
                        <div>
                          <p className="text-xl font-semibold md:text-3xl lg:font-bold">
                            {deal.name}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Order Now & Save Big
                          </p>
                          <div className="flex items-center gap-x-2 mb-2">
                            <p className="my-4 text-2xl font-light">
                              Rs. {Math.floor(deal.price)} /-
                            </p>
                            <p className="text-sm text-gray-600 font-medium rounded-2xl px-2 py-1 bg-[#D5DFFF]">
                              Save Rs. {Math.floor(deal.save_rs)}
                            </p>
                          </div>
                          <NavLink
                            to={`/checkout-PTE/`}
                            state={{ object1: deal, path: "deals-payment/" }}
                            className="bg-[#3F51B5] hover:bg-[#2f3aa0] text-white text-sm font-semibold px-6 py-3 rounded-full inline-block transition-all"
                          >
                            Order Now
                          </NavLink>
                          <hr className="my-6 border-[#D1D1F7]" />
                          <p className="font-semibold text-black mb-2">
                            Key Features
                          </p>
                          <div className="flex-grow max-h-[200px] overflow-y-auto">
                            <ul className="text-sm text-gray-700 space-y-2">
                              {splitFeatures(deal.key_features).map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-1"
                                  >
                                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>{feature.trim()}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Logos at bottom */}
                        <div className="flex gap-2 mt-6 flex-wrap">
                          {[
                            deal.image_1,
                            deal.image_2,
                            deal.image_3,
                            deal.image_4,
                          ]
                            .filter(Boolean) // filter out null/undefined
                            .map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={`deal-image-${index}`}
                                className="w-[40px] h-[40px] object-fill rounded"
                              />
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            {/* </div> */}

      {/* ------------------------practice mock tests------------------ */}
            <div
              id="practicemocktests"
              className="bg-gradient-to-b from-[rgba(54,81,191,0.07)] to-[rgba(255,255,255,0)]  p-8  "
            >
              {/* Header */}

              {Product?.data?.[1] && (
                <div className="max-w-6xl mx-auto mb-8">
                  <h1 className="text-xl font-semibold lg:text-3xl be-vietnam lg:font-bold text-center mb-2">
                    {Product.data[1].category.name}
                  </h1>
                  {/* <p className="text-center text-gray-600">
      We offer Pearson Scored Practice Mock Tests A, B, C, D, E to
      take your exam preparation to a next level.
    </p> */}
                </div>
              )}

              {/* Cards Grid */}
              <div className="max-w-6xl mx-auto">
                {/* Grid for full rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Product?.data[1]?.vouchers?.map((test) => (
                    <div
                      key={test.id}
                      className="bg-white  rounded-lg shadow-md overflow-hidden p-5"
                    >
                      <div className="flex justify-center">
                        <img
                          src={test?.image_url}
                          alt={test?.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="mt-2">
                        <h3 className="text-lg be-vietnam font-medium">
                          {test?.name}
                        </h3>
                        <p className="text-md text-gray-300">
                          {test?.description}
                        </p>
                        <p className="text-md font-medium inter text-black">
                          Test Type :{test?.type}
                        </p>
                        <p className="text-green-500">
                          RS {Math.floor(test?.price)}
                        </p>
                      </div>
                      <div className="px-4 py-2">
                        <NavLink
                          to="/BuyScoredPracticeMockTests"
                          state={{ object: test, path: "get-payment-detail/" }}
                          className="w-full block text-center bg-[#F1F1F3] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Centered last row */}
                {/* {lastRowItems?.length > 0 && (
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  {lastRowItems?.map((test) => (
                    <div
                      key={test?.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden p-5 w-full sm:w-[48%] lg:w-[32%]"
                    >
                      <img
                        src={test?.image}
                        alt={test?.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="mt-2">
                        <h3 className="text-lg be-vietnam font-medium">
                          {test?.name}
                        </h3>
                        <p className="text-sm">{test?.description}</p>
                        <p className="text-md text-black">
                          Test Type :{test?.test_type}
                        </p>
                        <p className="text-green-500">
                          RS {Math.floor(test?.price)}
                        </p>
                      </div>
                      <div className="px-4 py-2">
                        <NavLink
                          to="/BuyScoredPracticeMockTests"
                          state={{ object: test, path: "get-payment-detail/" }}
                          className="w-full block text-center bg-[#F1F1F3] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
              </div>
            </div>

            {/*------------------------ Buy_Peasrson_Pte_Voucher -----------------------*/}
            <div className="w-[85%] poppins   mx-auto py-14">
              <div className="my-8">
                <div className="flex gap-10 flex-col md:flex-row md:justify-center">
                  <div className="xl:w-[80%] 2xl:w-[70%]">
                    {Product?.data[0]?.vouchers?.map((voucher) => (
                      <div
                        key={voucher.id}
                        className="flex gap-10 flex-col md:flex-row items-center md:justify-center"
                      >
                        <div className="w-full mt-6 space-y-6">
                          <p className="text-xl font-semibold lg:text-4xl lg:font-bold">
                            <span className="text-primary text-xl font-semibold plus-jakarta lg:text-3xl lg:font-bold">
                              {voucher.name}
                            </span>
                          </p>
                          <p className="text-xs poppins">
                            {voucher.description ||
                              "We offer Alfa PTE Portal Access for 30, 60 and 90 days. Choose a plan that suits you best."}
                          </p>
                          <p className="text-2xl font-semibold">
                            RS {Math.floor(voucher.price)}/-
                          </p>
                          <div>
                            <br />
                            <NavLink
                              to="/BuyPearsonptevoucherfromus"
                              state={{
                                name: voucher,
                                path: "get-payment-detail/",
                              }}
                              className="block bg-[#3651BF] text-center text-sm font-medium text-white w-[30%] p-2 px-4 rounded-3xl"
                            >
                              Buy Now
                            </NavLink>
                          </div>
                        </div>
                        <div className="w-2/3">
                          <img
                            src={voucher.image_url}
                            alt={voucher.name}
                            width={400}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ------------------Get Alfa PTE Portal Access------------------- */}
                <div className="my-10">
                  <p className="text-xl font-semibold lg:text-3xl lg:font-bold">
                    Get Alfa PTE Portal Access
                  </p>
                  <p className="text-xs text-gray-500 mb-10 mt-4">
                    We offer Alfa PTE Portal Access for 30, 60 and 90 days.
                    Choose a plan that suits you best.
                  </p>
                  <div className="my-4">
                    <div className="grid w-[100%] mx-auto gap-8 md:grid-cols-3">
                      {Alfa_PTE_Portal?.data?.map((voucher) => (
                        <div
                          key={voucher.id}
                          className="relative border p-4 flex flex-col"
                        >
                          <div className="absolute -left-6 top-5 w-32 transform -rotate-45 bg-gradient-to-r from-[#E49F3E] to-[#E49F3E] shadow-md z-10">
                            <p className="text-center text-xs font-bold text-black py-1">
                              {`VALIDITY: ${voucher.validity} DAYS`}
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <img
                              src={voucher.image}
                              alt={voucher.name}
                              className=" object-fill h-[200px] mb-4"
                            />
                          </div>
                          <div className="space-y-2 mb-4">
                            <p className="text-xs text-gray-500">
                              {voucher.title || "wert"}{" "}
                            </p>
                            <p className="text-primary font-semibold">
                              {voucher.name}
                            </p>
                            <p className="text-xs">{voucher.description}</p>
                          </div>

                          {/* Push button to bottom */}
                          <div className="mt-auto">
                            {/* <a
                              href={whatsappLink}
                              className="block bg-gray-100 text-center text-sm font-medium text-black w-full p-2 rounded"
                            >
                              Buy Now
                            </a> */}
                            <NavLink
                              to="/GetAlfaPTPortal"
                              state={{
                                name: voucher,
                                path: "aplha-pte-payment/",
                              }}
                              className="block bg-gray-100 text-center text-sm font-medium text-black w-full p-2 rounded"
                            >
                              Buy Now
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* ------------------------Get APE Uni Practice Vouchers.-------------*/}
                {Product?.data?.[3] && (
                  <div className="my-10 w-[100%]">
                    {/* Category Name */}
                    <p className="text-xl font-semibold lg:text-3xl lg:font-bold mb-2 ">
                      Get APE Uni Practice Vouchers
                    </p>
                    <p className="mb-8 be-vietnam text-gray-400 text-sm">
                      We offer APE Uni Practice. Choose a plan that suits you
                      best.
                    </p>
                    <div className="my-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8 w-full mx-auto">
                        {Product.data[3].vouchers.map((voucher) => (
                          <div
                            key={voucher.id}
                            className="relative border p-4 flex flex-col rounded-md h-[420px]"
                          >
                            {/* Ribbon */}
                            <div className="absolute -left-6 top-5 w-32 transform -rotate-45 bg-gradient-to-r from-[#E49F3E] to-[#E49F3E] shadow-md z-10">
                              <p className="text-center text-xs font-bold text-black py-1">
                                {voucher.validity
                                  ? `VALIDITY: ${voucher.validity} DAYS`
                                  : "NO VALIDITY"}
                              </p>
                            </div>

                            {/* Image */}
                            <div className="flex  justify-center">
                              <img
                                src={voucher.image_url}
                                alt={voucher.name}
                                className="w-[300px] object-fill h-[200px]"
                              />
                            </div>

                            {/* Details */}
                            <div className="flex flex-col flex-grow mt-5 justify-start">
                              <div className="text-[12px] lg:text-xs text-gray-500">
                                {Product.data[0].category.name}
                              </div>
                              <p className="text-primary text-[12px] lg:text-sm font-normal lg:font-semibold mt-2">
                                {voucher.name}
                              </p>
                              <p className="text-xs mt-2 line-clamp-2">
                                {voucher.description}
                              </p>

                              {/* Buy Now button */}
                              <NavLink
                                to="/GetAPEUniPractice"
                                state={{
                                  name: voucher,
                                  path: "get-payment-detail/",
                                }}
                                className="bg-gray-100 text-center mt-auto p-2 font-medium text-sm"
                              >
                                Buy Now
                              </NavLink>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <BuyVouchers />
          </>
        )
      }
    </>
  );
};

export default ButPtevoucher;

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
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: Product, isLoading: productsLoading } = Products();
  console.log("Products", Product);
  const getCategoriesToDisplay = () => {
    if (!Product?.data) return [];
    
    if (selectedCategory === "all") {
      return Product.data;
    }
    
    return Product.data.filter(categoryData => 
      categoryData.category.id === selectedCategory
    );
  };

  const categoriesToDisplay = getCategoriesToDisplay();

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
            <div className="w-[85%] poppins mx-auto py-14 mt-10">
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
                      } min-h-[430px] sm:min-h-[480px] lg:min-h-[530px] xl:min-h-[580px] max-h-[630px] sm:max-h-[680px] lg:max-h-[730px] overflow-y-auto transition-all`}
                    >
                      {/* Header Section */}
                      <div className="mb-3">
                        <div className="min-h-[7rem] flex items-center">
                          <p className="text-2xl font-medium md:text-3xl md:font-bold leading-tight">
                            {deal.name}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Order Now & Save Big
                        </p>
                      </div>

                      {/* Price Section */}
                      <div className="mb-4">
                        <div className="flex items-center gap-x-2">
                          <p className="text-xl font-light">
                            Rs. {Math.floor(deal.price)}/-
                          </p>
                          <p className="text-xs text-gray-600 font-medium rounded-2xl px-2 py-1 bg-[#D5DFFF]">
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
                        className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:p-10 min-h-[430px] sm:min-h-[480px] lg:min-h-[530px] xl:min-h-[580px] max-h-[630px] sm:max-h-[680px] lg:max-h-[730px] overflow-y-auto transition-all bg-white shadow`}
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
    
      {/* ------------------------practice mock tests------------------ */}
      <div
        id="practicemocktests"
        className="bg-gradient-to-b from-[rgba(54,81,191,0.07)] to-[rgba(255,255,255,0)] px-8"
      >
        {/* Category Filter Buttons */}
        <div className="w-[85%] mx-auto mb-8 pt-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {/* All Products Button */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-[#3651BF] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              All Products
            </button>
            
            {/* Alfa PTE Portal Access Button */}
            <button
              onClick={() => setSelectedCategory("alfa_pte")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === "alfa_pte"
                  ? "bg-[#3651BF] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              Alfa PTE Portal Access
            </button>

            {/* Buy It Exam Button */}
            <button
              onClick={() => setSelectedCategory("buy_it_exam")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === "buy_it_exam"
                  ? "bg-[#3651BF] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              Buy It Exam
            </button>
            
            {/* Individual Category Buttons */}
            {Product?.data?.map((categoryData) => (
              <button
                key={categoryData.category.id}
                onClick={() => setSelectedCategory(categoryData.category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === categoryData.category.id
                    ? "bg-[#3651BF] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {categoryData.category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Display Categories and Vouchers - ONLY show when not alfa_pte or buy_it_exam */}
        {selectedCategory !== "alfa_pte" && selectedCategory !== "buy_it_exam" && categoriesToDisplay.map((categoryData, categoryIndex) => (
          <div key={categoryData.category.id} className="mb-12">
            {/* Category Header - Only show if "All Products" is selected */}
            {selectedCategory === "all" && (
              <div className="w-[85%] mx-auto mb-8">
                <h1 className="text-xl font-semibold lg:text-3xl be-vietnam lg:font-bold text-start mb-2">
                  {categoryData.category.name}
                </h1>
                <p className="text-[#59595A] text-sm be-vietnam">{categoryData?.category?.description}</p>
              </div>
            )}

            {/* Vouchers Grid for this category */}
            <div className="w-[85%] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryData.vouchers.map((voucher) => (
                  <div
                    key={voucher.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="p-5 pb-0">
                      <img
                        src={voucher.image_url}
                        alt={voucher.name}
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
                    
                    {/* Content Container - Grows to fill space */}
                    <div className="p-5 pt-3 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-lg be-vietnam font-medium mb-2">
                        {voucher.name}
                      </h3>
                      
                      {/* Description - Grows to fill available space */}
                      <p className="text-md text-gray-300 mb-3 flex-grow">
                        {voucher.description}
                      </p>
                      
                      {/* Details Container - Only takes needed space */}
                      <div className="mb-3">
                        {voucher.type && (
                          <p className="text-md font-medium inter text-black mb-1">
                            Test Type: {voucher.type}
                          </p>
                        )}
                        {voucher.validity && (
                          <p className="text-md font-medium inter text-[#3651BF] mb-1">
                            Validity: {voucher.validity} days
                          </p>
                        )}
                      </div>
                      
                      {/* Price */}
                      <p className="text-green-500 text-lg font-semibold mb-4">
                        RS {Math.floor(voucher.price)}
                      </p>
                      
                      {/* Button - Always at bottom */}
                      <NavLink
                        to="/BuyScoredPracticeMockTests"
                        state={{ object: voucher, path: "get-payment-detail/" }}
                        className="w-full block text-center bg-[#F1F1F3] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Show Alfa PTE Portal Access when "alfa_pte" is selected */}
        {selectedCategory === "alfa_pte" && (
          <div className="mb-12">
            {/* Category Header */}
            <div className="w-[85%] mx-auto mb-8">
              <h1 className="text-xl font-semibold lg:text-3xl be-vietnam lg:font-bold text-start mb-2">
                Alfa PTE Portal Access
              </h1>
            </div>
            
            <div className="w-[85%] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Alfa_PTE_Portal?.data?.map((voucher) => (
                  <div
                    key={voucher.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="p-5 pb-0">
                      <img
                        src={voucher.image}
                        alt={voucher.name}
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
                    
                    {/* Content Container - Grows to fill space */}
                    <div className="p-5 pt-3 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-lg be-vietnam font-medium mb-2">
                        {voucher.name}
                      </h3>
                      
                      {/* Description - Grows to fill available space */}
                      <p className="text-md text-gray-300 mb-3 flex-grow">
                        {voucher.description}
                      </p>
                      
                      {/* Details Container - Only takes needed space */}
                      <div className="mb-3">
                        {voucher.validity && (
                          <p className="text-md font-medium inter text-[#3651BF] mb-1">
                            Validity: {voucher.validity} days
                          </p>
                        )}
                      </div>
                      
                      {/* Price */}
                      <p className="text-green-500 text-lg font-semibold mb-4">
                        RS {Math.floor(voucher.price || 0)}
                      </p>
                      
                      {/* Button - Always at bottom */}
                      <NavLink
                        to="/GetAlfaPTPortal"
                        state={{
                          name: voucher,
                          path: "aplha-pte-payment/",
                        }}
                        className="w-full block text-center bg-[#F1F1F3] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
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

        {/* Show Buy It Exam when "buy_it_exam" is selected */}
        {selectedCategory === "buy_it_exam" && (
          <BuyVouchers />
        )}

        {/* Show message if no vouchers found for regular categories */}
        {selectedCategory !== "alfa_pte" && selectedCategory !== "buy_it_exam" && categoriesToDisplay.length === 0 && (
          <div className="w-[85%] mx-auto text-center py-12">
            <p className="text-gray-500 text-lg">No vouchers found for the selected category.</p>
          </div>
        )}
      </div>

            {/*------------------------ Get Alfa PTE Portal Access -----------------------*/}
            {/* Only show the default "GGet Alfa PTE Portal Access" section when selectedCategory is "all" */}
            {selectedCategory === "all" && (
              <div className="w-[85%] mx-auto py-14">
                <p className="text-xl font-semibold lg:text-3xl lg:font-bold">
                  Get Alfa PTE Portal Access
                </p>
                <p className="text-xs text-gray-500 mb-10 mt-4">
                  We offer Alfa PTE Portal Access for 30, 60 and 90 days.
                  Choose a plan that suits you best.
                </p>
                <div className="my-4">
                 {/* HIGHLIGHTED CHANGES START HERE */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Alfa_PTE_Portal?.data?.map((voucher) => (
                      <div
                        key={voucher.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                      >
                        {/* Image Container */}
                        <div className="p-5 pb-0">
                          <img
                            src={voucher.image}
                            alt={voucher.name}
                            className="w-full h-48 object-cover rounded"
                          />
                        </div>
                        
                        {/* Content Container - Grows to fill space */}
                        <div className="p-5 pt-3 flex flex-col flex-grow">
                          {/* Title */}
                          <h3 className="text-lg be-vietnam font-medium mb-2">
                            {voucher.name}
                          </h3>
                          
                          {/* Description - Grows to fill available space */}
                          <p className="text-md text-gray-300 mb-3 flex-grow">
                            {voucher.description}
                          </p>
                          
                          {/* Details Container - Only takes needed space */}
                          <div className="mb-3">
                            {voucher.validity && (
                              <p className="text-md font-medium inter text-[#3651BF] mb-1">
                                Validity: {voucher.validity} days
                              </p>
                            )}
                          </div>
                          
                          {/* Price */}
                          <p className="text-green-500 text-lg font-semibold mb-4">
                            RS {Math.floor(voucher.price || 0)}
                          </p>
                          
                          {/* Button - Always at bottom */}
                          <NavLink
                            to="/GetAlfaPTPortal"
                            state={{
                              name: voucher,
                              path: "aplha-pte-payment/",
                            }}
                            className="w-full block text-center bg-[#F1F1F3] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* HIGHLIGHTED CHANGES END HERE */}

                </div>
              </div>
            )}
            
            {/* Only show BuyVouchers when selectedCategory is "all" */}
            {selectedCategory === "all" && <BuyVouchers />}
          </>
        )
      }
    </>
  );
};

export default ButPtevoucher;
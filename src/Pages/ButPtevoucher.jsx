import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
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
import Hero from "../Components/BuyPteVoucherHero";
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
  const Deals1 = [
    {
      id: 1,
      name: "PTE + ApeUni",
      price: 68500,
      save_rs: 15300,
      key_features: [
        "PTE Voucher (Eligible for Academic, UKVI, Core)",
        
      ],
      image_1: image,
      image_2: image,
      image_3:image,
      image_4: image,
      main_image:image
    },
    {
      id: 2,
      name: "PTE + ApeUni Pro",
      price: 79900,
      save_rs: 18500,
      key_features: [
        "PTE Voucher (Academic, UKVI, Core)",
       
      ],
      image_1: image,
      image_2: image,
      image_3:image,
      image_4: image,
      main_image:image
    },
    {
      id: 3,
      name: "PTE + ApeUni Premium",
      price: 95000,
      save_rs: 25000,
      key_features: [
        "PTE Voucher (All types)",
        "Three Pearson Scored Mock Tests",
       
      ],
      image_1: image,
      image_2: image,
      image_3:image,
      image_4: image,
      main_image:image
    }
  ];
  const Product1 = {
    data: [
      {
        category: {
          id: 1,
          name: "PTE Vouchers",
          description: "Get access to official PTE test vouchers and practice materials from top providers."
        },
        vouchers: [
          {
            id: 1,
            name: "Pearson PTE | UKVI",
            image_url: image,
            price: 60999,
            discount:1000,
            // type: "UKVI",
            // validity: 365,
            description: "Official Pearson PTE Academic voucher for UKVI applications."
          },
          {
            id: 2,
            name: "ApeUni Vouchers",
            image_url: image,
            price: 60999,
            discount:1000,
            // type: "Practice Test",
            // validity: 30,
            description: "ApeUni PTE voucher with full access to practice tests and resources."
          },
          {
            id: 3,
            name: "AlfaPTE Vouchers",
            image_url: image,
            price: 60999,
            discount:1000,
            // type: "Academic",
            // validity: 365,
            description: "AlfaPTE official voucher for PTE Academic exam."
          },
          {
            id: 4,
            name: "Scored Practice Mock Tests",
            image_url: image,
            price: 60999,
            discount:1000,
            // type: "Mock Test",
            // validity: 30,
            description: "Pearson Scored Practice Mock Test – get real feedback and score report."
          }
        ]
      }
    ]
  };

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
            <div className="flex justify-center">
            <div className="w-[90%] poppins mx-auto py-14 mt-24 shadow-[0px_2px_15px_0px_rgba(25,33,61,0.1)] rounded-3xl">
              <p className="text-center mb-2 inter text-2xl lg:text-4xl font-semibold">
                 Our Deals
              </p>
              <p className="text-sm text-[#59595A] be-vietnam text-center">
              Unlock amazing savings on our  voucher deals! Don’t miss the chance to shop smart and save more.
              </p>

              {/* <div className="w-[80%] poppins   mx-auto py-14 mt-10">    */}
              <div className="mx-auto my-10 ">
                {/* Deals Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-14">
                  {Deals1?.slice(0, 3).map((deal, index) => (
                    <div
                      key={deal.id}
                      className={`flex flex-col justify-between rounded-3xl p-6   bg-${
                        index % 2 === 0 ? " white shadow" : "[#EFF2FF]"
                      } min-h-[430px] sm:min-h-[480px] lg:min-h-[530px] xl:min-h-[580px] 2xl:min-h-[830px] max-h-[630px] sm:max-h-[680px] lg:max-h-[730px] 2xl:max-h-[930px] overflow-y-auto transition-all`}
                    >
                      {/* Header Section */}
                      <div className="mb-3">
                        {/* <div className="min-h-[7rem] flex items-center"> */}
                          <p className="text-2xl text-[#170F49] font-normal md:text-2xl  leading-tight">
                            {deal.name}
                          </p>
                        {/* </div> */}
                        {/* <p className="text-sm text-gray-500 mt-1">
                          Order Now & Save Big
                        </p> */}
                      </div>

                      {/* Price Section */}
                      <div className="mb-4 mt-2">
                        <div className="flex flex-col items-start gap-x-2 gap-y-2">
                          <p className="text-3xl text-[#170F49] font-semibold">
                            Rs. {Math.floor(deal.price)}/-
                          </p>
                          <p className="text-xs text-[#3651BF] bg-[#F1F0FB] font-medium rounded-2xl px-2 py-1 ">
                            Save Rs. {Math.floor(deal.save_rs)}
                          </p>
                        </div>
                      </div>

                      {/* Button Section */}
                      <div className="mb-6">
                        <NavLink
                          to={`/checkout-PTE/`}
                          state={{ object1: deal, path: "deals-payment/" }}
                         
                          className={`${index % 2 === 0 
                            ? "bg-white shadow-[inset_0px_4px_6px_rgba(255,255,255,0.4),inset_0px_-2px_2px_rgba(27,35,85,0.07),0px_3px_6px_rgba(7,0,110,0.03)]" 
                            : "bg-gradient-to-b from-[#8C82FF] to-[#3651BF] shadow-[inset_0px_3px_4px_rgba(223,239,255,0.1),inset_0px_1px_1px_rgba(255,255,255,0.1),inset_0px_-2px_2px_rgba(0,66,137,0.15),0px_2px_5px_rgba(74,58,175,0.25)]"
                          }
                           text-[#170F49] border border-[#D9DBE9]  hover:bg-[#2f3aa0] hover:text-white w-full text-center  text-sm font-medium px-6 py-3 rounded-xl inline-block transition-all`
                          }
                           >
                          Order Now
                        </NavLink>
                      </div>

                      <hr className="mb-6 border-[1.3px] border-[#F1F2F9] -mx-6" />

                      {/* Features Section */}
                      <p className="font-semibold text-[#170F49] ">
                        Includes:
                        </p>
                        <p className="text-[#6F6C8F] font-normal text-sm">
                        This deal includes following
                        </p>
                      <div className="flex-grow max-h-[200px] overflow-y-auto mt-2">
                        
                        <ul className="text-sm text-gray-700 space-y-2 mb-6">
                          {splitFeatures(deal.key_features).map(
                            (feature, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-1"
                              >
                                <FaCheckCircle className="text-[#3651BF] mt-1 flex-shrink-0" />
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
                        <p className="text-2xl text-[#170F49] font-normal md:text-2xl  leading-tight">
                            {deal.name}
                          </p>
                          {/* <p className="text-sm text-gray-500 mt-1">
                            Order Now & Save Big
                          </p> */}
                           <div className="mb-4 mt-2">
                        <div className="flex flex-col items-start gap-x-2 gap-y-2">
                          <p className="text-3xl text-[#170F49] font-semibold">
                            Rs. {Math.floor(deal.price)}/-
                          </p>
                          <p className="text-xs text-[#3651BF] bg-[#F1F0FB] font-medium rounded-2xl px-2 py-1 ">
                            Save Rs. {Math.floor(deal.save_rs)}
                          </p>
                        </div>
                      </div>
                          {/* <div className="flex items-center gap-x-2 mb-2">
                            <p className="my-4 text-2xl font-light">
                              Rs. {Math.floor(deal.price)} /-
                            </p>
                            <p className="text-sm text-gray-600 font-medium rounded-2xl px-2 py-1 bg-[#D5DFFF]">
                              Save Rs. {Math.floor(deal.save_rs)}
                            </p>
                          </div> */}
                          <NavLink
                            to={`/checkout-PTE/`}
                            state={{ object1: deal, path: "deals-payment/" }}
                            className={`${index % 2 === 0 
                              ? "bg-white shadow-[inset_0px_4px_6px_rgba(255,255,255,0.4),inset_0px_-2px_2px_rgba(27,35,85,0.07),0px_3px_6px_rgba(7,0,110,0.03)]" 
                              : "bg-gradient-to-b from-[#8C82FF] to-[#3651BF] shadow-[inset_0px_3px_4px_rgba(223,239,255,0.1),inset_0px_1px_1px_rgba(255,255,255,0.1),inset_0px_-2px_2px_rgba(0,66,137,0.15),0px_2px_5px_rgba(74,58,175,0.25)]"
                            }
                             text-[#170F49] border border-[#D9DBE9]  hover:bg-[#2f3aa0] hover:text-white w-full text-center  text-sm font-medium px-6 py-3 rounded-xl inline-block transition-all`
                            }                          >
                            Order Now
                          </NavLink>
                          <hr className="mb-6 border-[1.3px] border-[#F1F2F9] -mx-6" />
                          <p className="font-semibold text-[#170F49] ">
                        Includes:
                        </p>
                        <p className="text-[#6F6C8F] font-normal text-sm">
                        This deal includes following
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
            </div>
            {/* </div> */}

      {/* ------------------------practice mock tests------------------ */}
    
      {/* ------------------------practice mock tests------------------ */}
      <div
  id="practicemocktests"
  className=" px-2 mt-10"
>
  {/* Display Categories and Vouchers */}
  {Product1?.data?.map((categoryData, categoryIndex) => (
    <div key={categoryData.category.id} className="mb-12">
      {/* Category Header */}
      <div className="w-[85%] mx-auto mb-8">
        <h1 className="text-xl text-[#0F172A] inter font-semibold lg:text-3xl lg:font-bold text-start mb-2">
          {categoryData.category.name}
        </h1>
        <p className="text-[#59595A] text-sm be-vietnam">{categoryData?.category?.description}</p>
      </div>

      {/* Vouchers Grid for this category */}
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryData.vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-white rounded-lg border border-[#E2E8F0] shadow-[0_0_8px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="p-5 pb-0">
                <img
                  src={voucher.image_url}
                  alt={voucher.name}
                  className="w-full h-40 2xl:h-60 object-cover rounded"
                />
              </div>
              
              {/* Content Container - Grows to fill space */}
              <div className="p-5 pt-3 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-md inter font-normal 2xl:text-lg mb-2 ">
                  {voucher.name}
                </h3>
                
                {/* Description - Grows to fill available space */}
                {/* <p className="text-md text-gray-600 mb-3 flex-grow">
                  {voucher.description}
                </p> */}
                
                {/* Details Container - Only takes needed space */}
                {/* <div className="mb-3"> */}
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
                {/* </div> */}
                <p className="text-[#334155] text-md font-normal mb-2 line-through">
                  RS {Math.floor(voucher.discount)}
                </p>
                {/* Price */}
                <p className="text-[#0F172A] text-lg inter font-bold mb-2">
                  RS {Math.floor(voucher.price)}
                </p>
                
                {/* Button - Always at bottom */}
                <NavLink
                  to="/BuyScoredPracticeMockTests"
                  state={{ object: voucher, path: "get-payment-detail/" }}
                  className="w-full block text-center bg-[#ECECEC] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
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
</div>

            {/*------------------------ Get Alfa PTE Portal Access -----------------------*/}
            {/* Only show the default "GGet Alfa PTE Portal Access" section when selectedCategory is "all" */}
            
              {/* <div className="w-[85%] mx-auto py-14">
                <p className="text-xl font-semibold lg:text-3xl lg:font-bold">
                  Get Alfa PTE Portal Access
                </p>
                <p className="text-xs text-gray-500 mb-10 mt-4">
                  We offer Alfa PTE Portal Access for 30, 60 and 90 days.
                  Choose a plan that suits you best.
                </p>
                <div className="my-4">
                 HIGHLIGHTED CHANGES START HERE
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Alfa_PTE_Portal?.data?.map((voucher) => (
                      <div
                        key={voucher.id}
                        className="bg-white rounded-lg border border-[#E2E8F0] shadow-[0_0_8px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col"
                      >
                        Image Container
                        <div className="p-5 pb-0">
                          <img
                            src={voucher.image}
                            alt={voucher.name}
                            className="w-full h-48 object-cover rounded"
                          />
                        </div>
                        
                        Content Container - Grows to fill space
                        <div className="p-5 pt-3 flex flex-col flex-grow">
                          Title
                          <h3 className="text-lg be-vietnam font-medium mb-2">
                            {voucher.name}
                          </h3>
                          
                          Description - Grows to fill available space
                          <p className="text-md text-gray-300 mb-3 flex-grow">
                            {voucher.description}
                          </p>
                          
                          Details Container - Only takes needed space
                          <div className="mb-3">
                            {voucher.validity && (
                              <p className="text-md font-medium inter text-[#3651BF] mb-1">
                                Validity: {voucher.validity} days
                              </p>
                            )}
                          </div>
                          
                          Price
                          <p className="text-[#0F172A] text-lg font-semibold mb-4">
                            RS {Math.floor(voucher.price || 0)}
                          </p>
                          
                          Button - Always at bottom
                          <NavLink
                            to="/GetAlfaPTPortal"
                            state={{
                              name: voucher,
                              path: "aplha-pte-payment/",
                            }}
                            className="w-full block text-center bg-[#ECECEC] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>
                  HIGHLIGHTED CHANGES END HERE

                </div>
              </div> */}
          
            
            {/* Only show BuyVouchers when selectedCategory is "all" */}
             <BuyVouchers />
          </>
        )
      }
    </>
  );
};

export default ButPtevoucher;
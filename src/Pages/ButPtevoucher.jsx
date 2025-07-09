import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import s from "../assets/Group 1597881710.png";
import pic from "../assets/ff.png";
import one from "../assets/images/buypte/1.png";
import ape from "../assets/images/buypte/ape.png";
import alfa from "../assets/images/buypte/alfa.png";
import smt from "../assets/images/buypte/smt.png";
import ape1 from "../assets/images/buypte/ape1.png";

import valid from "../assets/images/buypte/valid.png";
import tees from "../assets/images/buypte/60.png";
import novy from "../assets/images/buypte/90.png";

import ptevoucher from "../assets/images/buypte/ptevoucher.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Loader from "../Components/Loader"

import { ApeUniVoucher } from "../Services/Ape_uni_practice_voucher"

import { Alfa_PTE_Portal_Access } from "../Services/Get_Alfa_PTE_Portal_Access";

import { Pearson_Pte_voucher } from "../Services/Pearson_pte_voucher";

import { Score_Practice_Mock_Test } from "../Services/Score_Practice_Mock_Test";

import { Our_Deals } from "../Services/Our_Deals";

const ButPtevoucher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: ApeVoucher, isLoading, isError } = ApeUniVoucher()

  const { data: Alfa_PTE_Portal, isLoading: Portal_loading, isError: portal_error } = Alfa_PTE_Portal_Access()

  const { data: Buy_Peasrson_Pte_Voucher, isLoading: Buy_Peasrson_Pte_Voucher_loading, isError: Buy_Peasrson_Pte_Voucher_error } = Pearson_Pte_voucher()


  const { data: Pearson_Scored_Practice_Mock, isLoading: Pearson_Scored_Practice_Mock_loading, isError: Pearson_Scored_Practice_Mock_error } = Score_Practice_Mock_Test()

  const { data: Deals, isLoading: Deals_loading, isError: Deals_error } = Our_Deals()
  const filteredDeals = Deals?.slice(3);
  console.log("Deals",Deals.length)
  console.log("filteredDeals",filteredDeals)

  const phoneNumber = "+923258603436";
  const message = "hi";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  

  return (

    <>
    {
        isLoading && Portal_loading && Buy_Peasrson_Pte_Voucher_loading && Pearson_Scored_Practice_Mock_loading && Deals_loading ?
       
        <Loader/>
        :

    <div className="w-[80%] poppins   mx-auto py-14">
      <p className="text-center mb-2 text-4xl font-semibold">
        Choose from our Deals
      </p>
      <p className="text-xs text-gray-500 text-center">
        You can choose a plan which suits you best.
      </p>
      {/* <div className="grid grid-cols-3   my-10 justify-center items-center">
        <div className="bg-[#EFF2FF] relative left-5 rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + Alfa PTE</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 67,600/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 17,300/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Alfa PTE Practice Portal (60 days validity){" "}
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={alfa} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-md z-10 rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + SPMT</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 68,900/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 14,100/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs  mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Pearson Scored Practice Mock Test Voucher{" "}
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={smt} alt="" />
          </div>
        </div>
        <div className="bg-[#EFF2FF] right-3 relative rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + APEUni</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 68,500/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 15,300/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Pearson Scored Practice Mock Test Voucher
              </li>

              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                ApeUni Practice Portal (30 days validity)
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={ape1} alt="" />
          </div>
        </div>
      </div> */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-0 mx-auto my-10">
  {Deals?.slice(0, 3).map((deal) => (
    <div
      key={deal.id}
      className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:p-10 h-full transition-all ${
        deal.id % 2 === 0 ? "bg-[#EFF2FF]" : "bg-white shadow-md"
      }`}
    >
      {/* Top content */}
      <div>
        <p className="text-2xl md:text-3xl font-bold">{deal.name}</p>
        <p className="text-sm text-gray-500 mt-1">Order Now & Save Big</p>
        <p className="my-4 text-2xl font-semibold">Rs. {deal.price}</p>
        <NavLink
          to={`/checkout-PTE/`}
          state={{ object1: deal }}
          className="bg-[#3F51B5] hover:bg-[#2f3aa0] text-white text-sm font-semibold px-6 py-3 rounded-full inline-block transition-all"
        >
          Order Now
        </NavLink>
        <p className="text-sm mt-4 text-gray-600 font-medium">
          Save Rs. {deal.save_rs}
        </p>

        <hr className="my-6 border-[#D1D1F7]" />

        <p className="font-semibold text-black mb-2">Key Features</p>
        <ul className="text-sm text-gray-700 space-y-2">
          {deal.key_features.split("\r\n").map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-green-500 mt-1" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Logos at bottom */}
      <div className="flex gap-2 mt-6 flex-wrap">
        {deal.pte_voucher && (
          <img
            src={deal.pte_voucher.image_url}
            alt={deal.pte_voucher.name}
            className="w-12 h-12 object-contain"
          />
        )}
        {deal.alpha_pteprotal && (
          <img
            src={deal.alpha_pteprotal.image_url}
            alt={deal.alpha_pteprotal.name}
            className="w-12 h-12 object-contain"
          />
        )}
        {deal.score_practice && (
          <img
            src={deal.score_practice.image_url}
            alt={deal.score_practice.name}
            className="w-12 h-12 object-contain"
          />
        )}
        {deal.apeuni_practice && (
          <img
            src={deal.apeuni_practice.image_url}
            alt={deal.apeuni_practice.name}
            className="w-12 h-12 object-contain"
          />
        )}
      </div>
    </div>
  ))}
</div>


<div className="flex flex-wrap  gap-6 w-[100%] mx-auto">
  {filteredDeals?.map((deal) => (
    <div
      key={deal.id}
      className="bg-[#EFF2FF] rounded-3xl p-6 w-[300px] h-[450px] flex flex-col justify-between"
    >
      {/* Top content */}
      <div className="flex flex-col flex-grow">
        <p className="text-xl font-semibold">{deal.name}</p>
        <p className="text-xs text-gray-600">{deal.title}</p>
        <p className="my-3 text-lg font-bold">Rs. {deal.price}/-</p>
        <NavLink
          to={`/checkout-PTE/`}
          state={{ object1: deal }}
          className="bg-primary rounded-full px-4 py-2 text-white border-shadowborder border-4 text-sm text-center w-fit"
        >
          Order Now
        </NavLink>
        <p className="text-green-700 font-semibold text-sm mt-4">
          Save Rs. {deal.save_rs}/-
        </p>

        <div className="py-4 border-t border-[#D1D1F7] text-sm flex-grow">
          <p className="font-semibold">Key Features:</p>
          <ul className="mt-2 list-disc pl-4 text-xs">
            {deal.key_features?.split("\r\n").map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logos at bottom */}
      <div className="flex gap-2 mt-4">
        {deal.pte_voucher && (
          <img
            src={deal.pte_voucher.image_url}
            alt=""
            className="w-10 h-10 object-contain"
          />
        )}
        {deal.alpha_pteprotal && (
          <img
            src={deal.alpha_pteprotal.image_url}
            alt=""
            className="w-10 h-10 object-contain"
          />
        )}
        {deal.score_practice && (
          <img
            src={deal.score_practice.image_url}
            alt=""
            className="w-10 h-10 object-contain"
          />
        )}
        {deal.apeuni_practice && (
          <img
            src={deal.apeuni_practice.image_url}
            alt=""
            className="w-10 h-10 object-contain"
          />
        )}
      </div>
    </div>
  ))}
</div>

      <div className="my-8">
        <p className="text-3xl mb-4 font-semibold">
          Buy Scored Practice Mock Tests
        </p>
        <p className="text-sm text-gray-500">
          We offer Pearson Scored Practice Mock Tests A,B,C,D,E to take your
          exam preparation to a next level
        </p>
        <div className="flex flex-col lg:flex-row lg: w-4/5 mx-auto gap-10 my-20">
          <div className="w-full">
            <p className="text-xl font-semibold mb-4">
              {Pearson_Scored_Practice_Mock?.data[0]?.name}
            </p>
            <p className="text-xl font-semibold text-green-500">RS {" "}{Pearson_Scored_Practice_Mock?.data[0]?.price}</p>
            <div className="">
              <div className="border-b rounded-md   mb-2 overflow-hidden">
                <div
                  className="flex justify-between items-center  py-3 cursor-pointer    "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <select name="" id="" className="w-full">
                    <option value="" disabled>
                      Choose your scored practice mock test
                    </option>
                    <option value="">practice mock test A</option>
                    <option value=""> practice mock test B</option>
                    <option value=""> practice mock test C</option>
                    <option value=""> practice mock test D</option>
                    <option value=""> practice mock test E</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-600 py-2">
              {Pearson_Scored_Practice_Mock?.data[0]?.description}
            </div>
            <br />
            <div className="">
              <a
                href={whatsappLink}
                className="bg-primary   w-full block text-center  rounded-md  px-4 py-2 text-white border-shadowborder border-4"
              >
                Buy Now
              </a>
            </div>
          </div>

          <div className="w-full">
            <img src={Pearson_Scored_Practice_Mock?.data[0]?.image} alt="" className="w-96 " />
          </div>
        </div>
        {/* <div className="flex gao-10 flex-col md:flex-row">
          <div className=" w-full mt-6 space-y-4">
            <p className="text-4xl font-semibold">
              Buy <span className="text-primary">Pearson PTE Voucher</span> From
              Us
            </p>
            <p className="text-xs">
              Opal Institute is a Pearson VUE Authorised Test Center and offers
              Pearson PTE Voucher for ou students.
            </p>
            <p className="text-2xl font-semibold">Rs. 67,000/-</p>
            <div className="">
              <br />
              <a
                href={whatsappLink}
                to="/"
                className="text-white font-semibold bg bg-primary px-16 py-3 rounded-full
              "
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className="w-full">
            <img src={one} alt="" width={500} />
          </div>
        </div> */}
        <div className="flex gap-10 flex-col md:flex-row">
          {Buy_Peasrson_Pte_Voucher?.data?.map((voucher) => (
            <div key={voucher.id} className="flex gap-10 flex-col md:flex-row">
              <div className="w-full mt-6 space-y-4">
                <p className="text-4xl font-semibold">
                   <span className="text-primary">{voucher.name}</span> 
                </p>
                <p className="text-xs">
                  Opal Institute is a Pearson VUE Authorised Test Center and offers
                  Pearson PTE Voucher for our students.
                </p>
                <p className="text-2xl font-semibold">RS{" "}{voucher.price}</p>
                <div>
                  <br />
                  <a
                    href={whatsappLink}
                    className="text-white font-semibold bg-primary px-16 py-3 rounded-full"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="w-full">
                <img src={voucher.image} alt={voucher.name} width={500} />
              </div>
            </div>
          ))}
        </div>

        <div className=" my-10">
          <p className="text-3xl font-semibold">Get Alfa PTE Portal Access</p>
          <p className="text-xs text-gray-500 mb-10">
            We offer Alfa PTE Portal Access for 30, 60 and 90 days. Choose a
            plan that suits you best.
          </p>
          <div className="my-4">
            {/* <div className="grid  w-[80%] mx-auto gap-20 md:grid-cols-2">

              {Alfa_PTE_Portal?.data?.map((voucher) => (
                <div key={voucher.id} className="relative border p-4">
                  <img src={valid} className="absolute -left-4 -top-8" alt="Valid Indicator" />
                  <img src={voucher.image} alt={voucher.name} className="w-96" />
                  <div className="space-y-2 mb-2">
                    <p className="text-xs text-gray-500 p-2">{voucher.title}</p>
                    <p className="text-primary font-semibold">{voucher.name}</p>
                    <p className="text-xs">
                      {voucher.description}
                    </p>
                  </div>
                  <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                    Buy Now
                  </a>
                </div>
              ))} */}

<div className="grid w-[80%] mx-auto gap-8 md:grid-cols-2">
  {Alfa_PTE_Portal?.data?.map((voucher) => (
    <div key={voucher.id} className="relative border p-4 flex flex-col">
      <img src={valid} className="absolute -left-4 -top-8" alt="Valid Indicator" />
      <img src={voucher.image} alt={voucher.name} className="w-full h-auto mb-4" />
      
      <div className="space-y-2 mb-4">
        <p className="text-xs text-gray-500">{voucher.title}</p>
        <p className="text-primary font-semibold">{voucher.name}</p>
        <p className="text-xs">{voucher.description}</p>
      </div>

      {/* Push button to bottom */}
      <div className="mt-auto">
        <a
          href={whatsappLink}
          className="block bg-gray-100 text-center text-sm font-medium text-black w-full p-2 rounded"
        >
          Buy Now
        </a>
      </div>
    </div>
  ))}



              {/* <div className="relative border p-4">
                <img src={tees} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ptevoucher} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs text-gray-500 p-2">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 60 Days
                  </p>
                  <p className="text-xs">
                    Unlock your potential with AlfaPTE, the leading practice
                    platform for PTE Academic / UKVI, and PTE Core preparation.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>
              <div className="relative border p-4">
                <img src={novy} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ptevoucher} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs text-gray-500 p-2">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 90 Days
                  </p>
                  <p className="text-xs">
                    Unlock your potential with AlfaPTE, the leading practice
                    platform for PTE Academic / UKVI, and PTE Core preparation.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className=" my-10">
          <p className="text-3xl font-semibold">
            Get APE Uni Practice Vouchers.
          </p>
          <p className="text-xs text-gray-500 mb-10">
            We offer APE Uni Practice Vouchers too. for 30, 60 and 90 days.
            Choose a plan that suits you best.
          </p>
          <div className="my-4">
            <div className="grid w-[80%] mx-auto gap-20 md:grid-cols-2">
              {ApeVoucher?.data?.map((voucher) => (
                <div key={voucher.id} className="relative border p-4">
                  <img src={valid} className="absolute -left-4 -top-8" alt="Valid Indicator" />
                  <img src={voucher.image} alt={voucher.name} className="w-96" />
                  <div className="space-y-2 mb-2">
                    <p className="text-xs text-gray-500 p-2">Practice exam beforehand</p>
                    <p className="text-primary font-semibold">{voucher.name}</p>
                    <p className="text-xs">
                      {voucher.description}
                    </p>
                  </div>
                  <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                    Buy Now
                  </a>
                </div>
              ))}




              {/* <div className="relative border p-4">
              <img src={tees} className=" absolute -left-4 -top-8 " alt="" />
              <img src={ape} alt="" className="w-96" />
              <div className="space-y-2 mb-2">
                <p className="p-2 text-xs text-gray-500">
                  practice exam beforehand
                </p>
                <p className="text-primary font-semibold">
                  Alfa PTE Portal Access 60 Days
                </p>
                <p className="text-xs">
                  You’ll receive a link where you can easily redeem your APE
                  Uni voucher.
                </p>
              </div>
              <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                Buy Now
              </a>
            </div>
            <div className="relative border p-4">
              <img src={novy} className=" absolute -left-4 -top-8 " alt="" />
              <img src={ape} alt="" className="w-96" />
              <div className="space-y-2 mb-2">
                <p className="text-xs p-2 text-gray-500">
                  practice exam beforehand
                </p>
                <p className="text-primary font-semibold">
                  Alfa PTE Portal Access 90 Days
                </p>
                <p className="text-xs">
                  You’ll receive a link where you can easily redeem your APE
                  Uni voucher.
                </p>
              </div>
              <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                Buy Now
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
        }
        </>
  );
};

export default ButPtevoucher;

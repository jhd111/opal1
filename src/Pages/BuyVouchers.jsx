import React from "react";
import aws from "../assets/vouchers/aws.svg";
import checkpoint from "../assets/vouchers/checkpoint.svg";
import cisco from "../assets/vouchers/cisco.svg";
import comp from "../assets/vouchers/comp.svg";
import ec from "../assets/vouchers/ec.svg";
import googlecloud from "../assets/vouchers/googlecloud.svg";
import isac from "../assets/vouchers/isac.svg";
import itil from "../assets/vouchers/itil.svg";
import jupier from "../assets/vouchers/jupier.svg";
import linux from "../assets/vouchers/linux.svg";
import microsoft from "../assets/vouchers/microsoft.svg";
import oracle from "../assets/vouchers/oracle.svg";
import vmware from "../assets/vouchers/vmware.svg";
import paloalto from "../assets/vouchers/paloalto.svg";
import price from "../assets/vouchers/price.svg";
import salesforce from "../assets/vouchers/salesforce.svg";
import togaf from "../assets/vouchers/togaf.svg";
import { NavLink } from "react-router-dom";

import Loader from "../Components/Loader"
import { BuyITVouchers } from "../Services/BuyITVouchers";
const BuyVouchers = () => {
  // const vouchers = [
  //   {
  //     img: aws,
  //     name: "AWS",
  //   },
  //   {
  //     img: checkpoint,
  //     name: "Checkpoint",
  //   },
  //   {
  //     img: cisco,
  //     name: "Cisco",
  //   },
  //   {
  //     img: comp,
  //     name: "CompTIA",
  //   },
  //   {
  //     img: ec,
  //     name: "EC-Council",
  //   },
  //   {
  //     img: googlecloud,
  //     name: "Google Cloud",
  //   },
  //   {
  //     img: isac,
  //     name: "ISC2",
  //   },
  //   {
  //     img: itil,
  //     name: "ITIL",
  //   },
  //   {
  //     img: jupier,
  //     name: "Jupiter",
  //   },
  //   {
  //     img: linux,
  //     name: "Linux",
  //   },
  //   {
  //     img: microsoft,
  //     name: "Microsoft",
  //   },
  //   {
  //     img: oracle,
  //     name: "Oracle",
  //   },
  //   {
  //     img: vmware,
  //     name: "VMware",
  //   },
  //   {
  //     img: paloalto,
  //     name: "Palo Alto",
  //   },
  //   {
  //     img: price,
  //     name: "PricewaterhouseCoopers",
  //   },
  //   {
  //     img: salesforce,
  //     name: "Salesforce",
  //   },
  //   {
  //     img: togaf,
  //     name: "TOGAF",
  //   },
  // ];

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
            image_url: microsoft,
            price: 60999,
            discount:1000,
            // type: "UKVI",
            // validity: 365,
            description: "Official Pearson PTE Academic voucher for UKVI applications."
          },
          {
            id: 2,
            name: "ApeUni Vouchers",
            image_url: linux,
            price: 60999,
            discount:1000,
            // type: "Practice Test",
            // validity: 30,
            description: "ApeUni PTE voucher with full access to practice tests and resources."
          },
          {
            id: 3,
            name: "AlfaPTE Vouchers",
            image_url: linux,
            price: 60999,
            discount:1000,
            // type: "Academic",
            // validity: 365,
            description: "AlfaPTE official voucher for PTE Academic exam."
          },
          {
            id: 4,
            name: "Scored Practice Mock Tests",
            image_url: linux,
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


   const { data: Vouchers, isLoading, error } = BuyITVouchers();
   console.log(Vouchers)
  return (
    <>
    {
      isLoading ?
      <Loader/>
      :
    
    <div className="w-[84%] md:w-[84%] 2xl:w-[80%] mx-auto">
      <div className="mt-5">
        <div className="text-start inter">
          <p className="text-xl font-semibold lg:text-3xl lg:font-bold ">IT Exam Vouchers</p>
          {/* <p className="text-sm lg:text-lg mt-3 text-[#55595F]">
            We offer authentic vouchers for Exams
          </p> */}
          <p className="text-sm lg:text-lg mt-5 text-[#55595F]">
          Unlock amazing savings on our  IT  Vouchers! Don’t miss the chance to shop smart and save more.
          </p>
        </div>
      </div>
      {/* {Product1?.data?.map((categoryData, categoryIndex) => (
    <div key={categoryData.category.id} className="mb-12"> */}
     

      {/* Vouchers Grid for this category */}
      <div className="w-[100%] mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {Vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-white rounded-lg border border-[#E2E8F0] shadow-[0_0_8px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="p-5 pb-0">
                <img
                  src={voucher.voucher_image_url}
                  alt={voucher.name}
                  className="w-[100%] lg:w-full 2xl:h-60 object-fill md:object-cover rounded"
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
                  {/* {voucher.type && (
                    <p className="text-md font-medium inter text-black mb-1">
                      Test Type: {voucher.type}
                    </p>
                  )}
                  {voucher.validity && (
                    <p className="text-md font-medium inter text-[#3651BF] mb-1">
                      Validity: {voucher.validity} days
                    </p>
                  )} */}
                {/* </div> */}
                {/* <p className="text-red-200 text-md md:text-lg font-normal mb-2 line-through">
                  RS {Math.floor(voucher.discount)}
                </p> */}
                {/* Price */}
                {/* <p className="text-[#0F172A] text-md md:text-lg inter font-bold mb-2">
                  RS {Math.floor(voucher.price)}
                </p> */}
                
                {/* Button - Always at bottom */}
                <NavLink
                    to={{
                      pathname: "/all-vouchers",
                    }}
                    state={{ object: voucher,path: "get-payment-detail/" }}
                  className="w-full block text-center text-sm md:text-lg bg-[#ECECEC] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* </div>
  ))} */}
    </div>
        }
        </>
  );
};

export default BuyVouchers;

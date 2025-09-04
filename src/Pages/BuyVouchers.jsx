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

   const { data: Vouchers, isLoading, error } = BuyITVouchers();
   console.log(Vouchers)
  return (
    <>
    {
      isLoading ?
      <Loader/>
      :
    
    <div className="w-[90%] md:w-[80%] mx-auto">
      <div className="mt-5">
        <div className="text-center inter">
          <p className="text-xl font-semibold lg:text-3xl lg:font-bold ">Buy IT Exam Vouchers</p>
          <p className="text-sm lg:text-lg mt-3 text-[#55595F]">
            We offer authentic vouchers for Exams
          </p>
          <p className="text-sm lg:text-lg mt-5 text-[#55595F]">
            Please select the vendor. We offer a large variety of Authentic Exam
            vouchers from a number of different vendors.
          </p>
        </div>
      </div>
      <div className="mx-auto  mt-10 w-[100%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Vouchers?.map((val, i) => {
            return (
              <div className=" flex flex-col justify-between p-4 shadow">
                <div className="flex justify-center">
                <img src={val.voucher_image_url} alt=""  />
                </div>
                <p className="text-start  my-2 text-lg font-semibold">
                 {val.name}
                </p>
                <NavLink
                  // to="/all-vouchers"
                    to={{
                    pathname: "/all-vouchers",
                  }}
                  state={{ object: val,path: "get-payment-detail/" }} // Pass the full object here
                  className="bg-[#F1F1F3]  text-center rounded-md py-2 px-10 font-semibold"
                >
                  Buy Now
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
        }
        </>
  );
};

export default BuyVouchers;

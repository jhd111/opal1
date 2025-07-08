import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/logo-2.png";
import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
import CheckoutcardDetails from "../Components/CheckoutcardDetails";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import Otp from "../Components/Otp";
import Successfullpayment from "./Successfullpayment";

const BookWithUSCheckWithus = () => {
  const [selectedPayment, setSelectedPayment] = useState("us");
  const [select, setselect] = useState(1);

  return (
    <div className="bg-slate-50   pb-20">
      <div className="w-[90%] poppins mx-auto">
        <div className=" py-10">
          <p className="text-2xl font-semibold">Check Out</p>
          <div className="flex items-center text-gray-700 text-xs gap-1">
            <p>Buy PTE Voucher</p> <IoIosArrowForward /> <p>Checkout</p>
          </div>
        </div>
        <div className=" mb-10">
          <div className=" gap-2 text-[10px] font-semibold  flex items-center">
            <div
              className={`p-4  border-2 rounded-[5px] cursor-pointer ${
                selectedPayment === "self"
                  ? "border-primary"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedPayment("self")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "self"}
                  onChange={() => setSelectedPayment("self")}
                  className="w-3 h-3"
                />
                <label className="cursor-pointer">Book Exam Yourself</label>
              </div>
            </div>

            <div
              className={`p-4  border-2 rounded-[5px] cursor-pointer ${
                selectedPayment === "us" ? "border-primary" : "border-gray-200"
              }`}
              onClick={() => setSelectedPayment("us")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "us"}
                  onChange={() => setSelectedPayment("us")}
                  className="w-3 h-3"
                />
                <label className="cursor-pointer">Book Exam with us</label>
              </div>
            </div>
          </div>
        </div>

        {selectedPayment == "self" && (
          <div className=" flex ">
            <div className="w-full  ">
              {select == 1 && (
                <div className="w-[80%]">
                  <p className="mb-6 text-lg font-semibold">
                    Payment Information
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="">
                      <div className="">
                        <p className="font-semibold">Pay Online</p>
                        <div className="flex   gap-2">
                          <span>
                            <IoCard className="text-primary mt-1 text-2xl" />
                          </span>
                          <div className="">
                            <p>PK65 UNIL 0109000299562391</p>
                            <p>OPAL INSTITUTE</p>
                            <p>UBL 1199299562391</p>
                          </div>
                        </div>
                        <div className="flex   gap-2">
                          <span>
                            <IoCard className="text-primary mt-1 text-2xl" />
                          </span>
                          <div className="">
                            <p>PK65 UNIL 0109000299562391</p>
                            <p>OPAL INSTITUTE</p>
                            <p>UBL 1199299562391</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className=" space-y-5">
                        <div className="">
                          <p className="font-semibold">Policy</p>
                          <p className="text-xs">
                            Please take the screenshot of the payment receipt
                            and upload it on our website or send us on whatsapp.
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaWhatsapp className="text-lime-500 text-2xl" />
                          <a href="tel:++92 330 4161031">+92 330 4161031</a>
                        </div>
                        <div className="">
                          <p className="font-semibold">Social media</p>
                          <div className="flex gap-2">
                            <span className="text-white p-2 rounded-full bg-primary">
                              <FaFacebook />
                            </span>
                            <span className="text-white  p-2 rounded-full bg-primary">
                              <FaTwitter />
                            </span>
                            <span className="text-white  p-2 rounded-full bg-primary">
                              <FaLinkedinIn />
                            </span>
                            <span className="text-white  p-2 rounded-full bg-primary">
                              <FaInstagram />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs my-2">
                      Take Screenshot of the payment receipt to upload.
                    </p>
                  </div>
                  <form
                    action=""
                    className="   bg-white p-6 rounded-lg space-y-3"
                  >
                    <p className="font-semibold text-xl my-4">
                      Personal Information
                    </p>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="font-medium">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Enter City"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="font-medium">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Email"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="font-medium">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="font-medium">
                        Upload Payment Screenshot
                      </label>
                      <input
                        type="file"
                        placeholder="Enter Phone Number"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    {/* <>
                    <p className="font-semibold text-xl my-4">
                      Payment Information
                    </p>
                    <p className="font-medium ">Credit/Debit Card</p>
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        placeholder="Enter CardHoler Name"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        placeholder="Enter Card Number"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          placeholder="Expiration Date"
                          className="w-full p-2 rounded-md border border-gray-400"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full p-2 rounded-md border border-gray-400"
                        />
                      </div>
                    </div>
                  </> */}
                    <div className="text-xs ">
                      You will receive an email shortly.
                    </div>
                    <div className="flex gap-8">
                      <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
                        Cancel
                      </button>
                      <button
                        onClick={() => setselect(2)}
                        className="bg-primary w-full py-2  text-white rounded-md"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              )}
              {select == 2 && (
                <div>
                  <Otp setselect={setselect} />
                </div>
              )}
              {select == 3 && (
                <Successfullpayment
                  Message={"Verification Successful!"}
                  orderid={"Your Order ID: 154678912"}
                />
              )}
            </div>
            <div className="w-full flex  justify-center">
              <CheckoutcardDetails />
            </div>
          </div>
        )}
        {selectedPayment == "us" && (
          <div className="">
            <CheckOutBankTransfer />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookWithUSCheckWithus;
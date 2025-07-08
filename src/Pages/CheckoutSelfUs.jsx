import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/logo-2.png";
// import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
import PteCheckOutBankTransfer from "../Components/PteCheckOutBankTransfer";
import CheckoutcardDetails from "../Components/CheckoutcardDetails";

import { BankTransferDetail } from "../Services/BankTransfer_IT";
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

import { BookExamYourSelf } from "../Services/BookExamWithYourself";
import toast from 'react-hot-toast';

const CheckoutSelfUs = () => {
  const [selectedPayment, setSelectedPayment] = useState("us");
  const [select, setselect] = useState(1);

  const [selectedFile, setSelectedFile] = useState(null);

  const { data: BankDetail, isLoading, error } = BankTransferDetail();

  const [formData, setFormData] = useState({
    form_type: "Book Exam With Yourself",
    full_name: "",
    email: "",
    phone_number: "",
    city:''
    // image: ""

  })

localStorage.setItem('email',formData.email)
  const mutation = BookExamYourSelf();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Optional: update formData if needed elsewhere
      // setFormData((prev) => ({ ...prev, payment_image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone_number) {
      toast.error("Please fill in all required fields.",{
        position: "top-center",
      });
      return;
    }

    if (!selectedFile) {
      toast.error("Please upload a payment screenshot.", {
        position: "top-center",
      });
      
      return;
    }

    const submitData = new FormData();
    submitData.append('form_type', formData.form_type);
    submitData.append('full_name', formData.full_name);
    submitData.append('email', formData.email);
    submitData.append('phone_number', formData.phone_number);
    submitData.append('payment_screenshot',formData.city)

    submitData.append('payment_screenshot', selectedFile); // ✅ Use selectedFile directly

    mutation.mutate(submitData, {
      onSuccess: (data) => {
        toast.success("Submitted successfully!",{
          position: "top-center",
        });
        setselect(2); // Correct setter function
      },
      onError: (error) => {
        console.error("Error submitting bank transfer details:", error.response?.data || error.message);
        toast.error("Failed to submit payment. Please check console for details.",{
          position: "top-center",
        });
      },
    });
  };


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
              className={`p-4  border-2 rounded-[5px] cursor-pointer ${selectedPayment === "self"
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
              className={`p-4  border-2 rounded-[5px] cursor-pointer ${selectedPayment === "us" ? "border-primary" : "border-gray-200"
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
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full  ">
              {select == 1 && (
                <div className="w-full">
                  <p className="mb-6 text-lg font-semibold">
                    Payment Information
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <div className="">
                <p className="font-semibold">Pay Online</p>
                <div className="flex flex-col">
                  {BankDetail?.data?.map((bank, index) => (
                    <div key={index} className="flex gap-2 items-start mb-4">
                      <span>
                        <IoCard className="text-primary mt-1 text-2xl" />
                      </span>
                      <div>
                        <p className="font-medium">
                          
                        {bank.iban_number?.slice(0, 6)}<br />
  {bank.iban_number?.slice(6, 24)}
  {/* {bank.iban_number?.slice(6, 24)} */}
                          </p>
                        <p className="text-sm text-gray-600">{bank.account_title}</p>
                        <p className="text-sm">
                          {bank.bank_name} {bank.account_number}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="space-y-5">
                <div className="">
                  <p className="font-semibold">Policy</p>
                  <p className="text-xs">
                    {BankDetail?.data?.[0]?.policy}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-lime-500 text-2xl" />
                  <a href={`tel:${BankDetail?.data?.[0]?.whatsapp_number}`}>
                    {BankDetail?.data?.[0]?.whatsapp_number}
                  </a>
                </div>
                <div className="">
                  <p className="font-semibold">Social media</p>
                  <div className="flex gap-2">
                    <span className="text-white p-2 rounded-full bg-primary">
                      <FaFacebook />
                    </span>
                    <span className="text-white p-2 rounded-full bg-primary">
                      <FaTwitter />
                    </span>
                    <span className="text-white p-2 rounded-full bg-primary">
                      <FaLinkedinIn />
                    </span>
                    <span className="text-white p-2 rounded-full bg-primary">
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  <form
                    onSubmit={handleSubmit}
                    className="   bg-white p-6 rounded-lg space-y-3"
                  >
                    <p className="font-semibold text-xl my-4">
                      Personal Information
                    </p>

                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="full_name" className="font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="w-full p-2 rounded-md border border-gray-400"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="city" className="font-medium">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Enter City"
                        className="w-full p-2 rounded-md border border-gray-400"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required

                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="font-medium">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Email"
                        className="w-full p-2 rounded-md border border-gray-400"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="phone_number" className="font-medium">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="w-full p-2 rounded-md border border-gray-400"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* <div className="flex flex-col gap-1">
                      <label htmlFor="" className="font-medium">
                        Upload Payment Screenshot
                      </label>
                      <input
                        type="file"
                        placeholder="Enter Phone Number"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div> */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="image" className="font-medium">
                        Upload Payment Screenshot *
                      </label>
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        className="w-full p-2 rounded-md border border-gray-400"
                        onChange={handleFileChange}
                        required
                      />
                      {selectedFile && (
                        <p className="text-sm text-green-600 mt-1">
                          Selected: {selectedFile.name}
                        </p>
                      )}
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
                      type="submit"
                        // onClick={() => setselect(2)}
                         disabled={mutation.isPending}
                        className="bg-primary w-full py-2  text-white rounded-md"
                        
                      >
                         {mutation.isPending ? "Submitting..." : "Submit & Continue"}
                        
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
            <PteCheckOutBankTransfer />
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSelfUs;

import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCard, IoWarningOutline } from "react-icons/io5";
import CheckoutcardDetails from "./CheckoutcardDetails";
import BookExamWithUs from "./BookExamWithUs";
import Successfullpayment from "../Pages/Successfullpayment";

import { BankTransferDetail } from "../Services/BankTransfer_IT";
import { usePostPaymentDetails } from "../Services/BankTransferAmount";

const BookExamWith = ({ set }) => {
  const [block, setblock] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    type: "bank transfer", // Default type
    full_name: "",
    email: "",
    phone_number: "",
    account_title: "",
    // payment_image: null,
  });

  const { data: BankDetail, isLoading, error } = BankTransferDetail();
  const mutation = usePostPaymentDetails();

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

  ("selectedFile",selectedFile)

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Basic validation
  //   if (!formData.full_name || !formData.email || !formData.phone_number) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   // if (!selectedFile) {
  //   //   alert("Please upload a payment screenshot.");
  //   //   return;
  //   // }

  //   // Create FormData for file upload
  //   const submitData = new FormData();
  //   submitData.append('type', formData.type);
  //   submitData.append('full_name', formData.full_name);
  //   submitData.append('email', formData.email);
  //   submitData.append('phone_number', formData.phone_number);
  //   submitData.append('account_title', formData.account_title);
  //   // submitData.append('payment_image', selectedFile);
  //   if (selectedFile) {
  //     submitData.append('payment_image', selectedFile);
  //   }

  // console.log("FormData contents:", Object.fromEntries(submitData)); // 👈 For debugging only

  //   mutation.mutate(submitData, {
  //     onSuccess: (data) => {
  //       console.log("Bank transfer details submitted successfully:", data);
  //       alert("Payment details submitted successfully!");
  //       // Move to next step
  //       if (set) {
  //         set(2);
  //       } else {
  //         setblock(2);
  //       }
  //     },
  //     onError: (error) => {
  //       console.error("Error submitting bank transfer details:", error);
  //       alert("Failed to submit payment details. Please try again.");
  //     },
  //   });
  // };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.full_name || !formData.email || !formData.phone_number) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!selectedFile) {
    alert("Please upload a payment screenshot.");
    return;
  }

  const submitData = new FormData();
  submitData.append('type', formData.type);
  submitData.append('full_name', formData.full_name);
  submitData.append('email', formData.email);
  submitData.append('phone_number', formData.phone_number);
  submitData.append('account_title', formData.account_title);
  submitData.append('payment_image', selectedFile); // ✅ Use selectedFile directly

  mutation.mutate(submitData, {
    onSuccess: (data) => {
      alert("Submitted successfully!");
      if (set) set(2); else setblock(2);
    },
    onError: (error) => {
      console.error("Error submitting bank transfer details:", error.response?.data || error.message);
      alert("Failed to submit payment. Please check console for details.");
    },
  });
};

  // Handle step navigation
  const handleContinue = () => {
    if (set) {
      set(2);
    } else {
      setblock(2);
    }
  };

  const handleSubmitBooking = () => {
    setblock(3);
  };

  return (
    <div className="flex gap-10">
      {block === 1 && (
        <div className="w-full">
          <p className="mb-6 text-lg font-semibold">Payment Information</p>
          <div className="grid grid-cols-2 gap-5">
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
                        <p className="font-medium">{bank.iban_number?.slice(0, 24)}</p>
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
          <p className="text-xs mt-6 text-gray-600">
            Take Screenshot of the payment receipt to upload.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white p-10 mt-4 rounded-md space-y-4">
            <p className="font-semibold text-xl my-4">Personal Information</p>

            <div className="flex flex-col gap-1">
              <label htmlFor="full_name" className="font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="full_name"
                placeholder="Enter Full Name"
                className="w-full p-2 rounded-md border border-gray-400"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
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
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone_number"
                placeholder="Enter Phone Number"
                className="w-full p-2 rounded-md border border-gray-400"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="account_title" className="font-medium">
                Account Title (Optional)
              </label>
              <input
                type="text"
                id="account_title"
                placeholder="Enter Account Title"
                className="w-full p-2 rounded-md border border-gray-400"
                name="account_title"
                value={formData.account_title}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="payment_image" className="font-medium">
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                id="payment_image"
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
            
            <div className="">
              <p className="text-gray-500 text-xs flex items-center gap-2">
                <IoWarningOutline /> View bank details on the top
              </p>
            </div>
            
            <div className="flex gap-8">
              <button 
                type="button"
                className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-primary w-full py-2 text-white rounded-md disabled:opacity-50"
              >
                {mutation.isPending ? "Submitting..." : "Submit & Continue"}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {block === 2 && (
        <div className="w-full bg-white p-4 rounded-md">
          <BookExamWithUs />
          <div className="flex my-4 gap-8">
            <button 
              type="button"
              className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmitBooking}
              className="bg-primary w-full py-2 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      
      {block === 3 && (
        <div className="w-full">
          <Successfullpayment
            Message={
              "Thank you for Booking with us. You will receive an email shortly."
            }
            orderid={"Your Order ID: 154678912"}
          />
        </div>
      )}
      
      <div className="w-full">
        <CheckoutcardDetails />
      </div>
    </div>
  );
};

export default BookExamWith;
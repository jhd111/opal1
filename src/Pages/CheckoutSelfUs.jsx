// import React, { useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import img from "../assets/logo-2.png";
// // import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
// import PteCheckOutBankTransfer from "../Components/PteCheckOutBankTransfer";
// import CheckoutcardDetails from "../Components/CheckoutcardDetails";

// import { BankTransferDetail } from "../Services/BankTransfer_IT";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { IoCard } from "react-icons/io5";
// import Otp from "../Components/Otp";
// import Successfullpayment from "./Successfullpayment";

// import { BookExamYourSelf } from "../Services/BookExamWithYourself";
// import toast from 'react-hot-toast';

// const CheckoutSelfUs = () => {
//   const [selectedPayment, setSelectedPayment] = useState("us");
//   const [select, setselect] = useState(1);

//   const [selectedFile, setSelectedFile] = useState(null);

//   const { data: BankDetail, isLoading, error } = BankTransferDetail();

//   const [formData, setFormData] = useState({
//     form_type: "Book Exam With Yourself",
//     full_name: "",
//     email: "",
//     phone_number: "",
//     city:''
//     // image: ""

//   })

// localStorage.setItem('email',formData.email)
//   const mutation = BookExamYourSelf();

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };


//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       // Optional: update formData if needed elsewhere
//       // setFormData((prev) => ({ ...prev, payment_image: file }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.full_name || !formData.email || !formData.phone_number) {
//       toast.error("Please fill in all required fields.",{
//         position: "top-center",
//       });
//       return;
//     }

//     if (!selectedFile) {
//       toast.error("Please upload a payment screenshot.", {
//         position: "top-center",
//       });

//       return;
//     }

//     const submitData = new FormData();
//     submitData.append('form_type', formData.form_type);
//     submitData.append('full_name', formData.full_name);
//     submitData.append('email', formData.email);
//     submitData.append('phone_number', formData.phone_number);
//     submitData.append('payment_screenshot',formData.city)

//     submitData.append('payment_screenshot', selectedFile); // ✅ Use selectedFile directly

//     mutation.mutate(submitData, {
//       onSuccess: (data) => {
//         toast.success("Submitted successfully!",{
//           position: "top-center",
//         });
//         setselect(2); // Correct setter function
//       },
//       onError: (error) => {
//         console.error("Error submitting bank transfer details:", error.response?.data || error.message);
//         toast.error("Failed to submit payment. Please check console for details.",{
//           position: "top-center",
//         });
//       },
//     });
//   };


//   return (
//     <div className="bg-slate-50   pb-20">
//       <div className="w-[90%] poppins mx-auto">
//         <div className=" py-10">
//           <p className="text-2xl font-semibold">Check Out</p>
//           <div className="flex items-center text-gray-700 text-xs gap-1">
//             <p>Buy PTE Voucher</p> <IoIosArrowForward /> <p>Checkout</p>
//           </div>
//         </div>
//         <div className=" mb-10">
//           <div className=" gap-2 text-[10px] font-semibold  flex items-center">
//             <div
//               className={`p-4  border-2 rounded-[5px] cursor-pointer ${selectedPayment === "self"
//                 ? "border-primary"
//                 : "border-gray-200"
//                 }`}
//               onClick={() => setSelectedPayment("self")}
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedPayment === "self"}
//                   onChange={() => setSelectedPayment("self")}
//                   className="w-3 h-3"
//                 />
//                 <label className="cursor-pointer">Book Exam Yourself</label>
//               </div>
//             </div>

//             <div
//               className={`p-4  border-2 rounded-[5px] cursor-pointer ${selectedPayment === "us" ? "border-primary" : "border-gray-200"
//                 }`}
//               onClick={() => setSelectedPayment("us")}
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedPayment === "us"}
//                   onChange={() => setSelectedPayment("us")}
//                   className="w-3 h-3"
//                 />
//                 <label className="cursor-pointer">Book Exam with us</label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {selectedPayment == "self" && (
//           <div className="flex flex-col lg:flex-row ">
//             <div className="w-full  ">
//               {select == 1 && (
//                 <div className="w-full">
//                   <p className="mb-6 text-lg font-semibold">
//                     Payment Information
//                   </p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div className="">
//               <div className="">
//                 <p className="font-semibold">Pay Online</p>
//                 <div className="flex flex-col">
//                   {BankDetail?.data?.map((bank, index) => (
//                     <div key={index} className="flex gap-2 items-start mb-4">
//                       <span>
//                         <IoCard className="text-primary mt-1 text-2xl" />
//                       </span>
//                       <div>
//                         <p className="font-medium">

//                         {bank.iban_number?.slice(0, 6)}<br />
//   {bank.iban_number?.slice(6, 24)}
//   {/* {bank.iban_number?.slice(6, 24)} */}
//                           </p>
//                         <p className="text-sm text-gray-600">{bank.account_title}</p>
//                         <p className="text-sm">
//                           {bank.bank_name} {bank.account_number}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="space-y-5">
//                 <div className="">
//                   <p className="font-semibold">Policy</p>
//                   <p className="text-xs">
//                     {BankDetail?.data?.[0]?.policy}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaWhatsapp className="text-lime-500 text-2xl" />
//                   <a href={`tel:${BankDetail?.data?.[0]?.whatsapp_number}`}>
//                     {BankDetail?.data?.[0]?.whatsapp_number}
//                   </a>
//                 </div>
//                 <div className="">
//                   <p className="font-semibold">Social media</p>
//                   <div className="flex gap-2">
//                     <span className="text-white p-2 rounded-full bg-primary">
//                       <FaFacebook />
//                     </span>
//                     <span className="text-white p-2 rounded-full bg-primary">
//                       <FaTwitter />
//                     </span>
//                     <span className="text-white p-2 rounded-full bg-primary">
//                       <FaLinkedinIn />
//                     </span>
//                     <span className="text-white p-2 rounded-full bg-primary">
//                       <FaInstagram />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//                   <form
//                     onSubmit={handleSubmit}
//                     className="   bg-white p-6 rounded-lg space-y-3"
//                   >
//                     <p className="font-semibold text-xl my-4">
//                       Personal Information
//                     </p>

//                     <div className="flex flex-col gap-1 ">
//                       <label htmlFor="full_name" className="font-medium">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Full Name"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         name="full_name"
//                         value={formData.full_name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="city" className="font-medium">
//                         City
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter City"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleChange}
//                         required

//                       />
//                     </div>

//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="email" className="font-medium">
//                         Email
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Email"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="phone_number" className="font-medium">
//                         Phone Number
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Phone Number"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         name="phone_number"
//                         value={formData.phone_number}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     {/* <div className="flex flex-col gap-1">
//                       <label htmlFor="" className="font-medium">
//                         Upload Payment Screenshot
//                       </label>
//                       <input
//                         type="file"
//                         placeholder="Enter Phone Number"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                       />
//                     </div> */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="image" className="font-medium">
//                         Upload Payment Screenshot *
//                       </label>
//                       <input
//                         type="file"
//                         id="image"
//                         accept="image/*"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         onChange={handleFileChange}
//                         required
//                       />
//                       {selectedFile && (
//                         <p className="text-sm text-green-600 mt-1">
//                           Selected: {selectedFile.name}
//                         </p>
//                       )}
//                     </div>
//                     {/* <>
//                     <p className="font-semibold text-xl my-4">
//                       Payment Information
//                     </p>
//                     <p className="font-medium ">Credit/Debit Card</p>
//                     <div className="flex flex-col gap-1">
//                       <input
//                         type="text"
//                         placeholder="Enter CardHoler Name"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                       />
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <input
//                         type="text"
//                         placeholder="Enter Card Number"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                       />
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <div className="flex flex-col gap-1">
//                         <input
//                           type="text"
//                           placeholder="Expiration Date"
//                           className="w-full p-2 rounded-md border border-gray-400"
//                         />
//                       </div>
//                       <div className="flex flex-col gap-1">
//                         <input
//                           type="text"
//                           placeholder="CVV"
//                           className="w-full p-2 rounded-md border border-gray-400"
//                         />
//                       </div>
//                     </div>
//                   </> */}
//                     <div className="text-xs ">
//                       You will receive an email shortly.
//                     </div>
//                     <div className="flex gap-8">
//                       <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
//                         Cancel
//                       </button>
//                       <button
//                       type="submit"
//                         // onClick={() => setselect(2)}
//                          disabled={mutation.isPending}
//                         className="bg-primary w-full py-2  text-white rounded-md"

//                       >
//                          {mutation.isPending ? "Submitting..." : "Submit & Continue"}

//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               )}
//               {select == 2 && (
//                 <div>
//                   <Otp setselect={setselect} />
//                 </div>
//               )}
//               {select == 3 && (
//                 <Successfullpayment
//                   Message={"Verification Successful!"}
//                   orderid={"Your Order ID: 154678912"}
//                 />
//               )}
//             </div>
//             <div className="w-full flex  justify-center">
//               <CheckoutcardDetails />
//             </div>
//           </div>
//         )}
//         {selectedPayment == "us" && (
//           <div className="">
//             <PteCheckOutBankTransfer />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CheckoutSelfUs;











// import React, { useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import img from "../assets/logo-2.png";
// import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
// import CheckoutcardDetails from "../Components/CheckoutcardDetails";
// import Successfullpayment from "./Successfullpayment";

// import { usePostPaymentDetails } from "../Services/Payment_debit";

// const CheckOut = () => {
//   const [selectedPayment, setSelectedPayment] = useState("card");

//     // Initialize the mutation hook
//   const mutation = usePostPaymentDetails();


//     const [formData, setFormData] = useState({
//     type: "debit", // Default type
//     full_name: "",
//     email: "",
//     phone_number: "",
//     card_holder_name: "",
//     card_number: "",
//     expiration_date: "",
//     cvv: "",
//   });

//    const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     mutation.mutate(formData, {
//       onSuccess: (data) => {
//         console.log("Payment details submitted successfully:", data);
//         alert("Payment processed successfully!");
//       },
//       onError: (error) => {
//         console.error("Error submitting payment details:", error);
//         alert("Failed to process payment.");
//       },
//     });
//   };



//   return (
//     <div className="bg-slate-50   pb-20">
//       <div className="w-[90%] poppins mx-auto">
//         <div className=" py-10">
//           <p className="text-2xl font-semibold">Check Out</p>
//           <div className="flex items-center text-gray-700 text-xs gap-1">
//             <p>Vouchers</p> <IoIosArrowForward /> <p>Checkout</p>
//           </div>
//         </div>
//         <div className=" mb-10">
//           <div className=" gap-2 text-[10px] font-semibold  flex items-center">
//             <div
//               className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${
//                 selectedPayment === "bank"
//                   ? "border-primary"
//                   : "border-gray-200"
//               }`}
//               onClick={() => setSelectedPayment("bank")}
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedPayment === "bank"}
//                   onChange={() => setSelectedPayment("bank")}
//                   className="w-3 h-3"
//                 />
//                 <label className="cursor-pointer">Bank Transfer</label>
//               </div>
//             </div>

//             <div
//               className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${
//                 selectedPayment === "card"
//                   ? "border-primary"
//                   : "border-gray-200"
//               }`}
//               onClick={() => setSelectedPayment("card")}
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   checked={selectedPayment === "card"}
//                   onChange={() => setSelectedPayment("card")}
//                   className="w-3 h-3"
//                 />
//                 <label className="cursor-pointer">Debit/Credit Card</label>
//               </div>
//             </div>
//           </div>
//         </div>
//         {selectedPayment == "card" && (
//           <div className=" flex ">
//             <div className="w-full  ">
//               <div className="w-[80%]">
//                 <form
//                   action=""
//                   className="   bg-white p-8 rounded-lg space-y-3"
//                   onSubmit={handleSubmit}
//                 >
//                   <p className="font-semibold text-xl my-4">
//                     Personal Information
//                   </p>

//                   <div className="flex flex-col gap-1">
//                     <label htmlFor="" className="font-medium">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Full Name"
//                       name="full_name"
//                       className="w-full p-2 rounded-md border border-gray-400"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <label htmlFor="" className="font-medium">
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Email"
//                       name="email"
//                       className="w-full p-2 rounded-md border border-gray-400"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <label htmlFor="" className="font-medium">
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Phone Number"
//                       name="phone_number"
//                       className="w-full p-2 rounded-md border border-gray-400"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <p className="font-semibold text-xl my-4">
//                     Payment Information
//                   </p>
//                   <p className="font-medium ">Credit/Debit Card</p>
//                   <div className="flex flex-col gap-1">
//                     <input
//                       type="text"
//                       placeholder="Enter CardHoler Name"
//                       name="card_holder_name"
//                       className="w-full p-2 rounded-md border border-gray-400"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <input
//                       type="text"
//                       placeholder="Enter Card Number"
//                       name="card_number"
//                       className="w-full p-2 rounded-md border border-gray-400"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="flex flex-col gap-1">
//                       <input
//                         type="text"
//                         placeholder="Expiration Date"
//                         name="expiration_date"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <input
//                         type="text"
//                         placeholder="CVV"
//                         name="cvv"
//                         className="w-full p-2 rounded-md border border-gray-400"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="text-xs ">
//                     You will receive an email shortly.
//                   </div>
//                   <div className="flex gap-8">
//                     <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
//                       Cancel
//                     </button>
//                     <button
//                     type="submit"
//                       onClick={() => setSelectedPayment(2)}
//                       className="bg-primary w-full py-2  text-white rounded-md"

//                     >
//                       Pay Now
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="w-full">
//               <CheckoutcardDetails />
//             </div>
//           </div>
//         )}
//         {selectedPayment == "bank" && (
//           <CheckOutBankTransfer set={setSelectedPayment} />
//         )}
//         {selectedPayment == 2 && (
//           <Successfullpayment
//             Message={"You’ll receive an email shortly."}
//             orderid={"Your Order ID: 154678912"}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CheckOut;




import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/logo-2.png";
import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
import CheckoutcardDetails from "../Components/CheckoutcardDetails";
import Successfullpayment from "./Successfullpayment";

import { usePostPaymentDetails } from "../Services/Payment_debit";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const CheckOut = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [orderID,setorderID]=useState("")

  const location = useLocation();

   const path = location.pathname;
  const { name, SelectedTYPE } = location.state || {};

  console.log("object checout", name)

  const quantity = localStorage.getItem("count")
  const ItemPrice = localStorage.getItem("price")

  const ptevoucher = localStorage.getItem('price1')

  const selectedPrice = path.includes("/checkout-pte-user") ? ptevoucher : ItemPrice;

  // product_name: name?.name,
  //   product_price: selectedPrice,
  //   product_quantity: quantity,
  //   product_type: SelectedTYPE

  // Initialize the mutation hook
  const mutation = usePostPaymentDetails();

  // Debug the mutation
  console.log("Mutation object:", mutation);
  console.log("Mutation type:", typeof mutation);
  console.log("Mutation mutate function:", typeof mutation?.mutate);

  const [formData, setFormData] = useState({
    type: "debit/credit", // Default type
    full_name: "",
    email: "",
    phone_number: "",
    card_holder_name: "",
    card_number: "",
    expiration_date: "",
    cvv: "",
    product_name: name?.name,
    product_price: selectedPrice,
    product_quantity: quantity,
    product_type: SelectedTYPE
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!", formData);

    // Basic validation
    if (!formData.full_name || !formData.email || !formData.phone_number ||
      !formData.card_holder_name || !formData.card_number ||
      !formData.expiration_date || !formData.cvv) {
      toast.error("Please fill in all required fields.", {
        position: "top-center"
      });
      return;
    }

    // Check if mutation is available
    if (!mutation || typeof mutation.mutate !== 'function') {
      console.error("Mutation is not properly initialized");
      toast.error("Payment service is not available. Please try again.", {
        position: "top-center"
      });
      return;
    }

    try {
      mutation.mutate(formData, {
        onSuccess: (data) => {
          console.log("Payment details submitted successfully:", data);
          toast.success("Payment processed successfully!", {
            position: "top-center"
          });
          setorderID(data.order_id)
          setSelectedPayment(2); // Show success page
        },
        onError: (error) => {
          console.error("Error submitting payment details:", error);
          toast.error("Failed to process payment.", {
            position: "top-center"
          });
        },
      });
    } catch (error) {
      console.error("Error calling mutation:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center"
      });
    }
  };

  return (
    <div className="bg-slate-50 pb-20">
      <div className="w-[90%] poppins mx-auto">
        <div className="py-10">
          <p className="text-2xl font-semibold">Check Out</p>
          <div className="flex items-center text-gray-700 text-xs gap-1">
            <p>Vouchers</p> <IoIosArrowForward /> <p>Checkout</p>
          </div>
        </div>
        <div className="mb-10">
          <div className="gap-2 text-[10px] font-semibold flex items-center">
            <div
              className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${selectedPayment === "bank"
                  ? "border-primary"
                  : "border-gray-200"
                }`}
              onClick={() => setSelectedPayment("bank")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "bank"}
                  onChange={() => setSelectedPayment("bank")}
                  className="w-3 h-3"
                />
                <label className="cursor-pointer">Bank Transfer</label>
              </div>
            </div>

            <div
              className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${selectedPayment === "card"
                  ? "border-primary"
                  : "border-gray-200"
                }`}
              onClick={() => setSelectedPayment("card")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "card"}
                  onChange={() => setSelectedPayment("card")}
                  className="w-3 h-3"
                />
                <label className="cursor-pointer">Debit/Credit Card</label>
              </div>
            </div>
          </div>
        </div>
        {selectedPayment === "card" && (
          <div className="flex">
            <div className="w-full">
              <div className="w-[100%] lg:w-[80%]">
                <form
                  className="bg-white p-8 rounded-lg space-y-3"
                  onSubmit={handleSubmit}
                >
                  <p className="font-semibold text-xl my-4">
                    Personal Information
                  </p>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="full_name" className="font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      placeholder="Enter Full Name"
                      name="full_name"
                      value={formData.full_name}
                      className="w-full p-2 rounded-md border border-gray-400"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                      value={formData.email}
                      className="w-full p-2 rounded-md border border-gray-400"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone_number" className="font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone_number"
                      placeholder="Enter Phone Number"
                      name="phone_number"
                      value={formData.phone_number}
                      className="w-full p-2 rounded-md border border-gray-400"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <p className="font-semibold text-xl my-4">
                    Payment Information
                  </p>
                  <p className="font-medium">Credit/Debit Card</p>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="card_holder_name" className="font-medium">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      id="card_holder_name"
                      placeholder="Enter Card Holder Name"
                      name="card_holder_name"
                      value={formData.card_holder_name}
                      className="w-full p-2 rounded-md border border-gray-400"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="card_number" className="font-medium">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="card_number"
                      placeholder="Enter Card Number"
                      name="card_number"
                      value={formData.card_number}
                      className="w-full p-2 rounded-md border border-gray-400"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="expiration_date" className="font-medium">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        id="expiration_date"
                        placeholder="MM/YY"
                        name="expiration_date"
                        value={formData.expiration_date}
                        className="w-full p-2 rounded-md border border-gray-400"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="cvv" className="font-medium">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="CVV"
                        name="cvv"
                        value={formData.cvv}
                        className="w-full p-2 rounded-md border border-gray-400"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="text-xs">
                    You will receive an email shortly.
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
                      className="bg-primary w-full py-2 text-white rounded-md"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full hidden lg:block">
              <CheckoutcardDetails name={name.name} />
            </div>
          </div>
        )}
        {selectedPayment === "bank" && (
          <CheckOutBankTransfer name1={name.name} setorderID1={setorderID} set={setSelectedPayment} />
        )}
        {selectedPayment === 2 && (
          <Successfullpayment
            Message={"You'll receive an email shortly."}
            orderid={`Your Order ID: ${orderID}`}
          />
        )}
      </div>
    </div>
  );
};

export default CheckOut;
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




import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/logo-2.png";
import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
import CheckoutcardDetails from "../Components/CheckoutcardDetails";
import Successfullpayment from "./Successfullpayment";
import { usePostPaymentDetails } from "../Services/Payment_debit";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCreditCard } from "react-icons/fa";

const CheckOut = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams(); // To read query parameters
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [orderID, setOrderID] = useState("");
  const { name, pathh } = location.state || {};
  const quantity = localStorage.getItem("count");
  // const ItemPrice = localStorage.getItem("price");
  const ItemPrice = localStorage.getItem("price_pkr");
 
  const ptevoucher = localStorage.getItem("price1");
  const selectedPrice = location.pathname.includes("/checkout-pte-user") ? ptevoucher : ItemPrice;
  const mutation = usePostPaymentDetails();

  const [formData, setFormData] = useState({
    type: "debit/credit",
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
    product_type: name?.test_type || name?.type,
  });

  const [cardType, setCardType] = useState("");

  // Detect card type
  const detectCardType = (number) => {
    const cleaned = number.replace(/\D/g, "");
    if (/^4/.test(cleaned)) return "Visa";
    if (/^5[1-5]/.test(cleaned)) return "MasterCard";
    if (/^62/.test(cleaned)) return "UnionPay";
    if (/^3[47]/.test(cleaned)) return "American Express";
    if (/^6(?:011|5)/.test(cleaned)) return "Discover";
    return "Unknown";
  };

  const getCardTypeIcon = (type) => {
    switch (type) {
      case "Visa":
        return <FaCcVisa size={24} className="text-blue-500" />;
      case "MasterCard":
        return <FaCcMastercard size={24} className="text-blue-500" />;
      case "UnionPay":
        return <FaCreditCard size={24} className="text-blue-500" />;
      case "American Express":
        return <FaCcAmex size={24} className="text-blue-500" />;
      case "Discover":
        return <FaCcDiscover size={24} className="text-blue-500" />;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "card_number") {
      const detectedType = detectCardType(value);
      setCardType(detectedType);
    }
  };

  // Handle PayFast return/cancel
  useEffect(() => {
    const paymentStatus = searchParams.get("payment_status");
    const orderId = searchParams.get("order_id");
    if (paymentStatus === "COMPLETE" && orderId) {
      // Navigate to success page for debit/credit card payments
      navigate("/payment-success", {
        state: { orderID: orderId, message: "You'll receive an email shortly." },
      });
    } else if (paymentStatus === "CANCELLED") {
      toast.error("Payment was cancelled.", { position: "top-center" });
      setSelectedPayment("card"); // Return to card payment form
    }
  }, [searchParams, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.phone_number ||
      !formData.card_holder_name ||
      !formData.card_number ||
      !formData.expiration_date ||
      !formData.cvv
    ) {
      toast.error("Please fill in all required fields.", { position: "top-center" });
      return;
    }

    if (!mutation || typeof mutation.mutate !== "function") {
      console.error("Mutation is not properly initialized");
      toast.error("Payment service is not available. Please try again.", {
        position: "top-center",
      });
      return;
    }

    try {
      mutation.mutate(
        {
          path: pathh,
          payload: formData,
        },
        {
          onSuccess: (data) => {
            console.log("Payment details submitted successfully:", data);
            const orderId = data?.order_id;
            if (data?.payfast_url) {
              window.location.href = data?.payfast_url;
              localStorage.setItem("payfast_url",data?.payfast_url)
              localStorage.setItem("orderidd",data?.order_id)
              localStorage.clear();
              // Redirect to PayFast with return/cancel URLs
              // const returnUrl = `${window.location.origin}/checkout?payment_status=COMPLETE&order_id=${data?.order_id}`;
              // const cancelUrl = `${window.location.origin}/checkout?payment_status=CANCELLED`;
              // window.location.href = `${data.payfast_url}&return_url=${encodeURIComponent(
                // returnUrl
              // )}&cancel_url=${encodeURIComponent(cancelUrl)}`;
            } else {
              // Fallback to success page if no PayFast URL (non-PayFast flow)
              navigate("/payment-success", {
                state: {
                  orderID: data?.order_id,
                  message: "You'll receive an email shortly.",
                },
              });
            }
          },
          onError: (error) => {
            console.error("Error submitting payment details:", error);
            toast.error("Failed to process payment.", { position: "top-center" });
          },
        }
      );
    } catch (error) {
      console.error("Error calling mutation:", error);
      toast.error("An error occurred. Please try again.", { position: "top-center" });
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
          {selectedPayment !== 2 && (
            <div className="gap-2 text-[10px] font-semibold flex items-center">
              <div
                className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${
                  selectedPayment === "bank" ? "border-primary" : "border-gray-200"
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
                className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${
                  selectedPayment === "card" ? "border-primary" : "border-gray-200"
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
          )}
        </div>

        {selectedPayment === "card" && (
          <div className="flex">
            <div className="w-full">
              <div className="w-[100%] lg:w-[80%]">
                <form className="bg-white p-8 rounded-lg space-y-3" onSubmit={handleSubmit}>
                  <p className="font-semibold text-xl my-4">Personal Information</p>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="full_name" className="font-medium">Full Name</label>
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
                    <label htmlFor="email" className="font-medium">Email</label>
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
                    <label htmlFor="phone_number" className="font-medium">Phone Number</label>
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
                  <p className="font-semibold text-xl my-4">Payment Information</p>
                  <p className="font-medium">Credit/Debit Card</p>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="card_holder_name" className="font-medium">Card Holder Name</label>
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
                    <label htmlFor="card_number" className="font-medium">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="card_number"
                        placeholder="Enter Card Number"
                        name="card_number"
                        value={formData.card_number}
                        className="w-full p-2 rounded-md border border-gray-400 pr-12"
                        onChange={handleChange}
                        required
                      />
                      {cardType && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                          {getCardTypeIcon(cardType)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="expiration_date" className="font-medium">Expiration Date</label>
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
                      <label htmlFor="cvv" className="font-medium">CVV</label>
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
                  <div className="text-xs">You will receive an email shortly.</div>
                  <div className="flex gap-8">
                    <button
                      type="button"
                      className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md"
                      onClick={() => navigate(-1)} // Navigate back
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
              <CheckoutcardDetails name={name?.name} type={ name?.type} />
            </div>
          </div>
        )}
        {selectedPayment === "bank" && (
          <CheckOutBankTransfer
            pathh={pathh}
            name={name?.name}
            setorderID1={setOrderID}
            set={setSelectedPayment}
          />
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
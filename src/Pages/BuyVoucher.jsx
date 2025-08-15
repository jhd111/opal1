import React, { useState, useEffect } from "react";
import img from "../assets/voc.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import CollapsRow from "../Components/Collapsrow";
import { GoCheck } from "react-icons/go";
import { CheckVoucherAvailabilty } from "../Services/CheckVoucherAvailabilty";
import { NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const BuyVoucher = () => {
  const mutation = CheckVoucherAvailabilty();
  const location = useLocation();
  const { object, pathh } = location.state || {};
  
  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(1);
  const [vouchersAvailable, setVouchersAvailable] = useState(false);
  const [isCheckingVouchers, setIsCheckingVouchers] = useState(true);
  const [maxCount, setMaxCount] = useState(0);

  localStorage.setItem('count', count);
  localStorage.setItem("price", object?.price);

  // Function to check voucher availability
  function VoucherAvailabilty() {
    setIsCheckingVouchers(true);
    
    // Try with JSON payload instead of FormData
    const payload = {
      product_name: object.name
    };
   
    mutation.mutate(
      {
        payload: payload,
        path: "check-voucher-availability/",
        queryKey: "our-inventory",
      },
      {
        onSuccess: (data) => {
          console.log("Voucher availability response:", data);
          
          // Check if vouchers are present
          if (data.vouchers_present === true) {
            setMaxCount(data?.details?.[0]?.count || 0);
            setVouchersAvailable(true);
            toast.success(data.message || "Vouchers are available");
          } else {
            setVouchersAvailable(false);
            toast.error("Vouchers are not present");
          }
          setIsCheckingVouchers(false);
        },
        onError: (error) => {
          console.error('Voucher check error:', error);
          setVouchersAvailable(false);
          setIsCheckingVouchers(false);
          
          // Better error handling
          const errorMessage = error.response?.data?.error || 
                              error.response?.data?.message || 
                              error.message || 
                              "Error checking voucher availability";
          toast.error(errorMessage);
        },
      }
    );
  }

  // Run voucher availability check when component mounts
  useEffect(() => {
    if (object?.name) {
      VoucherAvailabilty();
    }
  }, [object?.name]);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-[90%] md:w-[60%] mx-auto mt-10 gap-10">
        <div className="w-full space-y-10">
          <div className="">
            <p className="text-sm text-gray-500">
              Home / CompTIA /{" "}
              <span className="text-primary">
                {object.name}
              </span>
            </p>
          </div>
          <img src={object.image_url} alt="" className="w-full" />
        </div>
        <div className="w-full">
          <div className="space-y-8 border-b pb-4">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold dm-sans">
              {object.name}
            </p>
            <p className="text-2xl font-semibold text-[#39B856] poppins">
              RS {""} {Math.floor(object.price)}
            </p>
          </div>
          <p className="text-xs poppins py-4">
            {object.detail}
          </p>
          
          {/* Voucher Status Indicator */}
          <div className="mb-4">
            {isCheckingVouchers ? (
              <div className="text-yellow-600 text-sm font-medium">
                Checking voucher availability...
              </div>
            ) : vouchersAvailable ? (
              <div className="text-green-600 text-sm font-medium flex items-center gap-2">
                <GoCheck className="text-green-600" />
                Vouchers Available
              </div>
            ) : (
              <div className="text-red-600 text-sm font-medium">
                ❌ Vouchers Not Available
              </div>
            )}
          </div>

          <div className="flex gap-5 mt-5">
            <div className="flex items-center gap-5 rounded-3xl px-4 py-3 bg-slate-100">
              <span className="text-xs">
                <FaMinus onClick={() => setcount((e) => (e > 0 ? e - 1 : e))} />
              </span>
              {count}
              <span className="text-xs">
              <FaPlus 
  onClick={() => 
    setcount((prev) => {
      if (prev < maxCount) {
        return prev + 1;
      } else {
        toast.error(`You can only buy up to ${maxCount} vouchers`);
        return prev;
      }
    })
  } 
/>

              </span>
            </div>
            
            {/* Conditional Proceed Button */}
            <div className={`rounded-3xl w-full text-center py-3 transition-all duration-300 ${
              vouchersAvailable && !isCheckingVouchers
                ? 'bg-primary text-white cursor-pointer hover:bg-primary/90' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}>
              {vouchersAvailable && !isCheckingVouchers ? (
                <NavLink 
                  to="/check-out" 
                  state={{ name: object, pathh: pathh }}
                  className="block w-full h-full"
                >
                  Proceed to Checkout
                </NavLink>
              ) : (
                <span>
                  {isCheckingVouchers ? 'Checking...' : 'Proceed to Checkout'}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center text-xs gap-2 mt-6 poppins font-medium">
            <span>
              <GoCheck className="font-bold" />
            </span>
            <label htmlFor="valid-for-pak">Validity only for Pakistan</label>
          </div>
          <div className="mt-6 poppins">
            <button className="w-full rounded-3xl poppins text-sm font-medium border-4 py-2 border-[#1018280F]">
              Details
            </button>
          </div>
          <CollapsRow />
        </div>
      </div>
    </div>
  );
};

export default BuyVoucher;
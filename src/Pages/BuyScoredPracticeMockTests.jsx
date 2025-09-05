import React, { useState, useEffect } from "react";
import img from "../assets/voc.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import CollapsRow from "../Components/Collapsrow";
import { GoCheck } from "react-icons/go";
// import { NavLink } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { CheckVoucherAvailabilty } from "../Services/CheckVoucherAvailabilty";

import { toast } from "react-toastify";
import locationicon from "../assets/locationicon.png"
import pakflag from "../assets/pakflag.png"
import { FaAngleDown,FaAngleUp  } from "react-icons/fa6";
import { Products } from "../Services/Products";

const BuyScoredPracticeMockTests = () => {
    const { data: Product, isLoading: productsLoading } = Products();

  const mutation = CheckVoucherAvailabilty();
  
  const location = useLocation();
  const { object, path } = location.state || {}; // Retrieve the passed object
  
  // All state variables defined at the top
  const [maxCount, setMaxCount] = useState(0);
  const [vouchersAvailable, setVouchersAvailable] = useState(false);
  const [isCheckingVouchers, setIsCheckingVouchers] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Pakistan',
    flag: 'PK'
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Countries array
  const countries = [
    { name: 'Pakistan', flag: 'PK' },
    { name: 'India', flag: 'IN' },
    { name: 'Bangladesh', flag: 'BD' },
    { name: 'Sri Lanka', flag: 'LK' },
    { name: 'Nepal', flag: 'NP' },
  ];

  console.log("object", object);

  localStorage.setItem('count', count);
  localStorage.setItem("price", object?.price);

  // Function to get related products from the same category
  const getRelatedProducts = () => {
    if (!Product || !Array.isArray(Product.data) || !object) return [];
  
    // Find the category that matches the current object's category
    const currentCategory = Product.data.find(
      (categoryObj) => categoryObj.category.id === object.category
    );
  
    if (!currentCategory) return [];
  
    // Return vouchers from the same category, excluding the current product
    return currentCategory.vouchers.filter(
      (voucher) => voucher.id !== object.id
    );
  };
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

  const relatedProducts = getRelatedProducts();

  return (
    <div>
      <div className=" flex flex-col lg:flex-row w-[90%] lg:w-[60%] mx-auto mt-10 gap-10 ">
        {/* Left Section - Static/Sticky on desktop, normal on mobile/tablet */}
        <div className="w-full lg:sticky lg:top-10 lg:h-fit space-y-10">
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
        
        {/* Right Section - Scrollable */}
        <div className="w-full">
          <div className=" space-y-5 lg:space-y-8  border-b pb-4">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold dm-sans">
              {object.name}
            </p>
            {object?.test_type && 
             <p className="text-sm font-semibold lg:text-3xl lg:font-bold dm-sans">
             {object?.test_type}
           </p>
            }
            <p className="text-2xl font-semibold text-[#39B856] poppins">
            RS {""} {Math.floor(object.price)}
            </p>
          </div>
          <p className="text-xs  poppins py-4 ">
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

          {/* Disclaimer Section */}
          <div className="mb-6 p-6 bg-white border border-2-[#F1F1F3] rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <GoCheck className="text-orange-600 text-lg" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 poppins">
                  Disclaimer
                </h4>
              </div>
            </div>
            <p className="text-gray-600 poppins leading-relaxed mb-6">
              This voucher is valid for one month only. Please use it within that time period.
            </p>
            
            {/* Select Country Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <img src={locationicon} alt="" />
                </div>
                <h5 className="text-lg font-medium text-gray-800 poppins">
                  Select Country
                </h5>
              </div>
              
              {/* Country Selector */}
              <div className="rounded-full lg:w-[70%] xl:w-[60%] 2xl:w-[30%] bg-[#F2F4F7] p-4 flex justify-between">
               <div className="flex gap-2">
                <img src={pakflag} alt="" className="w-10 h-7 " />
                <div><FaAngleUp className="text-sm"/> <FaAngleDown className="text-sm"/></div>
               </div>
               <span className="text-[#1D2939] font-medium"> Pakistan</span> 
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className=" flex items-center gap-5 rounded-3xl px-4 py-3 bg-slate-100">
              <span className="text-xs">
                <FaMinus  onClick={() => setcount((e) => (e > 0 ? e - 1 : e))} />
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
                  state={{ name: object, pathh: path }}
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
              <GoCheck className="font-bold " />
            </span>
            <label htmlFor="valid-for-pak ">Validity only for Pakistan</label>
          </div>
          <div className=" mt-6 poppins">
            <button className="w-full rounded-3xl poppins text-sm font-medium border-4 py-2 border-[#1018280F]">
              Details
            </button>
          </div>
          <CollapsRow />
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className="w-[90%] lg:w-[60%] mx-auto mt-10">
        <div className="text-[#0F172A] text-3xl font-medium inter">
          Related Products
        </div>
        <div className="text-gray-600 text-sm mt-2">
          People also buy
        </div>
        
        {/* Related Products Grid */}
        {!productsLoading && relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 poppins">
                  {product.name}
                </h3>
                {product.type && (
                  <p className="text-sm text-gray-600 mb-2">
                    {product.type}
                  </p>
                )}
                {/* <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p> */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-[#0F172A] poppins">
                    RS {Math.floor(product.price)}
                  </span>
                  {/* <NavLink
                    to={`/buy-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    state={{ object: product, path: path }}
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
                  >
                    View Details
                  </NavLink> */}
                </div>
                {product.validity && (
                  <div className="mt-2 text-xs text-gray-500">
                    Valid for {product.validity} days
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : productsLoading ? (
          <div className="mt-6 text-center text-gray-500">
            Loading related products...
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-500">
            No related products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyScoredPracticeMockTests
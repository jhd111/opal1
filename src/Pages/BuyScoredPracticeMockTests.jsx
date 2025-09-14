import React, { useState, useEffect } from "react";
import img from "../assets/voc.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import CollapsRow from "../Components/Collapsrow";
import { GoCheck } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { CheckVoucherAvailabilty } from "../Services/CheckVoucherAvailabilty";
import { toast } from "react-toastify";
import locationicon from "../assets/locationicon.png";
import ukflag from "../assets/uk.png"
import pakflag from "../assets/pakflag.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Products } from "../Services/Products";

const BuyScoredPracticeMockTests = () => {
  const { data: Product, isLoading: productsLoading } = Products();

  const mutation = CheckVoucherAvailabilty();

  const location = useLocation();
  const { object, path } = location.state || {}; // Retrieve the passed object

  // Get all vouchers from the passed object
  const vouchers = Array.isArray(object) ? object : [object];

  // All state variables defined at the top
  const [selectedVoucher, setSelectedVoucher] = useState(vouchers[0] || null);
  const [maxCount, setMaxCount] = useState(0);
  const [vouchersAvailable, setVouchersAvailable] = useState(false);
  const [isCheckingVouchers, setIsCheckingVouchers] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Pakistan",
    flag: "PK",
    key: "pakistan"
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isVoucherDropdownOpen, setIsVoucherDropdownOpen] = useState(false);

  // Get the current category name
  const getCurrentCategoryName = () => {
    if (!Product || !selectedVoucher) return "";
    
    const categoryData = Product.data?.find(cat => 
      cat.vouchers.some(voucher => voucher.id === selectedVoucher.id)
    );
    
    return categoryData?.category?.name || "";
  };

  // Get available countries from all vouchers in Pearson PTE Voucher category
  const getAvailableCountriesFromCategory = () => {
    const currentCategory = getCurrentCategoryName();
    if (currentCategory !== "Pearson PTE Voucher") return [];

    // Get all vouchers from the Pearson PTE Voucher category
    const pearsonCategory = Product?.data?.find(cat => cat.category.name === "Pearson PTE Voucher");
    if (!pearsonCategory) return [];

    // Collect all country pricing data from all vouchers in this category
    const allCountries = new Map();

    pearsonCategory.vouchers.forEach(voucher => {
      if (voucher.country_pricing && Object.keys(voucher.country_pricing).length > 0) {
        Object.entries(voucher.country_pricing).forEach(([countryKey, price]) => {
          const countryName = countryKey.charAt(0).toUpperCase() + countryKey.slice(1);
          let flagCode = "PK"; // default

          // Map country names to flag codes
          switch(countryKey.toLowerCase()) {
            case "pakistan":
              flagCode = "PK";
              break;
            
            case "uk":
              flagCode = "GB";
              break;
            default:
              flagCode = "PK";
          }

          // Only add if not already exists or if current voucher has this country
          if (!allCountries.has(countryKey) || voucher.id === selectedVoucher?.id) {
            allCountries.set(countryKey, {
              name: countryName,
              flag: flagCode,
              key: countryKey,
              price: voucher.id === selectedVoucher?.id ? price : (allCountries.get(countryKey)?.price || price)
            });
          }
        });
      }
    });

    // If no countries found from any voucher, return default countries with current voucher price
    if (allCountries.size === 0) {
      return [
        { name: "Pakistan", flag: "PK", key: "pakistan", price: selectedVoucher?.price || 0 },
        { name: "India", flag: "IN", key: "india", price: selectedVoucher?.price || 0 },
        { name: "UK", flag: "GB", key: "uk", price: selectedVoucher?.price || 0 }
      ];
    }

    return Array.from(allCountries.values());
  };

  // Get current price based on selected country and voucher
  const getCurrentPrice = () => {
    const currentCategory = getCurrentCategoryName();
    
    if (currentCategory === "Pearson PTE Voucher" && selectedVoucher?.country_pricing) {
      const countryPrice = selectedVoucher.country_pricing[selectedCountry.key];
      if (countryPrice !== undefined) {
        return countryPrice;
      }
    }
    
    return selectedVoucher?.price || 0;
  };

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };

  console.log("object", object);
  console.log("vouchers", vouchers);
  console.log("selectedVoucher", selectedVoucher);
  console.log("current category:", getCurrentCategoryName());

  localStorage.setItem("count", count);
  localStorage.setItem("price", getCurrentPrice());

  // Function to get related categories (excluding current category)
  const getRelatedCategories = () => {
    if (!Product || !Array.isArray(Product.data) || !selectedVoucher) return [];

    // Filter out the current category and return other categories
    return Product.data.filter(
      (categoryObj) => categoryObj.category.id !== selectedVoucher.category
    );
  };

  // Function to check voucher availability
  function VoucherAvailabilty() {
    if (!selectedVoucher) return;
    
    setIsCheckingVouchers(true);

    // Try with JSON payload instead of FormData
    const payload = {
      product_name: selectedVoucher.name,
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
          console.error("Voucher check error:", error);
          setVouchersAvailable(false);
          setIsCheckingVouchers(false);

          // Better error handling
          const errorMessage =
            error.response?.data?.error ||
            error.response?.data?.message ||
            error.message ||
            "Error checking voucher availability";
          toast.error(errorMessage);
        },
      }
    );
  }

  // Reset selectedVoucher when navigating to a new category
  useEffect(() => {
    // Reset to first voucher of new category when object changes
    const newFirstVoucher = vouchers[0] || null;
    if (newFirstVoucher && newFirstVoucher.id !== selectedVoucher?.id) {
      setSelectedVoucher(newFirstVoucher);
      setcount(1); // Reset count as well
      // Reset country selection when changing voucher
      setSelectedCountry({ name: "Pakistan", flag: "PK", key: "pakistan" });
    }
  }, [object]);

  // Run voucher availability check when selectedVoucher changes
  useEffect(() => {
    if (selectedVoucher?.name) {
      VoucherAvailabilty();
    }
  }, [selectedVoucher?.name]);

  // Handle voucher selection from dropdown
  const handleVoucherSelect = (voucher) => {
    setSelectedVoucher(voucher);
    setIsVoucherDropdownOpen(false);
    setcount(1); // Reset count when changing voucher
    // Reset country selection when changing voucher
    setSelectedCountry({ name: "Pakistan", flag: "PK", key: "pakistan" });
  };

  // Check if current voucher is Pearson PTE Voucher (should not show voucher dropdown)
  const shouldShowVoucherDropdown = getCurrentCategoryName() !== "Pearson PTE Voucher" && vouchers.length > 1;
  
  // Check if should show country dropdown
  const shouldShowCountryDropdown = getCurrentCategoryName() === "Pearson PTE Voucher";

  const relatedCategories = getRelatedCategories();
  const availableCountries = getAvailableCountriesFromCategory();

  // Add safety check for selectedVoucher
  if (!selectedVoucher) {
    return <div>No product data available</div>;
  }
  const getFlagImage = (countryKey) => {
    switch(countryKey.toLowerCase()) {
      case "pakistan":
        return pakflag;
      case "uk":
        return ukflag;
      default:
        return pakflag; // default to Pakistan flag
    }
  };
  
  return (
    <div>
      <div className=" flex flex-col lg:flex-row w-[90%] lg:w-[70%] mx-auto mt-10 gap-10 ">
        {/* Left Section - Static/Sticky on desktop, normal on mobile/tablet */}
        <div className="w-full lg:sticky lg:top-10 lg:h-fit space-y-10">
          <div className="">
            <p className="text-sm text-gray-500">
              Home / CompTIA /{" "}
              <span className="text-primary">{selectedVoucher.name}</span>
            </p>
          </div>
          <img src={selectedVoucher.image_url} alt="" className="w-full" />
        </div>

        {/* Right Section - Scrollable */}
        <div className="w-full">
          <div className=" space-y-5 lg:space-y-8  border-b pb-4">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold dm-sans">
              {selectedVoucher.name}
            </p>
            <p className="text-2xl font-semibold text-[#39B856] poppins">
              RS {""} {Math.floor(getCurrentPrice())}
            </p>
          </div>
          <p className="text-xs  poppins py-4 ">{selectedVoucher.description}</p>

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
              This voucher is valid for one month only. Please use it within
              that time period.
            </p>

            {/* Voucher Type Selector - Only show if not Pearson PTE Voucher and multiple vouchers available */}
            {shouldShowVoucherDropdown && (
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <GoCheck className="text-blue-600" />
                  </div>
                  <h5 className="text-lg font-medium text-gray-800 poppins">
                    Select Type
                  </h5>
                </div>

                {/* Voucher Type Dropdown */}
                <div className="relative lg:w-[80%] xl:w-[80%] 2xl:w-[50%]">
                  <div 
                    className="rounded-full bg-[#F2F4F7] p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => setIsVoucherDropdownOpen(!isVoucherDropdownOpen)}
                  >
                    <span className="text-[#1D2939] font-medium">
                      {selectedVoucher.type || selectedVoucher.name}
                    </span>
                    <div className="flex flex-col">
                      {isVoucherDropdownOpen ? (
                        <FaAngleUp className="text-sm" />
                      ) : (
                        <FaAngleDown className="text-sm" />
                      )}
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {isVoucherDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
                      {vouchers.map((voucher) => (
                        <div
                          key={voucher.id}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                          onClick={() => handleVoucherSelect(voucher)}
                        >
                          <span className="text-[#1D2939] font-medium">
                            {voucher.type || voucher.name}
                          </span>
                          <span className="text-[#39B856] font-semibold">
                            Rs. {Math.floor(voucher.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Select Country Section - Only for Pearson PTE Voucher Category */}
            {shouldShowCountryDropdown && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <img src={locationicon} alt="" />
                  </div>
                  <h5 className="text-lg font-medium text-gray-800 poppins">
                    Select Country
                  </h5>
                </div>

                {/* Country Selector Dropdown */}
                <div className="relative lg:w-[70%] xl:w-[60%] 2xl:w-[30%]">
                  <div 
                    className="rounded-full bg-[#F2F4F7] p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  >
                    <div className="flex gap-2 items-center">
                      <img src={getFlagImage(selectedCountry.key)}  alt="" className="w-10 h-7" />
                      <div className="flex flex-col">
                        {isCountryDropdownOpen ? (
                          <FaAngleUp className="text-sm" />
                        ) : (
                          <FaAngleDown className="text-sm" />
                        )}
                      </div>
                    </div>
                    <span className="text-[#1D2939] font-medium">{selectedCountry.name}</span>
                  </div>

                  {/* Country Dropdown Menu */}
                  {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-20">
                      {availableCountries.map((country) => (
                        <div
                          key={country.key}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                          onClick={() => handleCountrySelect(country)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#1D2939] font-medium">
                              {country.name}
                            </span>
                          </div>
                          <span className="text-[#39B856] font-semibold">
                            Rs. {Math.floor(country.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-5 mt-5">
            <div className=" flex items-center gap-5 rounded-3xl px-4 py-3 bg-slate-100">
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
                        toast.error(
                          `You can only buy up to ${maxCount} vouchers`
                        );
                        return prev;
                      }
                    })
                  }
                />
              </span>
            </div>
            {/* Conditional Proceed Button */}
            <div
              className={`rounded-3xl w-full text-center py-3 transition-all duration-300 ${
                vouchersAvailable && !isCheckingVouchers
                  ? "bg-primary text-white cursor-pointer hover:bg-primary/90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {vouchersAvailable && !isCheckingVouchers ? (
                <NavLink
                  to="/check-out"
                  state={{ name: selectedVoucher, pathh: path }}
                  className="block w-full h-full"
                >
                  Proceed to Checkout
                </NavLink>
              ) : (
                <span>
                  {isCheckingVouchers ? "Checking..." : "Proceed to Checkout"}
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

      {/* Related Categories Section */}
      <div className="w-[90%] lg:w-[70%] mx-auto mt-10">
        <div className="text-[#0F172A] text-3xl font-medium inter">
          Related Products
        </div>
        <div className="text-gray-600 text-sm mt-2 mb-4">
          Other Products you might like
        </div>

        {/* Related Categories Grid */}
        {!productsLoading && relatedCategories.length > 0 ? (
          <div className=" mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Product?.data?.map((categoryData, categoryIndex) => (
                <div
                  key={categoryData.category.id}
                  className="bg-white rounded-lg border border-[#E2E8F0] shadow-[0_0_8px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col"
                >
                  {/* Category Image - using first voucher's image as category representative */}
                  <div className="p-5 pb-0">
                    <img
                      src={categoryData.vouchers[0]?.image_url}
                      alt={categoryData.category.name}
                      className="w-[100%] lg:w-full lg:h-36 2xl:h-60 object-contain md:object-cover rounded"
                    />
                  </div>

                  {/* Category Content */}
                  <div className="p-5 pt-3 flex flex-col flex-grow">
                    {/* Category Title */}
                    <h3 className="text-md inter font-normal 2xl:text-lg mb-2">
                      {categoryData.category.name}
                    </h3>

                    {/* Original Price (strikethrough) */}
                    <p className="text-red-500 text-md font-normal mb-2 line-through">
                      Rs. 70,199
                    </p>

                    {/* Current Price */}
                    <p className="text-[#0F172A] text-md md:text-lg inter font-bold mb-2">
                      Rs. 60,999
                    </p>

                    {/* Buy Now Button */}
                    <NavLink
                      to="/BuyScoredPracticeMockTests"
                      state={{
                        object: categoryData.vouchers,
                        path: "get-payment-detail/",
                      }}
                      className="w-full block text-center text-sm md:text-lg bg-[#ECECEC] hover:bg-gray-300 text-black be-vietnam font-semibold py-2 px-4 rounded transition-colors mt-auto"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : productsLoading ? (
          <div className="mt-6 text-center text-gray-500">
            Loading related categories...
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-500">
            No other categories available.
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {(isVoucherDropdownOpen || isCountryDropdownOpen) && (
        <div 
          className="fixed inset-0 z-5" 
          onClick={() => {
            setIsVoucherDropdownOpen(false);
            setIsCountryDropdownOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default BuyScoredPracticeMockTests;
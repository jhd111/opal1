import React, { useState, useEffect } from "react";
import img from "../assets/voc.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import CollapsRow from "../Components/Collapsrow";
import { GoCheck } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import { CheckVoucherAvailabilty } from "../Services/CheckVoucherAvailabilty";
import { toast } from "react-toastify";
import locationicon from "../assets/locationicon.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Products } from "../Services/Products";

const countryNames = {
  af: "Afghanistan",
  al: "Albania",
  dz: "Algeria",
  as: "American Samoa",
  ad: "Andorra",
  ao: "Angola",
  ag: "Antigua and Barbuda",
  ar: "Argentina",
  am: "Armenia",
  au: "Australia",
  at: "Austria",
  az: "Azerbaijan",
  bs: "Bahamas",
  bh: "Bahrain",
  bd: "Bangladesh",
  bb: "Barbados",
  by: "Belarus",
  be: "Belgium",
  bz: "Belize",
  bj: "Benin",
  bt: "Bhutan",
  bo: "Bolivia",
  ba: "Bosnia and Herzegovina",
  bw: "Botswana",
  br: "Brazil",
  bn: "Brunei",
  bg: "Bulgaria",
  bf: "Burkina Faso",
  bi: "Burundi",
  kh: "Cambodia",
  cm: "Cameroon",
  ca: "Canada",
  cv: "Cape Verde",
  cf: "Central African Republic",
  td: "Chad",
  cl: "Chile",
  cn: "China",
  co: "Colombia",
  km: "Comoros",
  cg: "Congo",
  cd: "Democratic Republic of the Congo",
  cr: "Costa Rica",
  hr: "Croatia",
  cu: "Cuba",
  cy: "Cyprus",
  cz: "Czech Republic",
  dk: "Denmark",
  dj: "Djibouti",
  dm: "Dominica",
  do: "Dominican Republic",
  ec: "Ecuador",
  eg: "Egypt",
  sv: "El Salvador",
  gq: "Equatorial Guinea",
  er: "Eritrea",
  ee: "Estonia",
  sz: "Eswatini",
  et: "Ethiopia",
  fj: "Fiji",
  fi: "Finland",
  fr: "France",
  ga: "Gabon",
  gm: "Gambia",
  ge: "Georgia",
  de: "Germany",
  gh: "Ghana",
  gr: "Greece",
  gd: "Grenada",
  gt: "Guatemala",
  gn: "Guinea",
  gw: "Guinea-Bissau",
  gy: "Guyana",
  ht: "Haiti",
  hn: "Honduras",
  hu: "Hungary",
  is: "Iceland",
  in: "India",
  id: "Indonesia",
  ir: "Iran",
  iq: "Iraq",
  ie: "Ireland",
  il: "Israel",
  it: "Italy",
  jm: "Jamaica",
  jp: "Japan",
  jo: "Jordan",
  kz: "Kazakhstan",
  ke: "Kenya",
  ki: "Kiribati",
  kw: "Kuwait",
  kg: "Kyrgyzstan",
  la: "Laos",
  lv: "Latvia",
  lb: "Lebanon",
  ls: "Lesotho",
  lr: "Liberia",
  ly: "Libya",
  li: "Liechtenstein",
  lt: "Lithuania",
  lu: "Luxembourg",
  mg: "Madagascar",
  mw: "Malawi",
  my: "Malaysia",
  mv: "Maldives",
  ml: "Mali",
  mt: "Malta",
  mh: "Marshall Islands",
  mr: "Mauritania",
  mu: "Mauritius",
  mx: "Mexico",
  fm: "Micronesia",
  md: "Moldova",
  mc: "Monaco",
  mn: "Mongolia",
  me: "Montenegro",
  ma: "Morocco",
  mz: "Mozambique",
  mm: "Myanmar",
  na: "Namibia",
  nr: "Nauru",
  np: "Nepal",
  nl: "Netherlands",
  nz: "New Zealand",
  ni: "Nicaragua",
  ne: "Niger",
  ng: "Nigeria",
  kp: "North Korea",
  mk: "North Macedonia",
  no: "Norway",
  om: "Oman",
  pk: "Pakistan",
  pw: "Palau",
  pa: "Panama",
  pg: "Papua New Guinea",
  py: "Paraguay",
  pe: "Peru",
  ph: "Philippines",
  pl: "Poland",
  pt: "Portugal",
  qa: "Qatar",
  ro: "Romania",
  ru: "Russia",
  rw: "Rwanda",
  kn: "Saint Kitts and Nevis",
  lc: "Saint Lucia",
  vc: "Saint Vincent and the Grenadines",
  ws: "Samoa",
  sm: "San Marino",
  st: "Sao Tome and Principe",
  sa: "Saudi Arabia",
  sn: "Senegal",
  rs: "Serbia",
  sc: "Seychelles",
  sl: "Sierra Leone",
  sg: "Singapore",
  sk: "Slovakia",
  si: "Slovenia",
  sb: "Solomon Islands",
  so: "Somalia",
  za: "South Africa",
  kr: "South Korea",
  ss: "South Sudan",
  es: "Spain",
  lk: "Sri Lanka",
  sd: "Sudan",
  sr: "Suriname",
  se: "Sweden",
  ch: "Switzerland",
  sy: "Syria",
  tj: "Tajikistan",
  tz: "Tanzania",
  th: "Thailand",
  tl: "Timor-Leste",
  tg: "Togo",
  to: "Tonga",
  tt: "Trinidad and Tobago",
  tn: "Tunisia",
  tr: "Turkey",
  tm: "Turkmenistan",
  tv: "Tuvalu",
  ug: "Uganda",
  ua: "Ukraine",
  ae: "United Arab Emirates",
  gb: "United Kingdom",
  us: "United States",
  uy: "Uruguay",
  uz: "Uzbekistan",
  vu: "Vanuatu",
  va: "Vatican City",
  ve: "Venezuela",
  vn: "Vietnam",
  ye: "Yemen",
  zm: "Zambia",
  zw: "Zimbabwe"
};

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

  // default: show "Select Country" (not Pakistan)
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Select Country",
    flag: "",
    key: ""
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isVoucherDropdownOpen, setIsVoucherDropdownOpen] = useState(false);

  // 💰 Exchange Rate State
  const [usdRate, setUsdRate] = useState(null);
  const [loadingRate, setLoadingRate] = useState(true);

  // Fetch USD/PKR rate on mount
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/PKR');
        const data = await response.json();

        if (data.result === "success" && data.rates?.USD) {
          setUsdRate(data.rates.USD);
        } else {
          setUsdRate(0.0036); // fallback rate
          console.warn("Using fallback USD rate");
        }
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
        setUsdRate(0.0036); // fallback on error
      } finally {
        setLoadingRate(false);
      }
    };

    fetchExchangeRate();
  }, []);

  // Helper to check if current category is Pearson PTE
  const isPearsonCategory = () => {
    const categoryName = getCurrentCategoryName();
    return categoryName === "Pearson PTE Voucher" || categoryName === "Pearson Pte Voucher";
  };

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

    const pearsonCategory = Product?.data?.find(cat => cat.category.name === "Pearson PTE Voucher");
    if (!pearsonCategory) return [];

    const allCountries = new Map();

    pearsonCategory.vouchers.forEach(voucher => {
      if (voucher.country_pricing && Object.keys(voucher.country_pricing).length > 0) {
        Object.entries(voucher.country_pricing).forEach(([countryKey, price]) => {
          const raw = countryKey.toLowerCase();
          let iso = raw;
          if (raw === "uk") iso = "gb";

          let displayName = "";
          if (iso.length === 2 && countryNames[iso]) {
            displayName = countryNames[iso];
          } else if (countryNames[raw]) {
            displayName = countryNames[raw];
          } else {
            displayName = raw.replace(/[_-]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
          }

          const flagIso = iso.length === 2 ? iso : "";

          if (!allCountries.has(countryKey) || voucher.id === selectedVoucher?.id) {
            allCountries.set(countryKey, {
              name: displayName,
              flagIso: flagIso,
              key: countryKey,
              price: voucher.id === selectedVoucher?.id ? price : (allCountries.get(countryKey)?.price || price)
            });
          }
        });
      }
    });

    if (allCountries.size === 0) {
      return [
        { name: "Pakistan", flagIso: "pk", key: "pakistan", price: selectedVoucher?.price || 0 },
        { name: "India", flagIso: "in", key: "india", price: selectedVoucher?.price || 0 },
        { name: "United Kingdom", flagIso: "gb", key: "uk", price: selectedVoucher?.price || 0 }
      ];
    }

    return Array.from(allCountries.values());
  };

  // 💰 Get display price and symbol based on country and category
  const getDisplayPriceAndSymbol = () => {
    const isPearson = isPearsonCategory();
    const originalPrice = selectedVoucher?.price || 0;
    const isPakistan =
      selectedCountry.key === "pk" ||
      selectedCountry.key === "pakistan" ||
      selectedCountry.name === "Pakistan";

    // For non-Pearson → always PKR
    if (!isPearson) {
      return { price: Math.floor(originalPrice), symbol: "Rs." };
    }

    // For Pearson + Pakistan → PKR
    if (isPakistan) {
      return { price: Math.floor(originalPrice), symbol: "Rs." };
    }

    // For Pearson + Non-Pakistan → USD (if rate available)
    if (usdRate) {
      const usdPrice = originalPrice * usdRate;
      return { price: usdPrice.toFixed(2), symbol: "$" };
    }

    // Fallback
    return { price: Math.floor(originalPrice), symbol: "Rs." };
  };

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry({
      name: country.name || "Select Country",
      flag: country.flagIso || "",
      key: country.key || ""
    });
    setIsCountryDropdownOpen(false);
  };

  console.log("object", object);
  console.log("vouchers", vouchers);
  console.log("selectedVoucher", selectedVoucher);
  console.log("current category:", getCurrentCategoryName());

  // 💾 Auto-sync localStorage when selections change
  useEffect(() => {
    if (!selectedVoucher) return;

    const isPearson = isPearsonCategory();
    const originalPrice = selectedVoucher.price || 0;
    const isPakistan =
      selectedCountry.key === "pk" ||
      selectedCountry.key === "pakistan" ||
      selectedCountry.name === "Pakistan";

    // Always store PKR (source of truth)
    localStorage.setItem("price_pkr", originalPrice.toString());

    // For Pearson + Non-Pakistan: calculate & store USD
    if (isPearson && !isPakistan && usdRate) {
      const usdPrice = (originalPrice * usdRate).toFixed(2);
      localStorage.setItem("price_usd", usdPrice);
      localStorage.setItem("price_display", usdPrice);
      localStorage.setItem("price_currency", "$");
    } else {
      // For ALL OTHER cases: Pakistan OR non-Pearson → use PKR
      localStorage.removeItem("price_usd"); // clean up if switching from USD
      localStorage.setItem("price_display", Math.floor(originalPrice).toString());
      localStorage.setItem("price_currency", "Rs.");
    }

    // Also store other essentials
    localStorage.setItem("count", count.toString());
    localStorage.setItem("selected_country", JSON.stringify(selectedCountry));
    localStorage.setItem("voucher_id", selectedVoucher.id?.toString() || "");
    localStorage.setItem("voucher_name", selectedVoucher.name || "");
    localStorage.setItem("category_name", getCurrentCategoryName());

  }, [count, selectedCountry, selectedVoucher, usdRate]);

  // Function to get related categories (excluding current category)
  const getRelatedCategories = () => {
    if (!Product || !Array.isArray(Product.data) || !selectedVoucher) return [];

    return Product.data.filter(
      (categoryObj) => categoryObj.category.id !== selectedVoucher.category
    );
  };

  // Function to check voucher availability
  function VoucherAvailabilty() {
    if (!selectedVoucher) return;
    
    setIsCheckingVouchers(true);

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
    const newFirstVoucher = vouchers[0] || null;
    if (newFirstVoucher && newFirstVoucher.id !== selectedVoucher?.id) {
      setSelectedVoucher(newFirstVoucher);
      setcount(1);
      setSelectedCountry({ name: "Select Country", flag: "", key: "" });
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
    setcount(1);
    setSelectedCountry({ name: "Select Country", flag: "", key: "" });
  };

  // Show dropdown for all categories EXCEPT "Pearson PTE Voucher"
  const shouldShowVoucherDropdown = getCurrentCategoryName() !== "Pearson PTE Voucher";
  
  // Check if should show country dropdown
  const shouldShowCountryDropdown = getCurrentCategoryName() === "Pearson PTE Voucher";

  const relatedCategories = getRelatedCategories();
  const availableCountries = getAvailableCountriesFromCategory();

  // Add safety check for selectedVoucher
  if (!selectedVoucher) {
    return <div>No product data available</div>;
  }

  // Dynamic flag URL helper
  const getFlagImage = (countryIdentifier) => {
    if (!countryIdentifier) {
      return `https://flagcdn.com/w40/gb.png`;
    }

    const key = String(countryIdentifier).toLowerCase();

    if (key === "uk") {
      return `https://flagcdn.com/w40/gb.png`;
    }

    if (/^[a-z]{2}$/.test(key)) {
      return `https://flagcdn.com/w40/${key}.png`;
    }

    return `https://countryflagsapi.com/png/${encodeURIComponent(countryIdentifier)}`;
  };

  // Helper to clean image URLs (trim whitespace)
  const cleanImageUrl = (url) => {
    if (!url || typeof url !== "string") return "";
    return url.trim();
  };

  // Determine if user can proceed to checkout
  const isPearson = isPearsonCategory();
  const isCountrySelected = selectedCountry.name !== "Select Country";
  const canProceed = vouchersAvailable && !isCheckingVouchers && (!isPearson || isCountrySelected);

  const scrollToMockTest = () => {
    setTimeout(() => {
      const element = document.getElementById("xyzz");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  return (
    <div id="xyzz">
      <div className="flex flex-col lg:flex-row w-[90%] lg:w-[75%] mx-auto mt-10 gap-10">
        {/* Left Section - Image updates when voucher changes */}
        <div className="w-full lg:sticky lg:top-10 lg:h-fit space-y-10">
          <div className="">
            <p className="text-sm text-gray-500">
              Home / CompTIA /{" "}
              <span className="text-primary">{selectedVoucher.name}</span>
            </p>
          </div>
          <img
            src={cleanImageUrl(selectedVoucher.image_url) || "https://via.placeholder.com/600x400?text=No+Image+Available"}
            alt={selectedVoucher.name}
            className="w-full rounded-lg shadow-md"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400?text=Image+Load+Error";
            }}
          />
        </div>

        {/* Right Section - Scrollable */}
        <div className="w-full">
          <div className="space-y-5 lg:space-y-8 border-b pb-4">
            <p className="text-xl font-semibold lg:text-3xl lg:font-bold dm-sans">
              {selectedVoucher.name}
            </p>
            <p className="text-2xl font-semibold text-[#39B856] poppins">
              {getDisplayPriceAndSymbol().symbol} {getDisplayPriceAndSymbol().price}
            </p>
          </div>
          <p className="text-xs poppins py-4">{selectedVoucher.description}</p>

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

            {/* Voucher Type Selector - Only show if not Pearson PTE Voucher */}
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
                            {Math.floor(voucher.price)}
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

                {loadingRate ? (
                  <div className="text-sm text-gray-500 p-4">Loading exchange rate...</div>
                ) : (
                  <div className="relative lg:w-[70%] xl:w-[60%] 2xl:w-[30%]">
                    <div 
                      className="rounded-full bg-[#F2F4F7] p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    >
                      <span className="text-[#1D2939] font-medium">{selectedCountry.name}</span>
                      <div className="flex gap-2 items-center">
                        {selectedCountry.flag ? (
                          <img src={getFlagImage(selectedCountry.flag)} alt="" className="w-10 h-7" />
                        ) : selectedCountry.key ? (
                          <img src={getFlagImage(selectedCountry.key)} alt="" className="w-10 h-7" />
                        ) : (
                          <div className="w-10 h-7" />
                        )}
                        <div className="flex flex-col">
                          {isCountryDropdownOpen ? <FaAngleUp className="text-sm" /> : <FaAngleDown className="text-sm" />}
                        </div>
                      </div>
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
                              <img src={getFlagImage(country.flagIso || country.key)} alt={`${country.name} flag`} className="w-6 h-4 object-cover rounded" />
                              <span className="text-[#1D2939] font-medium">
                                {country.name}
                              </span>
                            </div>
                            <span className="text-[#39B856] font-semibold">
                              {country.key === "pk" || country.key === "pakistan" || country.name === "Pakistan"
                                ? `Rs. ${Math.floor(country.price)}`
                                : usdRate
                                  ? `$ ${(country.price * usdRate).toFixed(2)}`
                                  : `Rs. ${Math.floor(country.price)}`
                              }
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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
                canProceed
                  ? "bg-primary text-white cursor-pointer hover:bg-primary/90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {canProceed ? (
                <NavLink
                  to="/check-out"
                  state={{ name: selectedVoucher, pathh: path }}
                  className="block w-full h-full"
                >
                  Proceed to Checkout
                </NavLink>
              ) : (
                <span>
                  {isCheckingVouchers
                    ? "Checking..."
                    : isPearson && !isCountrySelected
                    ? "Please select a country"
                    : "Proceed to Checkout"
                  }
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
          <div className="mt-6 poppins">
            <button className="w-full rounded-3xl poppins text-sm font-medium border-4 py-2 border-[#1018280F]">
              Details
            </button>
          </div>
          <CollapsRow />
        </div>
      </div>

      {/* Related Categories Section */}
      <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
        <div className="text-[#0F172A] text-3xl font-medium inter">
          Related Products
        </div>
        <div className="text-gray-600 text-sm mt-2 mb-4">
          Other Products you might like
        </div>

        {/* Related Categories Grid */}
        {!productsLoading && relatedCategories.length > 0 ? (
          <div className="mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Product?.data?.map((categoryData, categoryIndex) => (
                <div
                  key={categoryData.category.id}
                  className="bg-white rounded-lg border border-[#E2E8F0] shadow-[0_0_8px_rgba(59,130,246,0.12)] overflow-hidden flex flex-col"
                >
                  {/* Category Image - using first voucher's image as category representative */}
                  <div className="p-5 pb-0">
                    <img
                      src={categoryData?.category.image || "https://via.placeholder.com/400x300?text=Category+Image"}
                      alt={categoryData.category.name}
                      className="w-[100%] lg:w-full lg:h-36 2xl:h-60 object-contain md:object-cover rounded"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                      }}
                    />
                  </div>

                  {/* Category Content */}
                  <div className="p-5 pt-3 flex flex-col flex-grow">
                    {/* Category Title */}
                    <h3 className="text-md inter h-12 font-normal 2xl:text-lg mb-2">
                      {categoryData.category.name}
                    </h3>

                    {/* Original Price (strikethrough) */}
                    <p className="text-gray-300 text-md font-normal mb-2">
                      Starting From
                    </p>

                    {/* Current Price */}
                    <p className="text-[#0F172A] text-md md:text-lg inter font-bold mb-2">
                      Rs {categoryData.category.price || "N/A"}
                    </p>

                    {/* Buy Now Button */}
                    <NavLink onClick={()=>scrollToMockTest()}
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
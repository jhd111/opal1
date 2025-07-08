import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const MainFooter = () => {
  const navigate = useNavigate();

  const scrollToMockTest = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("mocktest");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };
  return (
    <div className="  pt-20">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <footer className="w-full py-8 bg-white">
          <div className="container mx-auto md:px-4">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Logo and Contact Information */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#3454d1] rounded-md"></div>
                <div className="space-y-2 text-gray-700">
                  <p>info@opalinstitute.com</p>
                  <p>Whatsapp: +92 330 1646951</p>
                  <p className="max-w-xs">
                    55PJ + 4FG, Service Rd, Shaheenabad,
                    <br />
                    Gujranwala, 52290, Punjab Pakitsan
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Home Column */}
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    <NavLink to="/">Home</NavLink>
                  </h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>
                      <NavLink
                        to="/buy-pte-voucher"
                        className="hover:text-gray-700"
                      >
                        Buy PTE Vouchers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/buy-it-vouchers"
                        className="hover:text-gray-700"
                      >
                        Buy IT Vouchers
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={scrollToMockTest} className=" ">
                        Scored Practice Mock Test
                      </button>
                    </li>
                  </ul>
                </div>

                {/* About Us Column */}
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    <NavLink to="/about">About Us</NavLink>
                  </h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>
                      <NavLink to="/results" className="hover:text-gray-700">
                        Our Results
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className="hover:text-gray-700">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/testing-services"
                        className="hover:text-gray-700"
                      >
                        Testing Servies
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* Social Profiles Column */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Social Profiles</h3>
                  <div className="flex space-x-4">
                    <div className=" flex text-2xl  mt-4 gap-6">
                      <FaTwitter className="text-primary" />
                      <FaFacebookSquare className="text-primary" />
                      <FaInstagram className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Copyright */}
            <div className="text-center text-gray-500">
              <p>© 2025 Opalinstitute. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainFooter;

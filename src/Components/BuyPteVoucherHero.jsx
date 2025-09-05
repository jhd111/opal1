import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import BuyPteVoucher from "../assets/BuyPteVoucher.png";
import p1 from "../assets/images/home/p1.png";
import p2 from "../assets/images/home/p2.png";
import p3 from "../assets/images/home/p3.png";
import p4 from "../assets/images/home/p4.png";
import comptia from "../assets/images/home/comptia.png";

const BuyPteVoucherHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // check screen width
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const logos = [p1, p4, p2, p3, comptia];

  return (
    <div className="relative">
      <img src={BuyPteVoucher} alt="" />
      <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[83%] bg-white relative md:absolute rounded-md md:left-[10%] lg:left-[13%] xl:left-[8.5%] 2xl:left-[8.5%] mt-10 md:-bottom-12 lg:-bottom-16 xl:-bottom-14 2xl:-bottom-12 shadow-md mx-auto py-4 px-2">
        
        {isMobile ? (
          <Slider {...sliderSettings}>
            {logos.map((val, i) => (
              <div key={i} className="flex justify-center items-center">
                <img
                  src={val}
                  alt=""
                  className="w-[80px] object-contain"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {logos.map((val, i) => (
              <div key={i} className="flex justify-center items-center">
                <img
                  src={val}
                  alt=""
                  className="w-[100px] md:w-[120px] lg:w-[130px] xl:w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPteVoucherHero;

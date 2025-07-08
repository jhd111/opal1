import React from "react";
import bg from "../assets/images/about/bg.png";
import ceo from "../assets/images/about/ceo.png";
import Slider from "react-slick";
import img1 from "../assets/images/about/slider1.png";
import CoverflowSlider from "../Components/CoverflowSlider";
import MediaGallery from "../Components/MediaGallery";
import Sliders from "../Components/Slider";
const About = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="  w-full poppins relative">
      <div className="relative">
        <img src={bg} alt="" className="-z-30  w-full hidden md:block" />
        <div className="flex flex-col md:flex-row items-end md:absolute bottom-0 md:ps-20 ">
          <div className="md:w-3/5 hidden md:block">
            <p className="be-vietnam text-white text-6xl flex  mb-20 flex-col font-semibold">
              <span>WHY </span>OPAL INSTITUTE?
            </p>
          </div>
          <div className="md:w-2/5 ">
            <div className="bg-white  relative top-10 z-10  p-10 pb-32 space-y-4">
              <p className="text-4xl font-semibold">
                Pearson VUE Authorised Test Center
              </p>
              <p className="text-gray-500">
                Opal Institute is a Pearson VUE Authorised Testing Center which
                was established in 2021 and only deal PTE. We are a Pearson VUE
                Authorised Test Center for PVTC, PVTC-SELECT. Opal Institute has
                been consistently receiving awards in different citites of
                Pakistan.
              </p>
            </div>
            <div className="flex bg-primary z-20 relative text-white p-6 md:w-[80%] md:ms-auto">
              <div className="text-center border-r border-white">
                <p className="text-4xl">#1</p>
                <p className="text-lg">in Punjab Province</p>
              </div>
              <div className="text-center border-r border-white">
                <p className="text-4xl">1K+</p>
                <p className="text-lg">Students Enrolled</p>
              </div>
              <div className="text-center">
                <p className="text-4xl">#1</p>
                <p className="text-lg">PTE Platinum Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 py-20 w-[90%] md:w-[80%] mx-auto">
        <p className="text-5xl font-semibold">About Opal Institute</p>
        <p>
          Established in 2021, our PTE Training Institute has quickly become a
          leading name in the field of English proficiency test preparation. As
          a proud Platinum Partner of PTE, we are committed to delivering the
          highest quality training and support to help our students achieve
          their desired scores. Over the years, our dedication to excellence has
          been recognized with numerous prestigious awards from PTE, affirming
          our position as one of the top institutes in the industry. Join us and
          take the first step toward your success in the PTE exam!
        </p>
      </div>
      <div className="flex  flex-col md:flex-row gap-20 w-[90%] md:w-[80%] mb-10 mx-auto">
        <div className="w-full flex flex-col text-center items-center justify-center">
          <img src={ceo} alt="" width="400px" height="400px" />
          <div className="text-center  mt-4 plus-jakarta space-y-2 w-full">
            <p className="text-4xl text-primary font-semibold">
              M. Fahad Nawaz
            </p>
            <p className="text-sm  ">FOUNDER & CEO Opal Institute</p>
          </div>
        </div>
        <div className="w-full space-y-4">
          <p
            className="text-5xl font-semibold
          
          "
          >
            CEO Message
          </p>
          <p className="text-xl Poppins text-gray-500">
            I firmly believe that education is the key to unlocking countless
            opportunities, and at our institute, we are here to guide and
            support you every step of the way. We are proud of the achievements
            we’ve made so far, and we look forward to being part of your journey
            toward success.
            <br />
            <br /> Thank you for choosing us to be part of your PTE journey.
          </p>
        </div>
      </div>
      <div className="bg-primary relative p-20 pb-44 text-center text-white space-y-6">
        <p className="text-4xl font-semibold plus-jakarta">QUICK FACTS</p>
        <p className="inter">
          At Opal Institute, we are proud of our accomplishments. Together we
          can shape the way how English Test Preparation is done.
        </p>
        <div className="flex items-center justify-center">
          <div className="mx-auto -bottom-10 flex  items-center absolute">
            <div className="h-32 w-40 shadow bg-white"></div>
            <div className="h-36 w-40 shadow bg-white"></div>
            <div className="h-40 w-40 shadow bg-white"></div>
            <div className="h-36 w-40 shadow bg-white"></div>
            <div className="h-32 w-40 shadow bg-white"></div>
          </div>
        </div>
      </div>
      <div className=" mt-20">
        <MediaGallery />
      </div>
      <div className="">
        <div className="slider-container about mt-32  w-[80%] mx-auto text-center ">
          <Sliders />
        </div>
      </div>
    </div>
  );
};

export default About;

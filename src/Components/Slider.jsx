import React from "react";
import Slider from "react-slick";
import img1 from "../assets/images/pictures/1.png";
import img2 from "../assets/images/pictures/2.png";
import img3 from "../assets/images/pictures/3.png";
import img4 from "../assets/images/pictures/4.png";
import img5 from "../assets/images/pictures/5.png";
import img6 from "../assets/images/pictures/6.png";
import img7 from "../assets/images/pictures/7.png";
import img8 from "../assets/images/pictures/8.png";
import img9 from "../assets/images/pictures/9.png";
import img10 from "../assets/images/pictures/10.png";
import img11 from "../assets/images/pictures/11.png";

import { CertificationImages } from "../Services/Certificationsimages";

const Sliders = () => {
  const {data:CertificationImagesData,isLoading,isError}=CertificationImages()
  console.log(CertificationImagesData)
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="">
      <div className="text-xl font-semibold lg:text-3xl lg:font-bold poppins my-5 lg:my-10 text-center ">
        CERTIFICATIONS & AWARDS
      </div>
      <div className="w-[80%] mx-auto">
        <Slider {...settings}>
          {
          // [
          //   img1,
          //   img2,
          //   img3,
          //   img4,
          //   img5,
          //   img6,
          //   img7,
          //   img8,
          //   img9,
          //   img10,
          //   img11,
          // ]
          CertificationImagesData?.data?.map((val, i) => {
            return (
              <div className="">
                <div className="bg-white p-2 py-4 rounded-md shadow-lg ">
                  <img
                    src={val.image}
                    alt=""
                    className="mx-auto  rounded-md border h-80  "
                  />
                </div>
              </div>
            );
          })}
          {/* <div className="bg-white p-2  ">
            <img src={img1} alt="" className="mx-auto" />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;

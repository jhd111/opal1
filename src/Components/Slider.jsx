import React from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight  } from "react-icons/md";
import { CertificationImages } from "../Services/Certificationsimages";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="!w-12 !h-12 !rounded-full !text-primary hover:!bg-primary hover:!text-white 
                 transition-all duration-300 !flex !items-center !justify-center !z-50 
                 absolute -left-8 top-1/2 transform -translate-y-1/2"
    >
      <MdKeyboardArrowLeft className="!w-6 !h-6" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="!w-12 !h-12 !rounded-full !text-primary hover:!bg-primary hover:!text-white 
                 transition-all duration-300 !flex !items-center !justify-center !z-50 
                 absolute -right-8 top-1/2 transform -translate-y-1/2"
    >
      <MdKeyboardArrowRight className="!w-6 !h-6" />
    </button>
  );
};


// const CustomNextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className="!w-12 !h-12  !rounded-full  !text-primary hover:!bg-primary hover:!text-white transition-all duration-300 !flex !items-center !justify-center !z-50 absolute -right-6 top-1/2 transform -translate-y-1/2"
//     >
//       <MdKeyboardArrowRight  className="!w-6 !h-6" />
//     </button>
//   );
// };

const Sliders = () => {
  const { data: CertificationImagesData, isLoading, isError } = CertificationImages();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
    <div>
      <div className="text-xl font-semibold lg:text-3xl lg:font-bold poppins my-5 lg:my-10 text-center">
        CERTIFICATIONS & AWARDS
      </div>
      <div className="w-[80%] mx-auto relative">
        <Slider {...settings}>
          {CertificationImagesData?.data?.map((val, i) => (
            <div key={i}>
              <div className="bg-white p-2 py-4 rounded-md shadow-lg">
                <img
                  src={val.image}
                  alt=""
                  className="mx-auto rounded-md border h-80 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;

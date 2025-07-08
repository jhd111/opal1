import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CoverflowSlider = () => {
  // Sample image URLs from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1696876411761-a7e698d53a53",
    "https://images.unsplash.com/photo-1720048170971-96b5d658f63b",
    "https://images.unsplash.com/photo-1718817173080-38c28d03ca84",
    "https://images.unsplash.com/photo-1725880471847-c51ae50d6a90",
    "https://images.unsplash.com/photo-1721332153282-3be96f628eba",
    "https://images.unsplash.com/photo-1721332153371-56bd1c3ab1f1",
    "https://images.unsplash.com/photo-1721332153760-c355e67d911e",
    "https://images.unsplash.com/photo-1721332154168-e8d3917c943d",
    "https://images.unsplash.com/photo-1721332154377-8b1e0b3c5899",
    "https://images.unsplash.com/photo-1721332153282-3be96f628eba",
  ];

  // Group images into slides (e.g., 4 images per slide)
  const imagesPerSlide = 4;
  const slides = [];
  for (let i = 0; i < images.length; i += imagesPerSlide) {
    slides.push(images.slice(i, i + imagesPerSlide));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Multi-Image Coverflow Slider
        </h1>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slideImages, slideIndex) => (
            <SwiperSlide key={slideIndex} className="w-96">
              <div className="grid grid-cols-2 gap-2 p-2 bg-white rounded-lg shadow-lg">
                {slideImages.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${slideIndex * imagesPerSlide + imgIndex + 1}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Inline CSS for Swiper (optional, can be moved to a CSS file)
const styles = `
  .mySwiper {
    padding: 20px 0;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 384px; /* Matches w-96 for consistency */
  }
  .swiper-pagination-bullet {
    background: #000;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default CoverflowSlider;

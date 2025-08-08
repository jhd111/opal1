// import React from "react";
// import { useEffect, useRef } from "react";
// import Swiper from "swiper";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import img1 from "../assets/images/pictures/Artboard 1.png";
// import img2 from "../assets/images/pictures/Artboard 2.png";
// import img3 from "../assets/images/pictures/Artboard 3.png";
// import img4 from "../assets/images/pictures/Artboard 4.png";
// import img5 from "../assets/images/pictures/Artboard 5.png";
// import img6 from "../assets/images/pictures/Artboard 6.png";
// import img7 from "../assets/images/pictures/Artboard 7.png";
// import img8 from "../assets/images/pictures/Artboard 8.png";
// import img9 from "../assets/images/pictures/Artboard 9.png";
// import img10 from "../assets/images/pictures/Artboard 10.png";
// import img11 from "../assets/images/pictures/Artboard 11.png";
// import img12 from "../assets/images/pictures/Artboard 12.png";
// import img13 from "../assets/images/pictures/Artboard 18.png";

// import { Media_gallery } from "../Services/MediaGalleryApi";
// const MediaGallery = () => {

//   const {data:gallery,isLoading:galleryLoading,isError:galleryError}=Media_gallery()

//   const swiperRef = useRef(null);
//   useEffect(() => {
//     const swiperInstance = new Swiper(swiperRef.current, {
//       modules: [Navigation],
//       grabCursor: true,
//       watchSlidesProgress: true,
//       loop: true,
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: 20,
//       initialSlide: 0,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       speed: 800,
//       effect: "slide",
//       on: {
//         progress(e) {
//           const t = e.slides.length;
//           for (let r = 0; r < t; r++) {
//             const o = e.slides[r],
//               s = o.progress,
//               i = Math.abs(s);
//             let n = 1;
//             if (i > 1) n = 0.3 * (i - 1) + 1;

//             const l = o.querySelectorAll(".item-content"),
//               a = s * n * 50 + "%",
//               c = 1 - 0.2 * i,
//               d = t - Math.abs(Math.round(s));

//             o.style.transform = `translateX(${a}) scale(${c})`;
//             o.style.zIndex = d.toString();
//             o.style.opacity = i > 3 ? "0" : "1";

//             l.forEach((e) => {
//               e.style.opacity = (1 - i / 3).toString();
//             });
//           }
//         },
//         setTransition(e, t) {
//           for (let r = 0; r < e.slides.length; r++) {
//             const o = e.slides[r],
//               s = o.querySelectorAll(".item-content");
//             o.style.transitionDuration = `${t}ms`;
//             s.forEach((el) => {
//               el.style.transitionDuration = `${t}ms`;
//             });
//           }
//         },
//       },
//     });

//     return () => {
//       if (swiperInstance) {
//         swiperInstance.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div className="text-2xl md:text-4xl poppins my-10 text-center font-semibold">
//         MEDIA GALLERY
//       </div>
//       <div className="my-10 relative">
//         <div className="swiper carousel-slider" ref={swiperRef}>
//           <div className="swiper-wrapper">
//             {[
//               img1,
//               img2,
//               img3,
//               img4,
//               img5,
//               img6,
//               img7,
//               img8,
//               img9,
//               img10,
//               img11,
//               img12,
//               img13,
//             ].map((_, index) => (
//               <div key={index} className="swiper-slide">
//                 <div className="item-content shadow-lg rounded-xl overflow-hidden">
//                   <img src={_} alt="" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             type="button"
//             className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-lg !text-primary hover:!bg-primary hover:!text-white transition-all duration-300 !flex !items-center !justify-center !z-50 !left-4"
//           >
//             <IoIosArrowBack className="!w-6 !h-6" />
//           </button>
//           <button
//             type="button"
//             className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-lg !text-primary hover:!bg-primary hover:!text-white transition-all duration-300 !flex !items-center !justify-center !z-50 !right-4"
//           >
//             <IoIosArrowForward className="!w-6 !h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;











import React from "react";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Media_gallery } from "../Services/MediaGalleryApi";

const MediaGallery = () => {
  const { data: gallery, isLoading: galleryLoading, isError: galleryError } = Media_gallery();
  
  console.log("gallery",gallery)
  const swiperRef = useRef(null);
  
  useEffect(() => {
    // Only initialize Swiper when gallery data is available
    if (!gallery || galleryLoading) return;

    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation],
      grabCursor: true,
      watchSlidesProgress: true,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 800,
      effect: "slide",
      on: {
        progress(e) {
          const t = e.slides.length;
          for (let r = 0; r < t; r++) {
            const o = e.slides[r],
              s = o.progress,
              i = Math.abs(s);
            let n = 1;
            if (i > 1) n = 0.3 * (i - 1) + 1;

            const l = o.querySelectorAll(".item-content"),
              a = s * n * 50 + "%",
              c = 1 - 0.2 * i,
              d = t - Math.abs(Math.round(s));

            o.style.transform = `translateX(${a}) scale(${c})`;
            o.style.zIndex = d.toString();
            o.style.opacity = i > 3 ? "0" : "1";

            l.forEach((e) => {
              e.style.opacity = (1 - i / 3).toString();
            });
          }
        },
        setTransition(e, t) {
          for (let r = 0; r < e.slides.length; r++) {
            const o = e.slides[r],
              s = o.querySelectorAll(".item-content");
            o.style.transitionDuration = `${t}ms`;
            s.forEach((el) => {
              el.style.transitionDuration = `${t}ms`;
            });
          }
        },
      },
    });

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [gallery, galleryLoading]); // Re-run when gallery data changes

  // Show loading state
  if (galleryLoading) {
    return (
      <div>
        <div className="text-xl font-semibold lg:text-3xl lg:font-bold poppins my-5 lg:my-10 text-center ">
          MEDIA GALLERY
        </div>
        <div className="my-10 text-center">
          <div className="text-lg">Loading gallery...</div>
        </div>
      </div>
    );
  }

  // Show error state
  if (galleryError || !gallery) {
    return (
      <div>
        <div className="text-2xl md:text-4xl poppins my-10 text-center font-semibold">
          MEDIA GALLERY
        </div>
        <div className="my-10 text-center">
          <div className="text-lg text-red-500">Failed to load gallery images.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-2xl md:text-4xl poppins my-10 text-center font-semibold">
        MEDIA GALLERY
      </div>
      <div className="my-10 relative">
        <div className="swiper carousel-slider" ref={swiperRef}>
          <div className="swiper-wrapper">
            {gallery?.data?.map((item, index) => (
              <div key={item.id || index} className="swiper-slide">
                <div className="item-content shadow-lg rounded-xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Gallery image ${item.id || index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-lg !text-primary hover:!bg-primary hover:!text-white transition-all duration-300 !flex !items-center !justify-center !z-50 !left-4"
          >
            <IoIosArrowBack className="!w-6 !h-6" />
          </button>
          <button
            type="button"
            className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-lg !text-primary hover:!bg-primary hover:!text-white transition-all duration-300 !flex !items-center !justify-center !z-50 !right-4"
          >
            <IoIosArrowForward className="!w-6 !h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;

















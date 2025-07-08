import React from "react";
import pearson from "../assets/images/home/pearson.png";
import happy from "../assets/images/home/happy.png";
import room from "../assets/images/pictures/Artboard 2.png";
import img from "../assets/images/home/img.png";
import g from "../assets/images/home/g.png";
import auth from "../assets/images/home/auth.png";
import p1 from "../assets/images/home/p1.png";
import p2 from "../assets/images/home/p2.png";
import p3 from "../assets/images/home/p3.png";
import p4 from "../assets/images/home/p4.png";
import p5 from "../assets/images/home/p5.png";
import h from "../assets/images/pictures/Artboard 5.png";

import onee from "../assets/images/home/1.svg";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import Resultsrow from "../Components/Resultsrow";
import ContactForm from "../Components/ContactForm";
import Sliders from "../Components/Slider";
import Hero from "../Components/Hero";
import MediaGallery from "../Components/MediaGallery";
import { NavLink } from "react-router-dom";
import { fetchResults } from "../Services/HomeResults";
const Home = () => {

    const { data: Results, isLoading, error } = fetchResults();

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const phoneNumber = "+923258603436";
  const message = "Hello!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <Hero />

      <div className="bg-blues flex  flex-col md:flex-row items-center  p-10  text-white">
        <div className="w-full flex justify-center items-center">
          <img src={happy} alt="" />
        </div>
        <div className="w-full space-y-6">
          <img src={pearson} alt="" className="w-32" />
          <p className="text-4xl font-semibold">
            Book Your Pearson PTE Exam With Us
          </p>
          <p>
            Schedule your Pearson PTE Exam with Opal Institute Now seamlessly
          </p>
          <p className="flex gap-2 items-center">
            <span className="h-2 w-2 bg-white rounded-full"></span>
            <span>Click on Book Your Exam button below</span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="h-2 w-2 bg-white rounded-full"></span>
            <span>Choose your Exam Type</span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="h-2 w-2 bg-white rounded-full"></span>
            <span>Fill the Information Required</span>
          </p>

          <p className="flex gap-2 items-center">
            <span className="h-2 w-2 bg-white rounded-full"></span>
            <span>Pay via credit/debit card or Bank transfer</span>
          </p>

          <p className="flex gap-2 items-center">
            <span className="h-2 w-2 bg-white rounded-full"></span>
            <span>Explore Exam Prep Materials</span>
          </p>
          <br />
          <NavLink
            to="/buy-pte-voucher"
            className="bg-white rounded-md text-primary px-8 py-3 font-semibold"
          >
            Book Your Exam
          </NavLink>
        </div>
      </div>
      <section id="mocktest" className="w-[90%] md:w-[80%] mx-auto">
        <div className="">
          <p className="text-2xl md:text-5xl text-center inter mt-20 font-semibold">
            Take your preparation a step further
          </p>
        </div>
        <div className="flex  flex-col md:flex-row items-center gap-10">
          <div className="w-full space-y-6">
            <div className=" text-xl md:text-4xl font-semibold">
              <p className="plus-jakarta">
                Give <span className="text-primary">Practice Tests</span> in
                Real Exam Like Environment
              </p>
            </div>
            <div className=" space-y-6">
              <p className="plus-jakarta">
                At Opal Institute, we offer real exam environment to our
                students to practice PTE Tests to gain confidence and be fully
                prepared for their big exam. We have very limited spots and take
                exam on the announced dates each month. Book your spot now with
                us to take your PTE Exam preparation to a step further.
              </p>
              <br />
              <a
                href={whatsappLink}
                className="px-8 py-3 bg-primary   rounded-3xl text-white"
              >
                Reserve your Spot Now
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="h-[600px] w-[400px] overflow-hidden">
              <img
                src={room}
                alt=""
                className=" w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center pb-20 gap-10">
          <div className="w-full">
            <img src={img} alt="" className="w-full md:w-3/4" />
          </div>
          <div className="w-full space-y-6">
            <div className="text-2xl md:text-4xl font-semibold">
              <p className="plus-jakarta">
                Get
                <span className="text-primary px-1">
                  Pearson Scored Practice Mock Tests
                </span>
                From Us to Step Up Your Prep
              </p>
            </div>
            <div className=" space-y-6">
              <p className="plus-jakarta">
                At Opal Institute, we offer practice mock tests as well as pte
                and apeuni portals access to our students so they can prepare
                for their big day and be a step ahead in their exam preparation.
              </p>
              <br />
              <a
                href={whatsappLink}
                className="px-8 py-3 bg-primary rounded-3xl text-white"
              >
                Reserve your Spot Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" ">
        <div className=" relative">
          <div className="flex bg-blue-star flex-col md:flex-row md:h-screen">
            <div className="md:w-[60%] text-white p-5 md:p-20  mt-20 space-y-9">
              <p className="text-2xl md:text-5xl plus-jakarta font-semibold">
                PEARSON VUE AUTHORISED TESTING CENTER
              </p>
              <p className="text-2xl">
                Opal Institute is a Pearson VUE Authorised Testing Center
              </p>
              <div className="flex gap-4">
                <NavLink
                  to="/buy-pte-voucher"
                  className="bg-white text-black px-8 py-3 rounded-md"
                >
                  Book Exams
                </NavLink>
                <NavLink
                  to="/buy-it-vouchers"
                  className="flex items-center gap-2 text-white"
                >
                  Buy Vouchers <MdOutlineArrowRightAlt />
                </NavLink>
              </div>
            </div>
            <div className="md:w-[40%]   pt-0">
              <img
                src={auth}
                alt=""
                className="relative w-40  md:w-52 top-20 -left-3 md:-left-11"
              />
              <img src={g} alt="" className=" w-75 md:w-72" />
            </div>
          </div>
          <div className="w-[90%] md:w-[80%] bg-white relative  md:absolute   rounded-md  md:left-[10%]   mt-10   bottom-1 grid grid-cols-3  md:grid-cols-5  gap-4 shadow-md mx-auto">
            {[p1, p4, p2, p3, p5].map((val, i) => (
              <div className="">
                <img src={val} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#3651BF0D]">
          <div className="md:w-[80%]  mt-10   py-20 mx-auto">
            <div className="">
              <Resultsrow />
            </div>
            <div className="flex justify-center items-center w-full mt-10">
              <NavLink
                // to="/results"

                  to={{
                    pathname: "/results",
                  }}
                  state={{ object: Results?.data[0] }} // Pass the full object here
                
                className="px-6 py-2 bg-primary text-white rounded-md"
              >
                View More
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto py-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full space-y-6">
              <div className=" text-2xl md:text-4xl font-semibold">
                <p className="plus-jakarta">
                  Buy <span className="text-primary">IT EXAM VOUCHERS</span>{" "}
                  &nbsp; From Us Give
                </p>
              </div>
              <div className=" space-y-6">
                <p className="plus-jakarta">
                  At Opal Institute, we offer Authentic IT Exam Vouchers from a
                  Number of Different Vendors at Discounted Prices. Order your
                  required Exam Voucher Now.
                </p>
                <br />
                <NavLink
                  to="/buy-it-vouchers"
                  className="px-8 py-3 bg-primary rounded-3xl text-white"
                >
                  Buy IT Vouchers
                </NavLink>
              </div>
            </div>
            <div className="w-full">
              <img src={onee} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <p className="text-4xl font-serif be-vietnam font-semibold">
            About Us
          </p>
          <p className="mt-2 be-vietnam">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          {/* <div className="flex  md:w-[80%] mx-auto flex-col md:flex-row  gap-10 md:gap-0 mt-10 rounded-4xl">
            <div className="   ">
              <div className=" h-[500px] w-[400px] overflow-hidden">
                <img
                  src={h}
                  alt=""
                  className="  w-full h-full  object-contain"
                />
              </div>
            </div>
            <div className="  space-y-6 p-10 bg-[#F6982817] flex flex-col  justify-center">
              <p className="text-4xl font-bold">Discover our History</p>
              <p>
                Opal Institute was founded in 2003 with the aim to help
                thousands of students achieve their goals. We have expanded our
                operations and work globally in multiple countries. Opal
                Institute was founded in 2003 with the aim to help thousands of
                students achieve their goals. We have expanded our operations
                and work globally in multiple countries.
                <br />
                <br /> Opal Institute was founded in 2003 with the aim to help
                thousands of students achieve their goals. We have expanded our
                operations and work globally in multiple countries.
              </p>
              <div className="">
                <NavLink
                  to="/about"
                  className="bg-primary text-white  px-8 py-3 rounded-md"
                >
                  Explore more
                </NavLink>
              </div>
            </div>
          </div> */}

<div className="flex flex-col md:flex-row md:h-[600px] w-full md:w-[90%] mx-auto mt-10 rounded-4xl overflow-hidden shadow-lg">
  {/* Image Section */}
  <div className="w-full md:w-1/2 h-[300px] md:h-full">
    <img
      src={h}
      alt="Pearson VUE"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 bg-[#F6982817] p-6 md:p-10 flex flex-col justify-between">
    <h2 className="text-2xl md:text-4xl font-bold mb-6">Discover our History</h2>
    <p className="text-sm md:text-base leading-relaxed mb-6">
      Opal Institute was founded in 2003 with the aim to help thousands of
      students achieve their goals. We have expanded our operations and work
      globally in multiple countries. Opal Institute was founded in 2003 with
      the aim to help thousands of students achieve their goals. We have
      expanded our operations and work globally in multiple countries.
      <br />
      <br />
      Opal Institute was founded in 2003 with the aim to help thousands of
      students achieve their goals. We have expanded our operations and work
      globally in multiple countries.
    </p>
    <div>
      <NavLink
        to="/about"
        className="bg-primary text-white px-6 py-3 rounded-md text-center inline-block"
      >
        Explore more
      </NavLink>
    </div>
  </div>
</div>

          <div className="py-10">
            <MediaGallery />
          </div>
          <div className="py-10">
            <Sliders />
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Home;

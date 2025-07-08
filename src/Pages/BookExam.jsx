import React from "react";
import img from "../assets/voc.svg";
import check from "../assets/check.svg";

const BookExam = () => {
  return (
    <div className="py-10">
      <div className=" w-[90%]  md:w-[80%]   mx-auto">
        <div className="">
          <div className="text-center inter">
            <p className="text-4xl font-semibold ">Book PTE Exam</p>

            <p className="text-lg mt-4 text-[#55595F]">
              You can choose a plan which suits you best.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] mt-20 mx-auto gap-10">
          <div className="w-full order-1 md:order-none">
            <p className="text-xs poppins text-gray-500 my-4">
              Home / Book PTE Exam
            </p>
            <div className="  poppins space-y-10">
              <p className="dm-sans text-2xl font-semibold">Pearson PTE Exam</p>
              <div className="">
                <p className="font-semibold text-[#39B856] text-2xl border-b pb-4">
                  $223.0
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  PTE Core is a computer-based English test that assesses your
                  general speaking, writing, reading and listening skills in a
                  single test.{" "}
                </p>
              </div>
              <button className="bg-primary w-full text-white rounded-md px-4 py-2">
                Book Now
              </button>
            </div>
          </div>
          <div className="w-full">
            <img src={img} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="mt-10">
          <div className=" inter">
            <p className="text-4xl font-semibold text-center ">
              Choose from our deals
            </p>

            <p className="  mt-4 text-[#55595F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              labore quibusdam omnis dolorem aut? Quisquam eos nostrum quae at
              perferendis!
            </p>
          </div>
          <div className="mt-10 flex  items-center justify-center">
            <div className="flex  items-center justify-center  gap-10 md:gap-0 flex-col md:flex-row ">
              {/* first  */}
              <div className="inter relative md:left-5 z-10 bg-[#EFF2FF] rounded-3xl p-10 md:p-12">
                <div className="">
                  <p className="text-3xl font-bold mb-2 ">Starter</p>
                  <p>Quick video messages</p>
                </div>
                <p className="text-2xl font-semibold my-6">Free</p>
                <button className="bg-primary  mb-4 rounded-3xl px-8 py-4 border-4 border-sky-200 text-white">
                  Sign up ,its Free
                </button>
                <div className=" pb-8 border-b">
                  <ul className="list-disc ps-4 text-sm space-y-2">
                    <li>Up to 50 Creators Lite</li>
                    <li>Up to 25 videos/person</li>
                    <li>Up to 5 mins/video</li>
                  </ul>
                </div>
                <div className="">
                  <p className="text-sm  my-4">Key Features</p>
                  <div className="">
                    <ul className="text-sm space-y-2">
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Screen recording & cam bubble
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Instant editing
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Unlimited transcriptions
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Privacy controls
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Viewer insights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* second  */}
              <div className="inter z-30 bg-white rounded-3xl p-10 md:p-16  shadow-max">
                <div className="">
                  <p className="text-3xl font-bold mb-2 ">Business</p>
                  <p>Advanced recording & analytics</p>
                </div>
                <p className="text-2xl font-semibold my-6">
                  $12.50{" "}
                  <span className="text-xs">USD/Creator/mo (annually)</span>
                </p>
                <button className="bg-primary  mb-4 rounded-3xl px-8 py-4 border-4 border-sky-200 text-white">
                  Start Free 14-Day Trial
                </button>
                <div className=" pb-8 border-b">
                  <ul className="list-disc ps-4 text-sm space-y-2">
                    <li>Unlimited Creators</li>
                    <li>Unlimited videos</li>
                    <li>Unlimited recording length</li>
                    <li>Up to 50 Creators Lite</li>
                  </ul>
                </div>
                <div className="">
                  <p className="text-sm  my-4">Everything in Starter, plus</p>
                  <div className="">
                    <ul className="text-sm space-y-2">
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Custom branding
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Engagement insights
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Embed links in video
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Password protected videos
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Video uploads
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* third  */}

              <div className="inter z-10 relative md:right-5 bg-[#EFF2FF] rounded-3xl p-10 md:p-14">
                <div className="">
                  <p className="text-3xl font-bold mb-2 ">Enterprise</p>
                  <p>Advanced admin & security</p>
                </div>
                <p className="text-2xl font-semibold my-6">Let’s Talk</p>
                <button className="bg-primary  mb-4 rounded-3xl px-8 py-4 border-4 border-sky-200 text-white">
                  Contact Sales
                </button>
                <div className=" pb-8 border-b">
                  <ul className="list-disc ps-4 text-sm space-y-2">
                    <li>Unlimited Members</li>
                    <li>Unlimited videos</li>
                    <li>Unlimited recording length</li>
                  </ul>
                </div>
                <div className="">
                  <p className="text-sm  my-4">Everything in Business, plus</p>
                  <div className="">
                    <ul className="text-sm space-y-2">
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        SSO (SAML) and SCIM
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Advanced content privacy
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Unlimited transcriptions
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Custom data retention policies
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Salesforce integration
                      </li>
                      <li className="flex gap-2">
                        <img src={check} alt="" />
                        Zoom integration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookExam;

// import React from "react";
// import { FiMapPin } from "react-icons/fi";
// import { IoIosMail, IoMdPhonePortrait } from "react-icons/io";
// import MappAddress from "../Components/MappAddress";
// import {
//   FaFacebookSquare,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// import { ContactFormApi } from "../Services/ContactFoemApi";
// import { useState } from "react";

// const ContactForm = () => {

//   const [formData,setFormData]=useState({
//     name:"",
//     email:"",
//     message:"",
//     phone:""
//   })
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row  mt-32 gap-16">
//         <div className="bg-[#F1F4FF] md:w-[40%] py-10 ">
//           <div className="w-[80%] mx-auto">
//             <p className="text-2xl  text-center  p-4 font-semibold">
//               Contact Our Team Now For Any Queries
//             </p>
//             <form action="" className="grid gap-4">
//               <input
//                 type="text"
//                 className="bg-white p-3 rounded"
//                 placeholder="Your Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 className="bg-white p-3 rounded"
//                 placeholder="Your Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 className="bg-white p-3 rounded"
//                 placeholder="Your Phone Number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <textarea
                
//                 id=""
//                 cols={4}
//                 rows={4}
//                 placeholder="Your Message"
//                 className="bg-white p-3 rounded"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <button className="bg-primary text-white px-8 py-2 rounded">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="">
//           <div className="flex flex-col md:flex-row gap-20 items-start">
//             <div className="flex flex-col justify-center     w-52">
//               <p className="flex justify-center text-primary">
//                 <FiMapPin />
//               </p>
//               <p>
//                 55PJ + 4FG, SERVICE Rd, Shaheenabad, Gujranwala, 52290, Pakistan
//               </p>
//             </div>
//             <div className="flex flex-col justify-center    w-32">
//               <p className="text-primary flex justify-center">
//                 <IoMdPhonePortrait />
//               </p>
//               <p>
//                 <a href="tel:++92 330 1646951">+92 330 1646951</a>
//               </p>
//             </div>
//             <div className="flex flex-col justify-center  align-center w-48">
//               <p className="text-primary flex justify-center">
//                 <IoIosMail />
//               </p>
//               <p>
//                 <a href="mailto:info@opalinstitute.com">
//                   info@opalinstitute.com
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className=" mt-8">
//             <MappAddress />
//           </div>
//           <div className=" flex text-2xl  mt-4 gap-6">
//             <FaTwitter className="text-primary" />
//             <FaFacebookSquare className="text-primary" />
//             <FaInstagram className="text-primary" />
//             <FaLinkedin className="text-primary" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;





import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoIosMail, IoMdPhonePortrait } from "react-icons/io";
import MappAddress from "../Components/MappAddress";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { ContactFormApi } from "../Services/ContactFoemApi"; // useMutation hook

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const { mutate, isPending, isSuccess, isError } = ContactFormApi();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone_number", formData.phone);
    formPayload.append("message", formData.message);

    mutate(formPayload, {
      onSuccess: () => {
        setResponseMsg("Message sent successfully!");
        toast.success("Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      },
      onError: () => {
        setResponseMsg("Failed to send message. Please try again.");
        toast.error("Error Sending Contact Form")
      },
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between mt-32 p-14 gap-16">
        <div className="bg-[#F1F4FF] md:w-[50%] py-10">
          <div className="w-[80%] mx-auto">
            <p className="text-2xl text-center p-4 font-semibold">
              Contact Our Team Now For Any Queries
            </p>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-white p-3 rounded"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="bg-white p-3 rounded"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="bg-white p-3 rounded"
                placeholder="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="bg-white p-3 rounded"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-2 rounded"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
              {responseMsg && (
                <p className="text-sm text-center text-green-600 mt-2">
                  {responseMsg}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info & Map */}
        <div className="p-6">
          <div className="flex flex-col gap-4 md:flex-row lg:gap-20  items-start">
            <div className="flex flex-col items-center justify-center w-52">
              <p className="flex justify-center text-primary">
                <FiMapPin />
              </p>
              <p>
                55PJ + 4FG, SERVICE Rd, Shaheenabad, Gujranwala, 52290, Pakistan
              </p>
            </div>
            <div className="flex flex-col justify-center w-36">
              <p className="text-primary flex justify-center">
                <IoMdPhonePortrait />
              </p>
              <p>
                <a href="tel:+923301646951">+92 330 1646951</a>
              </p>
            </div>
            <div className="flex flex-col justify-center w-48">
              <p className="text-primary flex justify-center">
                <IoIosMail />
              </p>
              <p>
                <a href="mailto:info@opalinstitute.com">
                  info@opalinstitute.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8">
            <MappAddress />
          </div>
          <div className="flex text-2xl mt-4 gap-6">
            <FaTwitter className="text-primary" />
            <FaFacebookSquare className="text-primary" />
            <FaInstagram className="text-primary" />
            <FaLinkedin className="text-primary" />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactForm;

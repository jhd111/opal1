// import React from "react";

// import { TestingServicesData } from "../Services/TestingServices";

// const TestingServices = () => {

//   const {data:testingServicesData,isLoading,isError}=TestingServicesData()

//   console.log(testingServicesData)

//   const scrollToSection = (letter) => {
//     const element = document.getElementById(letter);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-[90%] mx-auto">
//       <div className="text-center py-10 space-y-4">
//         <p className="text-6xl font-semibold">TESTING SERVICES</p>
//         <p className="text-2xl text-[#55595F] leading-10">
//           We offer more than 300 testing services
//         </p>
//       </div>
//       <div className="grid md:flex grid-cols-12 justify-between p-4 md:px-32 py-2 items-center bg-[#3651BF1A] text-uppercase text-primary text-lg">
//         {[
//           "A",
//           "B",
//           "C",
//           "D",
//           "E",
//           "F",
//           "G",
//           "H",
//           "I",
//           "J",
//           "K",
//           "L",
//           "M",
//           "N",
//           "O",
//           "P",
//           "Q",
//           "R",
//           "S",
//           "T",
//           "U",
//           "V",
//           "W",
//           "X",
//           "Y",
//           "Z",
//         ].map((letter) => (
//           <span
//             key={letter}
//             onClick={() => scrollToSection(letter)}
//             className="cursor-pointer hover:text-blue-600 transition-colors"
//           >
//             {letter}
//           </span>
//         ))}
//       </div>

//       <div className="mt-8 w-[70%] mx-auto h-[600px] overflow-y-auto">
//         {[
//           "A",
//           "B",
//           "C",
//           "D",
//           "E",
//           "F",
//           "G",
//           "H",
//           "I",
//           "J",
//           "K",
//           "L",
//           "M",
//           "N",
//           "O",
//           "P",
//           "Q",
//           "R",
//           "S",
//           "T",
//           "U",
//           "V",
//           "W",
//           "X",
//           "Y",
//           "Z",
//         ].map((letter) => (
//           <div key={letter}>
//             <div className="flex gap-10 m-4">
//               <section id={letter} className="font-bold text-xl">
//                 {letter}
//               </section>
//               <div className="">
//                 <ul className="list-disc">
//                   <li className="underline text-emerald-800">Abudabi</li>
//                   <li className="underline text-emerald-800">Abudabi</li>
//                 </ul>
//               </div>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestingServices;


import React, { useMemo } from "react";
import { TestingServicesData } from "../Services/TestingServices";

const TestingServices = () => {
  const { data: testingServicesData, isLoading, isError } = TestingServicesData();

  console.log(testingServicesData);

  // Group data by first letter of name
  const groupedData = useMemo(() => {
    if (!testingServicesData?.data) return {};
    
    return testingServicesData.data.reduce((acc, item) => {
      const firstLetter = item.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(item);
      return acc;
    }, {});
  }, [testingServicesData]);

  // Get all letters that have data
  const availableLetters = Object.keys(groupedData).sort();

  const scrollToSection = (letter) => {
    const element = document.getElementById(letter);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="w-[90%] mx-auto">
        <div className="text-center py-10">
          <p className="text-2xl">Loading testing services...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-[90%] mx-auto">
        <div className="text-center py-10">
          <p className="text-2xl text-red-600">Error loading testing services</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center py-10 space-y-4">
        <p className="text-6xl font-semibold">TESTING SERVICES</p>
        <p className="text-2xl text-[#55595F] leading-10">
          We offer more than 300 testing services
        </p>
      </div>
      
      {/* Alphabet Navigation */}
      <div className="grid md:flex grid-cols-12 justify-between p-4 md:px-32 py-2 items-center bg-[#3651BF1A] text-uppercase text-primary text-lg">
        {[
          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
          "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        ].map((letter) => (
          <span
            key={letter}
            onClick={() => scrollToSection(letter)}
            className={`cursor-pointer transition-colors ${
              availableLetters.includes(letter)
                ? "hover:text-blue-600 text-blue-800 font-semibold"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Services List */}
      <div className="mt-8 w-[70%] mx-auto h-[600px] overflow-y-auto">
        {availableLetters.map((letter) => (
          <div key={letter}>
            <div className="flex gap-10 m-4">
              <section id={letter} className="font-bold text-xl">
                {letter}
              </section>
              <div className="">
                <ul className="list-disc">
                  {groupedData[letter].map((service) => (
                    <li 
                      key={service.id} 
                      className="underline text-emerald-800 cursor-pointer hover:text-emerald-600"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
          </div>
        ))}
        
        {/* Show message if no data */}
        {availableLetters.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No testing services available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestingServices;
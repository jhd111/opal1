import React from "react";
import img from "../assets/images/mock/moc.png";

const MockTestPurchase = () => {
  const data = [
    {
      img: img,
      title: "Alfa PTE Portal Access 30 Days",
      des: "PTE Core is a computer-based English test that assesses your general speaking, writing, reading and listening skills in a single test. ",
    },
    {
      img: img,
      title: "Alfa PTE Portal Access 30 Days",
      des: "PTE Core is a computer-based English test that assesses your general speaking, writing, reading and listening skills in a single test. ",
    },
    {
      img: img,
      title: "Alfa PTE Portal Access 30 Days",
      des: "PTE Core is a computer-based English test that assesses your general speaking, writing, reading and listening skills in a single test. ",
    },
    {
      img: img,
      title: "Alfa PTE Portal Access 30 Days",
      des: "PTE Core is a computer-based English test that assesses your general speaking, writing, reading and listening skills in a single test. ",
    },
  ];
  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2 gap-10">
        {data.map((val, i) => {
          return (
            <div className=" border shadow py-10 px-4 rounded-md">
              <div className=" flex flex-col gap-4  ">
                <div className="w-full h-[200px]">
                  <img
                    src={val.img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-primary">
                  {val.title}
                </p>
                <p className="text-xs">{val.des}</p>
                <button className="text-center bg-slate-100 py-2 w-full">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MockTestPurchase;

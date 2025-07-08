import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "VALIDITY",
    content:
      "PTE Voucher’s Validity only for Pakistan.Pearson Scored Practice Mock Teat is valid Globally.",
  },
  {
    id: 2,
    title: "DELIVERY",
    content: "Typically delivers within 3-4 hours via email.",
  },
  { id: 3, title: "How to Use", content: "You Will Get an email with details" },
];

const CollapsibleRow = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b rounded-md   mb-2 overflow-hidden">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer    "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>

        {isOpen ? (
          <span className="rounded-full p-2 text-xs border">
            <FaMinus />
          </span>
        ) : (
          <span className="rounded-full p-2 text-xs border">
            <FaPlus />
          </span>
        )}
      </div>

      {isOpen && (
        <div className="px-4 py-3 bg-white text-sm text-gray-700  ">
          {content}
        </div>
      )}
    </div>
  );
};

const CollapsRow = () => {
  return (
    <div className="py-6 max-w-xl mx-auto">
      {data.map((item) => (
        <CollapsibleRow
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default CollapsRow;

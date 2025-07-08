// WhatsAppFloatButton.jsx
import React from "react";

const WhatsAppFloatButton = ({
  phoneNumber = "+923258603436",
  message = "Hello!",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed animate-bounce duration-1000 bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
      style={{ transition: "background 0.3s ease" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.06 0 11.86 11.86 0 002.59 3.48 11.86 11.86 0 000 12.06a11.86 11.86 0 001.77 6.14L0 24l6.05-1.77a11.86 11.86 0 006.01 1.6h.01a11.86 11.86 0 008.45-3.48 11.86 11.86 0 003.48-8.45 11.86 11.86 0 00-3.48-8.45zM12.06 21.7a9.66 9.66 0 01-4.95-1.35l-.35-.2-3.59 1.05.94-3.49-.22-.36a9.66 9.66 0 01-1.48-5.13c0-5.35 4.36-9.7 9.7-9.7a9.66 9.66 0 015.13 1.48 9.66 9.66 0 013.49 3.49 9.66 9.66 0 011.48 5.13c0 5.34-4.36 9.7-9.7 9.7zm5.55-7.25c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.67.15-.77.98-.94 1.18-.35.22-.65.07a7.84 7.84 0 01-2.29-1.41 8.59 8.59 0 01-1.59-2c-.17-.3 0-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.5-.5-.67-.5H7.3c-.2 0-.52.07-.8.35s-1.05 1.02-1.05 2.48 1.08 2.89 1.23 3.09c.15.2 2.13 3.24 5.18 4.54.73.32 1.3.52 1.75.67.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.57-.35z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatButton;

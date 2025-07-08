import React, { useState, useEffect } from "react";
import { VerfiyOtp } from "../Services/VerifyOtp";
import { ResendApi } from "../Services/ResendApi";
import toast from 'react-hot-toast';
const Otp = ({ setselect }) => {
  const [timer, setTimer] = useState(120); // Countdown timer
  const [otp, setOtp] = useState(["", "", "", ""]); // Array for OTP inputs
  const mutation = VerfiyOtp();

  const resendmutation = ResendApi()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleSubmit = () => {
    const combinedOtp = otp.join(""); // Combine OTP inputs
    if (combinedOtp.length !== 4) {
      toast.error("Please enter the full OTP.",{
        position:"top-center"
      });
      return;
    }

    const payload = {
      email: localStorage.getItem('email'),
      otp: combinedOtp,
    };

    mutation.mutate(payload, {
      onSuccess: (data) => {
        toast.success("OTP Verified Successfully!",{
          position:"top-center"
        });
        setselect(3); // Proceed to the next step
      },
      onError: (error) => {
        console.error("Error verifying OTP:", error.response?.data || error.message);
        toast.error("Failed to verify OTP. Please try again.",{
          position:"top-center"
        });
      },
    });
  };

  const email = localStorage.getItem('email')
  const handleResendOtp = () => {

    resendmutation.mutate(
      { email }, // Send email in payload
      {
        onSuccess: () => {
          toast.success("OTP resent successfully.",{
            position:"top-center"
          });
          setTimer(120); // Reset the timer
        },
        onError: (error) => {
          console.error("Error resending OTP:", error.response?.data || error.message);
          toast.error("Failed to resend OTP. Please try again.",{
            position:"top-center"
          });
        },
      }
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex gap-20">
        <div className="w-full">
          <div className="my-10">
            <p className="text-2xl font-semibold mb-4">Enter OTP</p>
            <p className="text-xs text-gray-500 mb-4">
              We have sent an OTP to your email, please enter the OTP here to
              continue.
            </p>
            <div className="flex gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="w-14 h-14 bg-gray-100 text-center border-gray-100 border"
                />
              ))}
            </div>
            <div className="my-6 text-center w-1/2">
              <p className="text-sm text-gray-500">{formatTime(timer)} Sec</p>
              <p className="text-xs">
                Don’t receive code?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    setTimer(120); // Reset the timer
                    handleResendOtp(); // Trigger OTP resend
                  }}
                // Reset timer
                >
                  Re-send
                </span>
              </p>
            </div>
            <div className="flex gap-8">
              <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={mutation.isPending}
                className="bg-primary w-full py-2 text-white rounded-md"
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

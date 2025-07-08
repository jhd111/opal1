import React, { useState } from "react";
import { UpdateBookWithUs } from "../Services/UpdateBookWithUs";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const BookExamWithUs = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    order_id: localStorage.getItem("order_id"),
    form_type: "Book Exam With Us",
    studentName: "",
    additional_notes: "",
    passport_number: "",
    test_date: "",
    test_center: "",
    test_type: "",
    birth_country: "",
    birth_city: "",
    country: "",
    city: "",
    password: "",
    username: "",
    my_pte_account: "",
  });

  const mutation = UpdateBookWithUs();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    mutation.mutate(formPayload, {
      onSuccess: () => {
        toast.success("Form submitted successfully!",{
          position:"top-center"
        });
        navigate('/')
        
      },
      onError: (error) => {
        console.error("Error submitting form:", error.response?.data || error.message);
        toast.error("Failed to submit form. Please try again.",{
          position:"top-center"
        });
      },
    });
  };

  return (
    <div>
      {/* Student Name */}
      <div className="flex flex-col gap-3">
        <label className="font-semibold">Student Name</label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          className="p-3 rounded-md border"
          placeholder="Enter Student Name"
        />
      </div>

      {/* MyPTE Account */}
      <div className="flex flex-col my-4">
        <label className="font-semibold mb-2 text-xl">Student Details</label>
        <p className="font-semibold">Do you already have a MyPTE Account?</p>
        <div className="flex items-center my-2 gap-10">
          <label>
            <input
              type="radio"
              name="my_pte_account"
              value="yes"
              onChange={handleChange}
              checked={formData.my_pte_account === "yes"}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="my_pte_account"
              value="no"
              onChange={handleChange}
              checked={formData.my_pte_account === "no"}
            />{" "}
            No
          </label>
        </div>
      </div>

      {/* Username and Password */}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="p-3 border rounded-md"
          placeholder="User Name"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="p-3 border rounded-md"
          placeholder="Password"
        />
      </div>

      {/* Address Details */}
      <div className="flex flex-col gap-3">
        <p className="font-semibold my-4">Address Details</p>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="p-3 border rounded-md"
          placeholder="City"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="p-3 border rounded-md"
          placeholder="Country"
        />
        <input
          type="text"
          name="birth_city"
          value={formData.birth_city}
          onChange={handleChange}
          className="p-3 border rounded-md"
          placeholder="Birth City"
        />
        <input
          type="text"
          name="birth_country"
          value={formData.birth_country}
          onChange={handleChange}
          className="p-3 border rounded-md"
          placeholder="Birth Country"
        />
      </div>

      {/* Test Details */}
      <div>
        <p className="my-4 font-semibold">Test Details</p>
        <div>
          <p className="font-semibold my-2">Test Type</p>
          <div className="flex items-center gap-6">
            {["Academic", "UKVI", "Core"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="test_type"
                  value={type}
                  onChange={handleChange}
                  checked={formData.test_type === type}
                />{" "}
                {type}
              </label>
            ))}
          </div>
        </div>

        <select
          name="test_center"
          value={formData.test_center}
          onChange={handleChange}
          className="p-3 border rounded-md w-full my-4"
        >
          <option value="" disabled>
            Choose Test Center
          </option>
          <option value="JNS Education">JNS Education</option>
          <option value="Pearson Professional Centers">
            Pearson Professional Centers
          </option>
        </select>

        <input
          type="date"
          name="test_date"
          value={formData.test_date}
          onChange={handleChange}
          className="p-2 border w-full my-2"
        />
        <input
          type="text"
          name="passport_number"
          value={formData.passport_number}
          onChange={handleChange}
          className="p-2 border w-full my-2"
          placeholder="Passport Number"
        />
        <textarea
          name="additional_notes"
          value={formData.additional_notes}
          onChange={handleChange}
          cols={4}
          rows={4}
          className="p-2 border w-full my-2"
          placeholder="Add Notes"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-3 rounded-md w-full"
      >
        Submit
      </button>
    </div>
  );
};

export default BookExamWithUs;

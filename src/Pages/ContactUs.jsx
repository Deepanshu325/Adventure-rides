import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer.jsx";
import contact from "../Assets/Home/WhatsApp Image 2024-12-19 at 1.47.42 PM (1).jpeg";
import { useLanguage } from "../Components/Languagecontext.js";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: window,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    mobile: "",
    city: "",
    currentBike: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isDownloadEnabled, setIsDownloadEnabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = t("nameRequired");
    if (!formData.surname.trim()) tempErrors.surname = t("surnameRequired");
    if (!formData.email.trim()) tempErrors.email = t("emailRequired");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = t("emailInvalid");
    if (!formData.city.trim()) tempErrors.city = t("cityRequired");
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("https://adventurerides-backend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSuccessMessage(t("EmailsentSucess"));
            setIsDownloadEnabled(true);
          } else {
            setSuccessMessage(t("emailSentFailure"));
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setSuccessMessage(t("emailSentFailure"));
        });
    }
  };

 

  return (
    <>
      <p className="text-center mt-12 text-xl font-bold text-blue-500 md:text-3xl uppercase mb-12">
        {t("contactus")}
      </p>

      <div className="w-80 md:w-[35%] lg:w-[40%] mx-auto">
        <img src={contact} alt="Contact Us" className="rounded-2xl" />
      </div>

      <div
        className="bg-grey-500 flex items-center justify-center min-h-screen"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-lg shadow-xl w-full md:max-w-[40%]">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
            {t("contact")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: t("name1"), name: "name", required: true },
              { label: t("surname"), name: "surname", required: true },
              { label: t("email"), name: "email", type: "email", required: true },
              {
                label: `${t("mob")} `,
                name: "mobile",
                required: false,
              },
              { label: t("city"), name: "city", required: true },
              {
                label: `${t("currentbike")} `,
                name: "currentBike",
                required: false,
              },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-600"
                >
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>
                <input
                  type={field.type || "text"}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-600"
              >
                {t("Message")}
              </label>
              <textarea
                id="comments"
                name="comments"
                maxlength="1000" 
                placeholder="Enter up to 1000 characters"
                value={formData.comments}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.comments && (
                <p className="text-red-500 text-sm">{errors.comments}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {t("submit")}
              </button>
            </div>
          </form>

          {successMessage && (
            <p className="text-green-600 text-center mt-4">{successMessage}</p>
          )}
        </div>
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
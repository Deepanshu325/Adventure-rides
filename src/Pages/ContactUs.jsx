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

 
  const {translang }  = useLanguage();

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
    if (!formData.name.trim()) tempErrors.name = translang("nameRequired");
    if (!formData.surname.trim()) tempErrors.surname = translang("surnameRequired");
    if (!formData.email.trim()) tempErrors.email = translang("emailRequired");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = translang("emailInvalid");
    if (!formData.city.trim()) tempErrors.city = translang("cityRequired");
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     fetch("https://adventurerides-backend.onrender.com/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           setSuccessMessage(translang("EmailsentSucess"));
  //           setIsDownloadEnabled(true);
  //         } else {
  //           setSuccessMessage(translang("emailSentFailure"));
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //         setSuccessMessage(translang("emailSentFailure"));
  //       });
  //   }

     
  // };

 


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
            setSuccessMessage(translang("EmailsentSucess"));
            setIsDownloadEnabled(true);
            // Reset form fields
            setFormData({
              name: "",
              surname: "",
              email: "",
              mobile: "",
              city: "",
              currentBike: "",
              comments: "",
            });
            setErrors({}); // Clear any validation errors

            setTimeout(() => {
              setSuccessMessage("")
            }, 2000);
          } else {
            setSuccessMessage(translang("emailSentFailure"));
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setSuccessMessage(translang("emailSentFailure"));
        });
    }
  };
  

  return (
    <>
      <p className="text-center mt-12 text-xl font-bold text-blue-500 md:text-3xl uppercase mb-12">
        {translang("contactus")}
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
            {translang("contact")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: translang("name1"), name: "name", required: true },
              { label: translang("surname"), name: "surname", required: true },
              { label: translang("email"), name: "email", type: "email", required: true },
              {
                label: `${translang("mob")} `,
                name: "mobile",
                required: false,
              },
              { label: translang("city"), name: "city", required: true },
              {
                label: `${translang("currentbike")} `,
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
                {translang("Message")}
              </label>
              <textarea
                id="comments"
                name="comments"
                maxLength="1000" 
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
                {translang("submit")}
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

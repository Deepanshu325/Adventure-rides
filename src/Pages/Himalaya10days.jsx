import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer.jsx";
import { useLanguage } from "../Components/Languagecontext.js";
import AOS from "aos";
import "aos/dist/aos.css";
import him10 from "../Assets/Images/Himachal/10. HIM 10d DownL Page_19_11zon.jpeg"

const Himalaya10days  = () => {
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
    if (!formData.mobile.trim()) tempErrors.mobile = t("mobileRequired");
    if (!formData.city.trim()) tempErrors.city = t("cityRequired");
    if (!formData.currentBike.trim())
      tempErrors.currentBike = t("bikeRequired");
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSuccessMessage(t("emailSentSuccess"));
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

  const handleDownload = () => {
    fetch("http://localhost:5000/send-download-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email, name: formData.name }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage(t("Detail has been sent to your email"));
        } else {
          alert(t("downloadEmailFailure"));
        }
      })
      .catch((error) => {
        console.error("Error sending download email:", error);
        alert(t("emailError"));
      });
  };

  return (
    <>
    <div className="p-5 max-w-screen-lg mx-auto overflow-hidden">
       
       <p className="text-center mt-8  text-xl font-extrabold text-orange-600 md:text-6xl">
         {t("contacthead")} for 10 days
       </p>
        
       
       </div>
       <div
         className="mt-10 w-1/2 md:w-60 m-auto h-0.5 bg-sky-500 mb-1"
         data-aos="fade-left"
       ></div>
       <div
         className="w-40 md:w-72 m-auto h-0.5 bg-sky-500 mb-12"
         data-aos="fade-right"
       ></div>

       <div className="w-80 md:w- lg:w-[100vh] mx-auto">
         <img src={him10} alt="" />
         </div>
      <div
        className="bg-grey-500 flex items-center justify-center min-h-screen"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
            {t("contactus")}
          </h2>
          {successMessage && (
            <p className="text-green-600 text-center mb-4">{successMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: t("name1"), name: "name" },
              { label: t("surname"), name: "surname" },
              { label: t("email"), name: "email", type: "email" },
              { label: t("mob"), name: "mobile" },
              { label: t("city"), name: "city" },
              { label: t("currentbike"), name: "currentBike" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-600"
                >
                  {field.label} <span className="text-red-500">*</span>
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {t("submit")}
              </button>
            </div>
          </form>

          <div className="mt-4">
            <button
              disabled={!isDownloadEnabled}
              onClick={handleDownload}
              className={`w-full py-2 px-4 rounded-lg ${
                isDownloadEnabled
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {t("download")}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default Himalaya10days;

import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer.jsx";
import { useLanguage } from "../Components/Languagecontext.js";
import AOS from "aos";
import "aos/dist/aos.css";
import raj10 from "../Assets/Home/WhatsApp Image 2024-12-19 at 2.02.06 PM.jpeg";

const Rajasthan10daysvip = () => {

  const langauge = sessionStorage.getItem("language")
  


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
  const [isLoading, setIsLoading] = useState(false); // Add state to control spinner
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
      fetch("https://adventurerides-backend.onrender.com/send-download-email-raj10daysvip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
   

        .then((response) => {
          if (response.ok) {
            setSuccessMessage(t("Detail"));
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
    if(langauge == "fr"){
      setIsLoading(true); 
      fetch("https://adventurerides-backend.onrender.com/send-download-email-raj10daysvipfr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, name: formData.name }),
      }).then((response) => {
        if (response.ok) {
          setSuccessMessage(t("EmailsentSuccess"));
        } else {
          alert(t("downloadEmailFailure"));
        }
      })
      .catch((error) => {
        console.error("Error sending download email:", error);
        alert(t("emailError"));
      }) .finally(() => {
        setIsLoading(false); // Hide spinner once request is done
      });

        }else
     
        setIsLoading(true); 
    fetch("https://adventurerides-backend.onrender.com/send-download-email-raj10daysvip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email, name: formData.name }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage(t("EmailsentSuccess"));
        } else {
          alert(t("downloadEmailFailure"));
        }
      })
      .catch((error) => {
        console.error("Error sending download email:", error);
        alert(t("emailError"));
      }) .finally(() => {
        setIsLoading(false); // Hide spinner once request is done
      });
  };

  return (
    <>
      <div className="p-5 max-w-screen-lg mx-auto">
        <p className="text-center mt-8 text-xl font-bold text-blue-500 md:text-3xl">
          {t("contacthead")} for 10 days [vip]
        </p>
      </div>
      <div
        className="mt-10 w-1/2 md:w-60 m-auto h-0.5 bg-sky-500 mb-1"
        data-aos="fade-left"
      ></div>
      <div
        className="w-96 md:w-72 m-auto h-0.5 bg-sky-500 mb-12"
        data-aos="fade-right"
      ></div>
      <div className="w-80 md:w-[35%] lg:w-[40%] mx-auto">
        <img src={raj10} alt="Rajasthan 10 Days" className="rounded-2xl" />
      </div>
      <div
        className="bg-grey-500 flex items-center justify-center min-h-screen"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-lg shadow-xl w-full md:max-w-[40%]">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
            {t("contactus")}
          </h2>
         
          <form onSubmit={handleDownload} className="space-y-4">
            {[
              { label: t("name1"), name: "name", required: true },
              { label: t("surname"), name: "surname", required: true },
              { label: t("email"), name: "email", type: "email", required: true },
              { label: `${t("mob")} (${t("optional")})`, name: "mobile", required: false },
              { label: t("city"), name: "city", required: true },
              { label: `${t("currentbike")} (${t("optional")})`, name: "currentBike", required: false },
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {t("submit")}
              </button>
            </div>
          </form>
          
           {/* Spinner - Positioned in the center of the form */}
         {isLoading && (
            
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
                <h1 className="font-bold text-blue-500">{t("Detail")}</h1>
              
              <div className="spinner-dot-circle">
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
              </div>
            </div>
          )}

          {successMessage && (
            <p className="text-green-600 text-center mb-4">{successMessage}</p>
          )}
          
        </div>
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default Rajasthan10daysvip;

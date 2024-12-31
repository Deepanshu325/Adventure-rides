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

  const {translang} = useLanguage();

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
    if (!formData.name.trim()) tempErrors.name = translang("nameRequired");
    if (!formData.surname.trim()) tempErrors.surname = translang("surnameRequired");
    if (!formData.email.trim()) tempErrors.email = translang("emailRequired");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = translang("emailInvalid");
    if (!formData.city.trim()) tempErrors.city = translang("cityRequired");
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };



  const handleDownload = (e) => {



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
          } else {
            setSuccessMessage(translang("emailSentFailure"));
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setSuccessMessage(translang("emailSentFailure"));
        });
    }


    e.preventDefault()

    if (validate()) {
      if (langauge == "fr") {
        setIsLoading(true);
        fetch("https://adventurerides-backend.onrender.com/send-download-email-raj10daysvipfr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email, name: formData.name }),
        }).then((response) => {
          if (response.ok) {
            setSuccessMessage(translang("MailEnvoiSucess"));
          } else {
            alert(translang("downloadEmailFailure"));
          }
        })
          .catch((error) => {
            console.error("Error sending download email:", error);
            alert(translang("emailError"));
          }).finally(() => {
            setIsLoading(false); // Hide spinner once request is done
          });

      } else {



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
              setSuccessMessage(translang("EmailsentSuccess"));
            } else {
              alert(translang("downloadEmailFailure"));
            }
          })
          .catch((error) => {
            console.error("Error sending download email:", error);
            alert(translang("emailError"));
          }).finally(() => {
            setIsLoading(false); // Hide spinner once request is done
          });
      };
    }
  }

  return (
    <>
      <div className="p-5 max-w-screen-lg mx-auto">
        <p className="text-center mt-8 text-xl font-bold text-blue-500 md:text-3xl mb-12">
          {translang("contacthead")} for 10 days [vip]
        </p>
      </div>

      <div className="w-80 md:w-[35%] lg:w-[40%] mx-auto">
        <img src={raj10} alt="Rajasthan 10 Days" className="rounded-2xl" />
      </div>
      <div
        className="bg-grey-500 flex items-center justify-center min-h-screen"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-lg shadow-xl w-full md:max-w-[40%]">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
            {translang("contactus")}
          </h2>

          <form onSubmit={handleDownload} className="space-y-4">
            {[
              { label: translang("name1"), name: "name", required: true },
              { label: translang("surname"), name: "surname", required: true },
              { label: translang("email"), name: "email", type: "email", required: true },
              { label: `${translang("mob")} `, name: "mobile", required: false },
              { label: translang("city"), name: "city", required: true },
              { label: `${translang("currentbike")} `, name: "currentBike", required: false },
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
                {translang("submit")}
              </button>
            </div>
          </form>

          {/* Spinner - Positioned in the center of the form */}
          {isLoading && (

            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
              <h1 className="font-bold text-blue-500">{translang("Detail")}</h1>

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
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
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

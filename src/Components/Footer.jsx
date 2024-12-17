import React from "react";
import { Link } from "react-router-dom";
import youtube from "../Assets/Icons/1. YT logo on video.png"
import Insta from "../Assets/Icons/InstagramColoricon.webp"
import facebook from "../Assets/Icons/FacebookColored.png"
import { useLanguage } from "./Languagecontext";
import privacy from "../Assets/Privacypolicy/PPAR - Privacy Policy 2024.pdf"
import term from "../Assets/Privacypolicy/PPAR - T&C 2024.pdf"
import Linkedin from "../Assets/Icons/linkedinlogo.webp"

const Footer = () => {
  const {t} = useLanguage();
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
          <Link to="/aboutus"> <h3 className="text-lg font-bold mb-4">{t("about")}</h3> </Link> 
            <p className="text-sm text-gray-400">
           {t("aboutdes")}
            </p>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4"></h3>
           
          </div>

          {/* Contact Details */}
          <div>
        <Link to="/download">    <h3 className="text-lg font-bold mb-4">{t('letsconnect')}</h3> </Link>
            <ul className="font-thin text-sm text-gray-400 space-y-2">
            
              <li>Address: DE 153, Block DE, Tagore Garden, Tagore Garden Extension, New Delhi, 
              Delhi, 110027</li>
            </ul>
              <br />
            <button
              onClick={() => window.location.href = "/download"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
            >
              {t('contact')}
            </button>
            
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('follow')}</h3>
            <div className="flex space-x-1  ">
              <a
               

                href="https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA"

                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <img src={youtube} alt="" className=" w-7 h-7" />
              </a>
              <a
                  href="https://www.instagram.com/adventurerides.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <img src={Insta} alt="" className="relative bottom-3 w-10" />
              </a>
              
              <a
                href="https://www.facebook.com/profile.php?id=100064155602022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <img src={facebook} alt="" className=" w-7" />
              </a>

              <a
                href="https://www.linkedin.com/company/adventure-rides/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <img src={Linkedin} alt="" className=" w-9 -translate-y-1" />
              </a> 

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-200"
            >
           <button onClick={() => window.open(privacy, "_blank")}>   Terms & Conditions</button>
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-200"
            >
             <button  onClick={() => window.open(term, "_blank")} > Privacy Policy</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


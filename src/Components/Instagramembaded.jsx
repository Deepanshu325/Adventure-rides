import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InstagramEmbed = ({ embedUrl }) => {
  const imageUrl = "https://gallerypng.com/wp-content/uploads/2024/07/instagram-logo-png-photo-600x750.png";
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 300,    // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: true,     // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Ensure Instagram's embed script is loaded
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div   
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: "100%",
        minHeight: "540px", // Minimum height to match Instagram's embed size
        
      }}

      
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="14"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "320px",
          width: "100%", // Responsive width
          height: "540px", // Fixed height to ensure consistent size
        }}
        data-aos="fade-right"
      >
        <div style={{ padding: "16px" }}>
          <a
            href={embedUrl}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;

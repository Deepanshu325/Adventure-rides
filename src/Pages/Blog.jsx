import React from 'react';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blog = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true      // Whether animation should happen only once
    });
  }, []);


  const iframeLinks = [
    "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100064155602022%2Fvideos%2F953440956831975%2F&show_text=false&width=560&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100064155602022%2Fvideos%2F1601569357071710%2F&show_text=false&width=269&t=0",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ZcYj2z2skZ3kbe5YsbZ9jCR8zxJK6rEv3AEHDUAbrPDKLPtvTSfQhAT5EDWCKwF6l%26id%3D100064155602022&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0Jd1xaaUPuwcgQ96cbTy9MmJU677Fz3gSBSMQWhZ6VPaBTNrg1sN1ZfQdwrAyaiYNl%26id%3D100064155602022&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02GbiyygzHQvx7ZZfUzyKjGa2svoPhMuvNEVSFgXpMQNN2queRgNkBGPHPwMDGX88Nl%26id%3D100064155602022&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i9pCarreUcxrJ1RVvbRtAGrwNdPt6dfxRC25xkA77455nUy3nQFjZMLrUvTusL4ql%26id%3D100064155602022&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02Bj67HBjYns6o9CLZUAxKUS5qKmhDsFMB9Kh5GC9q1WQnaUfEJpUCTx2NvwriERdwl%26id%3D100064155602022&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D7507102172637308%26id%3D100064155602022%26substory_index%3D7507102172637308&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0BbmkfbRiBaWrud7hEepr6obp642rYstkUiJmnFtxAyNPXMtWv37SUAVE6zmdyWY1l%26id%3D100064155602022&show_text=true&width=500",
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02MWerHDTBgmmDaDz34gpq2mwe1zboFx1imP7YKnUs4V1KTr1iik99Bhopro69Uz1Ql%26id%3D100064155602022&show_text=true&width=500",
  ];

  return (
    <>
      <div className="p-5 max-w-screen-lg mx-auto">
        <h1 className="pb-6 text-3xl text-center text-orange-500 font-extrabold md:text-5xl lg:text-6xl">
          Blog
        </h1>
        <div className="w-40 md:w-60 mx-auto h-0.5 bg-sky-500 mb-1" data-aos="fade-right"></div>
        <div className="w-56 md:w-72 mx-auto h-0.5 bg-sky-500 mb-12" data-aos="fade-left"></div>

        <div className="space-y-12" >
          {iframeLinks.map((src, index) => (
            <div
              key={index}
              className="w-full max-w-4xl mx-auto border border-gray-300 rounded-lg overflow-hidden"
              style={{
                position: 'relative',
                paddingBottom: '56.25%' /* Aspect Ratio 16:9 */,
                height: 0,
              }}

              data-aos="fade-right"
            >
              <iframe
                src={src}
                scrolling="yes"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default Blog;

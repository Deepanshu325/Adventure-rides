import React from 'react';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true      // Whether animation should happen only once
    });
  }, []);
  const [posts, setPosts] = useState([]);
   const profileId = '10162162096432560'; //  Replace with the Profile/Page ID
    const accessToken ='EAAMiiPjRbGwBO4tgZCaGbQAwg81inhUC8FTg82pqNyQx0zNlBNTZBOVZAftHlXzFBucrMgaBrZB3rQJlncZCopvIWZBYBUKZCdt8eGk5p3084IqZAXnnWy4D6IKTcWsunLthaCuO1pGqSZADAi8WQoRCZB4sWxlsURcQalCq4jXRNn54Nl5BTXubPksbTVnWfgfgZCxu4yEvgZDZD'; // Replace with your Access Token

  useEffect(() => {
    const fetchPosts = async () => {
      const url = `https://graph.facebook.com/v21.0/me/posts?fields=id,created_time,name,message,picture,full_picture,permalink_url&access_token=EAAMiiPjRbGwBO4tgZCaGbQAwg81inhUC8FTg82pqNyQx0zNlBNTZBOVZAftHlXzFBucrMgaBrZB3rQJlncZCopvIWZBYBUKZCdt8eGk5p3084IqZAXnnWy4D6IKTcWsunLthaCuO1pGqSZADAi8WQoRCZB4sWxlsURcQalCq4jXRNn54Nl5BTXubPksbTVnWfgfgZCxu4yEvgZDZD`;
      try {
        const response = await axios.get(url);
        console.log(response.data.data)
        setPosts(response.data.data || []); // Update with fetched posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();

    // Polling for updates every 5 minutes (optional)
    const interval = setInterval(fetchPosts, 300000);

    return () => clearInterval(interval);
  }, [profileId, accessToken]);

  return (
    <>
      <div>
        <h1 className="text-center mt-12 mb-12  text-xl font-bold text-blue-500 md:text-3xl  " data-aos="fade-in">BLOG</h1>


        <div style={{ justifyContent: 'center' }} className='w-full'>
          {posts.length > 0 ? (
            posts.map(post => (
              <a href={post.permalink_url} target='_blank'>
                <div
                  key={post.id}
                  className='mx-auto mb-14  '
                  style={{
                    maxWidth: '900px',
                    width: '96%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {post.full_picture && (
                    <img
                      src={post.full_picture}
                      alt="Post Visual"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                      }}

                    />
                  )}


                  <div style={{ padding: '15px' }}>
                    <p style={{ margin: '10px 0', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                      {post.message || 'No message available'}
                    </p>
                    <small style={{ fontSize: '12px', color: '#777' }}>
                      {new Date(post.created_time).toLocaleString()}
                    </small>
                  </div>
                </div></a>
            ))
          ) : (
            <div className="w-full h-auto flex justify-center items-center ">
            <div className="rounded-md h-16 w-16 border-4 border-t-4 border-blue-500 animate-spin  mx-auto "></div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default Blog;

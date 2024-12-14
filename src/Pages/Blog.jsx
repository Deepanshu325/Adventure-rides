import React from 'react';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect  , useState} from 'react';
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
    const profileId = '932913345523844'; // Replace with the Profile/Page ID
    const accessToken ='EAAMiiPjRbGwBO3TsFeMJhC0OGJgjmUIOrJKFJF3cZCZBS4siXZBQb6I9Cm9WYlnnZCDOhRSmHl3C8Fc2I31fl7ZCL0Qd17B5JAArqWCIoaTexliHl4CVwDoALgj1pVdrJF7pS5Jw7gZABGM0YPm5hrUqC1j1nTv2oXeZAZACZCMKJLBxSoRtzaZCmZAN0zko1S1pO9P5nIByuUcl6cD1eyTMvyz90tspZC3PIj58AZClZAlnsm'; // Replace with your Access Token

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `https://graph.facebook.com/v15.0/932913345523844?access_token=EAAMiiPjRbGwBO3TsFeMJhC0OGJgjmUIOrJKFJF3cZCZBS4siXZBQb6I9Cm9WYlnnZCDOhRSmHl3C8Fc2I31fl7ZCL0Qd17B5JAArqWCIoaTexliHl4CVwDoALgj1pVdrJF7pS5Jw7gZABGM0YPm5hrUqC1j1nTv2oXeZAZACZCMKJLBxSoRtzaZCmZAN0zko1S1pO9P5nIByuUcl6cD1eyTMvyz90tspZC3PIj58AZClZAlnsm`;
            try {
                const response = await axios.get(url);
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
            <h2>Facebook Posts</h2>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <p>{post.message || 'No message available'}</p>
                        <small>{new Date(post.created_time).toLocaleString()}</small>
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>

<div className="mt-28">
<Footer />
</div>
</>
    );
};

export default Blog;

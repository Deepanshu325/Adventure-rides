import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Instagram User ID and Access Token
  const instagramUserId = "YOUR_INSTAGRAM_USER_ID"; // Replace with your Instagram User ID
  const accessToken = "YOUR_INSTAGRAM_ACCESS_TOKEN"; // Replace with your Instagram Access Token

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Make the request to Instagram Graph API
        const response = await fetch(
          `https://graph.instagram.com/${instagramUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();

        // Format the posts into the expected structure
        const fetchedPosts = data.data.map((post) => ({
          id: post.id,
          caption: post.caption || "No caption available",
          mediaUrl: post.media_url,
          mediaType: post.media_type,
          timestamp: post.timestamp,
        }));

        setPosts(fetchedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [instagramUserId, accessToken]);

  if (loading) return <div>Loading Instagram posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Instagram Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: "20px", padding: "10px", border: "1px solid #ddd" }}>
          {post.mediaType === "IMAGE" || post.mediaType === "CAROUSEL_ALBUM" ? (
            <img
              src={post.mediaUrl}
              alt={post.caption}
              style={{ width: "100%", height: "auto" }}
            />
          ) : post.mediaType === "VIDEO" ? (
            <video controls style={{ width: "100%", height: "auto" }}>
              <source src={post.mediaUrl} type="video/mp4" />
            </video>
          ) : null}
          <p><strong>Caption:</strong> {post.caption}</p>
          <p><strong>Timestamp:</strong> {new Date(post.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

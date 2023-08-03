import React, { useEffect, useState } from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch initial posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Location: {post.location}</p>
          <p>Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
          <p>Price: {post.price}</p>
          <p>Posted by: {post.author.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

import React, { useState } from 'react';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend or use static data
  // For simplicity, using static data here
  const dummyPosts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' }
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
      {dummyPosts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;

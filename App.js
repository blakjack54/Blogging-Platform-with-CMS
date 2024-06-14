import React from 'react';
import BlogPostList from './components/BlogPostList';
import PostEditor from './components/PostEditor';

const App = () => {
  return (
    <div>
      <h1>Blogging Platform</h1>
      <PostEditor />
      <BlogPostList />
    </div>
  );
};

export default App;


import React from 'react';
import PostList from '../components/PostList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <PostList />
    </div>
  );
};

export default HomePage;


export {};
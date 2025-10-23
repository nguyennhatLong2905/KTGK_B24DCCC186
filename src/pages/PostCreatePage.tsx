import React from 'react';
import PostForm from '../components/PostForm';

const PostCreatePage: React.FC = () => {
  const handleCreatePost = (data: any) => {
    alert('Đăng bài thành công!'); // có thể thay bằng logic thêm vào state
  };

  return (
    <div>
      <h2>Tạo bài viết mới</h2>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default PostCreatePage;

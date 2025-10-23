import React from 'react';
import { useParams } from 'react-router-dom';

// Component đại diện cho trang chỉnh sửa một bài viết cụ thể.
const PostEditPage: React.FC = () => {
  // Lấy ID bài viết từ URL
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chỉnh Sửa Bài Viết</h1>
      <p>Đây là form để chỉnh sửa nội dung Bài Viết có ID: <strong>{id}</strong></p>
      {/* Trong thực tế, bạn sẽ thêm logic để fetch dữ liệu hiện tại và form chỉnh sửa ở đây */}
    </div>
  );
};

export default PostEditPage;

import React from 'react';
import { useParams } from 'react-router-dom';

// Component đại diện cho trang chi tiết của một bài viết cụ thể.
const PostDetailPage: React.FC = () => {
  // Lấy ID bài viết từ URL
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Chi Tiết Bài Viết</h1>
      <p>Đang hiển thị nội dung cho Bài Viết có ID: <strong>{id}</strong></p>
      {/* Trong thực tế, bạn sẽ thêm logic để fetch dữ liệu bài viết dựa trên ID ở đây */}
    </div>
  );
};

export default PostDetailPage;

import React, { useState } from 'react';
import PostCard from './PostCard';

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  thumbnail: string;
  description: string;
}

const initialPosts: Post[] = [
  { id: '1', title: 'Khám phá công nghệ AI', author: 'Tác giả 1', date: '2023-10-01', thumbnail: 'https://picsum.photos/200/150?random=1', description: 'Bài viết về những tiến bộ mới nhất trong lĩnh vực AI.' },
  { id: '2', title: 'Du lịch mùa thu Hà Nội', author: 'Tác giả 2', date: '2023-10-02', thumbnail: 'https://picsum.photos/200/150?random=2', description: 'Hướng dẫn tham quan các địa điểm đẹp nhất mùa thu ở Hà Nội.' },
  { id: '3', title: 'Ẩm thực Việt Nam', author: 'Tác giả 3', date: '2023-10-03', thumbnail: 'https://picsum.photos/200/150?random=3', description: 'Khám phá các món ăn truyền thống và đặc sản vùng miền.' },
  { id: '4', title: 'Công nghệ Web 2025', author: 'Tác giả 4', date: '2023-10-04', thumbnail: 'https://picsum.photos/200/150?random=4', description: 'Xu hướng phát triển web và framework hot nhất năm 2025.' },
  { id: '5', title: 'Kinh nghiệm sống tối giản', author: 'Tác giả 5', date: '2023-10-05', thumbnail: 'https://picsum.photos/200/150?random=5', description: 'Chia sẻ cách sống tối giản giúp giảm stress và tăng hiệu quả.' },
  { id: '6', title: 'Chinh phục thiên nhiên', author: 'Tác giả 6', date: '2023-10-06', thumbnail: 'https://picsum.photos/200/150?random=6', description: 'Những trải nghiệm thú vị khi khám phá núi rừng Việt Nam.' },
];

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const deletePost = (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div>
      <h2>Tổng số bài viết: {posts.length}</h2>
      <div className="post-list">
        {posts.map(post => (
          <PostCard key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

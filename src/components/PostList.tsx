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
  { id: '1', title: 'Bài viết 1', author: 'Tác giả 1', date: '2023-10-01', thumbnail: 'https://picsum.photos/200/150?1', description: 'Mô tả bài viết 1' },
  { id: '2', title: 'Bài viết 2', author: 'Tác giả 2', date: '2023-10-02', thumbnail: 'https://picsum.photos/200/150?2', description: 'Mô tả bài viết 2' },
  // Thêm bài viết khác nếu muốn
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

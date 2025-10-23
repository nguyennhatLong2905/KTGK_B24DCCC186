import React from 'react';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    author: string;
    date: string;
    thumbnail: string;
    description: string;
  };
  onDelete: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <div className="card-body">
        <h3>{post.title}</h3>
        <p>by {post.author} | {post.date}</p>
        <p>{post.description}</p>
        <div className="actions">
          <Link to={`/posts/${post.id}`}>Đọc thêm</Link>
          <button onClick={() => onDelete(post.id)}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../types/Post";

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  return (
    <div className="card">
      <img src={post.thumbnail} alt={post.title} className="thumb" />
      <h3>{post.title}</h3>
      <p className="meta">
        {post.author} • {post.date}
      </p>
      <p>{post.content.substring(0, 100)}...</p>
      <div className="actions">
        <Link to={`/posts/${post.id}`} className="btn">
          Đọc thêm
        </Link>
        <button onClick={() => onDelete(post.id)} className="btn danger">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default PostCard;

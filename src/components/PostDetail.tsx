import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { Post } from "../types/Post";

interface PostDetailProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Bài viết không tồn tại!</h2>;
  }

  const handleDelete = () => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
      navigate("/");
    }
  };

  return (
    <div className="post-detail">
      <img src={post.thumbnail} alt={post.title} className="thumb-large" />
      <h2>{post.title}</h2>
      <p className="meta">
        {post.author} • {post.date} • {post.category}
      </p>
      <p>{post.content}</p>

      <div className="actions">
        <button onClick={() => navigate("/")} className="btn">
          Quay lại
        </button>
        <Link to={`/posts/edit/${post.id}`} className="btn primary">
          Chỉnh sửa
        </Link>
        <button onClick={handleDelete} className="btn danger">
          Xóa bài viết
        </button>
      </div>
    </div>
  );
};

export default PostDetail;

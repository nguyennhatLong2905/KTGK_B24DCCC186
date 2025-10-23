import React from "react";
import type { Post } from "../types/Post";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {
  return (
    <div>
      <h2>Danh sách bài viết ({posts.length})</h2>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

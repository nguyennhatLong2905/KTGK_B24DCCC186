import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import { samplePosts } from "./data/sampleData";
import type { Post } from "./types/Post";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const addPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  const updatePost = (updated: Post) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const deletePost = (id: number) => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Trang chủ: danh sách bài viết */}
          <Route path="/" element={<PostList posts={posts} onDelete={deletePost} />} />

          {/* Trang chi tiết */}
          <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={deletePost} />} />

          {/* Trang tạo bài viết */}
          <Route path="/create" element={<PostForm posts={posts} onSubmit={addPost} />} />

          {/* Trang chỉnh sửa bài viết */}
          <Route
            path="/posts/edit/:id"
            element={<PostForm posts={posts} onSubmit={updatePost} editMode />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

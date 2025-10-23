import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../types/Post";

interface PostFormProps {
  posts: Post[];
  onSubmit: (post: Post) => void;
  editMode?: boolean;
}

const PostForm: React.FC<PostFormProps> = ({ posts, onSubmit, editMode }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingPost = posts.find((p) => p.id === Number(id));

  const [formData, setFormData] = useState<Post>(
    existingPost || {
      id: Date.now(),
      title: "",
      author: "",
      thumbnail: "",
      content: "",
      category: "Khác",
      date: new Date().toISOString().split("T")[0],
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.title.length < 10) {
      alert("Tiêu đề phải ít nhất 10 ký tự!");
      return;
    }
    if (formData.author.length < 3) {
      alert("Tác giả phải ít nhất 3 ký tự!");
      return;
    }
    if (formData.content.length < 50) {
      alert("Nội dung phải ít nhất 50 ký tự!");
      return;
    }

    onSubmit(formData);
    alert(editMode ? "Cập nhật thành công!" : "Đăng bài thành công!");
    navigate("/");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>{editMode ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>

      <input name="title" placeholder="Tiêu đề" value={formData.title} onChange={handleChange} required />
      <input name="author" placeholder="Tác giả" value={formData.author} onChange={handleChange} required />
      <input name="thumbnail" placeholder="URL ảnh thumbnail" value={formData.thumbnail} onChange={handleChange} />
      <textarea name="content" placeholder="Nội dung bài viết" rows={10} value={formData.content} onChange={handleChange} />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Du lịch">Du lịch</option>
        <option value="Ẩm thực">Ẩm thực</option>
        <option value="Đời sống">Đời sống</option>
        <option value="Khác">Khác</option>
      </select>

      <div className="form-actions">
        <button type="submit" className="btn primary">
          {editMode ? "Cập nhật" : "Đăng bài"}
        </button>
        <button type="button" className="btn" onClick={() => navigate("/")}>
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostForm;

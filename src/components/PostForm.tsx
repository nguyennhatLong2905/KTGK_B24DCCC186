import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostFormProps {
  initialData?: {
    title: string;
    author: string;
    thumbnail: string;
    content: string;
    category: string;
  };
  onSubmit: (data: any) => void;
}

const categories = ['Công nghệ', 'Du lịch', 'Ẩm thực', 'Đời sống', 'Khác'];

const PostForm: React.FC<PostFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || categories[0]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, thumbnail, content, category });
    navigate('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Tiêu đề" required minLength={10} />
      <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Tác giả" required minLength={3} />
      <input type="text" value={thumbnail} onChange={e => setThumbnail(e.target.value)} placeholder="URL ảnh thumbnail" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Nội dung bài viết" required minLength={50}></textarea>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <button type="submit">Đăng bài</button>
      <button type="button" onClick={() => navigate('/')}>Hủy</button>
    </form>
  );
};

export default PostForm;

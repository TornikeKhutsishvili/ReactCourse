import React from 'react'
import useGetPosts from '../../hooks/useGetPosts';
import type { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/posts/thunks/posts.thunks';
import PostsList from '../../components/posts/PostsList';
import { useNavigate } from 'react-router-dom';

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const { posts, loading, error } = useGetPosts();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleDetail = (id: number) => {
    navigate(`/post-detail/${id}`);
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="posts">
      <PostsList posts={posts} onDelete={handleDelete} onDetail={handleDetail} />
    </div>
  )
}

export default Posts;
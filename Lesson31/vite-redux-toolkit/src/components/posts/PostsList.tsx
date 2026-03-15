import React from 'react'
import PostCard from './PostCard';
import type { PostList } from '../../interfaces/postList.interface';

interface UserListProps {
  posts: PostList[];
  onDelete: (id: number) => void;
  onDetail: (id: number) => void;
}

const PostsList:React.FC<UserListProps> = ({ posts = [], onDelete, onDetail }) => {
  return (
    <>
      {posts.map(({ ...post }) => (
        <PostCard key={post.id} {...post} onDelete={onDelete} onDetail={onDetail} />
      ))}
    </>
  )
}

export default PostsList;
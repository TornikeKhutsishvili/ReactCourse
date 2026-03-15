import React from 'react'
import { useParams } from 'react-router-dom';
import useGetPosts from '../../hooks/useGetPosts';

const PostDetails: React.FC = () => {
  const { id } = useParams();
  const { posts, loading, error } = useGetPosts();
  const post = posts.find((p) => p.id === Number(id))

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error loading post data</p>;
  if (!post) return <p>Post not found!</p>;

  return (
    <div className="post">
      {post && (
        <>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{post.title}</h1>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PostDetails;
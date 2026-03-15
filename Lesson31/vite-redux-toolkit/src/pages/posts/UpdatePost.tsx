import { useEffect, useMemo } from "react";
import PostForm from "../../components/posts/PostForm";
import useGetPosts from "../../hooks/useGetPosts";
import type { AppDispatch } from "../../store";
import type { PostFormSubmit } from "../../interfaces/postForm.type";
import type { PostList } from "../../interfaces/postList.interface";
import { getPosts } from "../../store/posts/thunks/posts.thunks";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUpdatePost } from "../../hooks/useUpdatePost";

const UpdatePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useGetPosts();
  const { updatePostHandler } = useUpdatePost();

  useEffect(() => {
    if (!posts.length) dispatch(getPosts());
  }, [dispatch, posts.length]);

  const currentPost = useMemo(
    () => posts.find((p: PostList) => p.id === Number(id)),
    [posts, id]
  );

  if (loading) return <p>Loading post data...</p>;
  if (error) return <p>Error loading post data</p>;
  if (!currentPost) return <p>Post not found</p>;

  const onSubmit = (data: PostFormSubmit) => {
    if (!id || !currentPost) return;
    updatePostHandler(Number(id), currentPost, data);
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <PostForm
        key={id}
        title={currentPost.title}
        body={currentPost.body}
        onFormSubmit={onSubmit}
      />
    </div>
  )
}

export default UpdatePost;
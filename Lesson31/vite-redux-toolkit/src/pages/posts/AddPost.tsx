import { useSelector } from "react-redux";
import type { PostFormSubmit } from "../../interfaces/postForm.type";
import { usersErrorSelector, usersLoadingSelector } from "../../store/users/slice/users.slice";
import { useAddPost } from "../../hooks/useAddPost";
import PostForm from "../../components/posts/PostForm";

const AddPost = () => {
  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);
  const { submitPost } = useAddPost();

  const onSubmit = (data: PostFormSubmit) => {
    submitPost(data)
  };

    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="add-posts-wrapper" style={{ minHeight: "85vh" }}>
      <div className="container">
        <PostForm onFormSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default AddPost;
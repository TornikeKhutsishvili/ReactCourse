import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../store/posts/thunks/posts.thunks";
import type { AppDispatch } from "../store";
import type { PostList } from "../interfaces/postList.interface";
import type { PostFormSubmit } from "../interfaces/postForm.type";

export const useUpdatePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const updatePostHandler = async( id: number, currentPost: PostList, data: PostFormSubmit ) => {
    return dispatch(
      updatePost({ id, post: { ...currentPost, ...data } })
    ).unwrap().then(() => {
      navigate("/posts")
    });
  };

  return { updatePostHandler };
};
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../store/posts/thunks/posts.thunks";
import type { AppDispatch } from "../store";
import type { AddPostInput } from "../interfaces/addPost.type";

export const useAddPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const submitPost = async(data: AddPostInput) => {
    return dispatch(
      addPost(data)
    ).unwrap().then(() => {
      navigate("/posts")
    });
  };

  return { submitPost };
};
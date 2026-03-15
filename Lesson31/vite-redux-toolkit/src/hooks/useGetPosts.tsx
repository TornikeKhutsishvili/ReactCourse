import { useEffect } from 'react'
import { getPosts } from '../store/posts/thunks/posts.thunks';
import { useDispatch, useSelector } from 'react-redux';
import { postsErrorSelector, postsListSelector, postsLoadingSelector } from '../store/posts/slice/posts.slice';
import type { AppDispatch } from '../store';

const useGetPosts = () => {
  const posts = useSelector(postsListSelector);
  const loading = useSelector(postsLoadingSelector);
  const error = useSelector(postsErrorSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return { posts, loading, error };
}

export default useGetPosts;
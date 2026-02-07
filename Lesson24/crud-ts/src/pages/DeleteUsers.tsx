import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser } from "../store/users/users.thunks";
import type { AppDispatch } from "../store";

const DeleteUsers = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(deleteUser(id))
        .unwrap()
        .then(() => navigate("/users-list"))
        .catch((err: unknown) => console.error("Delete failed:", err));
    }
  }, [dispatch, id, navigate]);
};

export default DeleteUsers;

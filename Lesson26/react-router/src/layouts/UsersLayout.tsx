import { Outlet } from "react-router-dom";

const UsersLayout: React.FC = () => {
  return (
    <>
      <h1>Users</h1>
      <Outlet />
    </>
  );
};

export default UsersLayout;

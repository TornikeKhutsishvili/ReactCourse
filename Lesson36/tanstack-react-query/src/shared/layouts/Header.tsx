import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-gray-800">TanStack Query</h1>

        {/* Navigation */}
        <nav className="flex gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/todos" className={linkClass}>Todos</NavLink>
          <NavLink to="/users" className={linkClass}>Users</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
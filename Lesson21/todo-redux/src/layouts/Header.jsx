import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar Todo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Todo List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/done-todo" className="nav-link">
                    Todo Done
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/defer-todo" className="nav-link">
                    Todo Defer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

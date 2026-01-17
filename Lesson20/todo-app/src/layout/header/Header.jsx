import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { translations } = useLanguage();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">
            {translations.header.title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {translations.nav.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  {translations.nav.about}
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

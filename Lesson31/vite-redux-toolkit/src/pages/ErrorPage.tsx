import React from "react";
import { Link } from "react-router-dom"

const ErrorPage: React.FC = () => {
  return (
    <main className="error-page">
      <div className="error-container">
        <p className="error-code">404</p>
        <h1 className="error-title">Page not found</h1>
        <p className="error-description">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="error-actions">
          <Link to="/" className="btn-home">Go back home</Link>
          <Link to="/contactSupport" className="btn-support">Contact support →</Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
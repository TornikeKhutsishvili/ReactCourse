import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function ErrorPage() {
  const { translations } = useLanguage();

  return (
    <>
      <main className="d-flex align-items-center justify-content-center vh-100 bg-dark px-3 py-5">
        <div className="text-center text-white">
          <p className="text-primary fw-semibold">404</p>
          <h1 className="mt-4 display-1 fw-semibold">
            {translations.errorPage.notFound}
          </h1>
          <p className="mt-3 fs-5 text-secondary">
            {translations.errorPage.description}
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <Link to="/home" className="btn btn-primary">
              {translations.errorPage.goBackHome}
            </Link>
            <Link to="/contactSupport" className="btn btn-link text-white">
              {" "}
              {translations.errorPage.contactSupport} &rarr;
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;

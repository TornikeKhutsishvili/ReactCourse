import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0 small">
          © {currentYear} {translations.footer.app}{" "}
          {translations.footer.reserved}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { translations } = useLanguage();

  return (
    <>
      <div className="container" style={{ minHeight: "85vh" }}>
        <h2 className="pt-5">{translations.about.title}</h2>
        <p className="pt-2">{translations.about.description}</p>
      </div>
    </>
  );
};

export default About;

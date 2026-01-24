const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div
          style={{
            backgroundColor: "#0d1d2c",
            color: "white",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <p>© {currentYear} Tornike Khutsishvili</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

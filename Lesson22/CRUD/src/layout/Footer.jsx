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
          <p>© {currentYear} My CRUD Application. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

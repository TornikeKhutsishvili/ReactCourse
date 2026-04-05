import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>{currentYear}, All Right reserved</p>
    </footer>
  );
};

export default Footer;
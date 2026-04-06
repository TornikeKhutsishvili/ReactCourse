import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center">
        <p className="text-sm">© {currentYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
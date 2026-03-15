import React from 'react'

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-info"></div>
        <div className="footer-links"></div>
        <div className="footer-contact"></div>
      </div>
      <div className="container footer-bottom p-top-30 fontSize-14">
        <p>&copy; {currentYear} Tornike Khutsishvili. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
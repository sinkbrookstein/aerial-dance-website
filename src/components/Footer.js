import { FaInstagram } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
return (
  <footer className="site-footer">
    <a
    href="https://www.instagram.com/highlyclassifiedllc/">
      <FaInstagram size={40} />
    </a>
    <div className="follow-us">
      <span>Follow us</span>
    </div>
  </footer>
  );
}

export default Footer;

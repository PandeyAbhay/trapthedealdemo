import "./Footer.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/productContext";
import logo from "../../logo.png"

const Footer = () => {
  const { showFilter } = useProducts();

  return (
    <footer className={`${showFilter ? "hide-div" : null}`}>
      <div className="about">
        <Link to="/" className="nav-brand">
        <img src={logo} style={{height:"50px",width:"150px"}} alt=""/>
        </Link>

        <div className="text">An B2B Marketplace</div>

        <div className="social">
          <a href="https://github.com/himadri2110" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/himadri2110" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/himadri2110" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="quick-links">
        <div className="heading">Quick Links</div>
        <div className="sub-heading">
          <Link to="/products">Products</Link>
        </div>
        <div className="sub-heading">
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="sub-heading">
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="contact">
        <div className="heading">Contact Us</div>

        <div className="sub-heading address">
          <i className="fa fa-map-marker"></i>Studio No-2,IDHP Business Park, Noida
        </div>
        <div className="sub-heading phone">
          <i className="fa fa-phone"></i>+91 99999999
        </div>
        <div className="sub-heading e-mail">
          <i className="fa fa-envelope"></i>care@trapthedeal.com
        </div>
      </div>
    </footer>
  );
};

export { Footer };

import { NavHashLink } from "react-router-hash-link";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="top">
          <div>
            <h1>
              <NavHashLink className="tag" smooth to="/#home">
                <img
                  alt=""
                  src="/assets/img/Papel_Logo_White.png"
                  className="logo"
                />
                <span>&#174;</span>
              </NavHashLink>
            </h1>
            <p>Time to change the way we drink.</p>
          </div>
          <div id="social">
            <a
              href="https://www.instagram.com/papelwater/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <a href="/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a> */}
            <a
              href="https://www.linkedin.com/company/papel-water/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div id="bottom">
          <p>&copy; 2023 Papel Water</p>
        </div>
        <div className="bottom-tag "></div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Logo.png";

const Footer = () => {
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarColumn} center`}>
        <div className={`${styles.navbarInner} center`}>
          <div className="center">
            <img className="footer-logo" style={{width:"300px"}} src = {logo} alt="logo"/>
          </div>
          <div>
            <span>
              <a href="#facebook" className="fab fa-facebook-square">
                {" "}
              </a>
            </span>
            <span>
              <a href="#linkedin" className="fab fa-twitter">
                {" "}
              </a>
            </span>
            <span>
              <a
                href="#instagram"
                className="fab fa-instagram"
                style={{ color: "black" }}
              >
                {" "}
              </a>
            </span>
            <span>
              <a href="#pinterest" className="fab fa-pinterest">
                {" "}
              </a>
            </span>
          </div>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};
export default Footer;

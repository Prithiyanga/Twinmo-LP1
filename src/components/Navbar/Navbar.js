import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Logo.png"

const Navbar = ({ hamActive, setHamActive }) => {
    
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={logo} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} `}>
          <div className={styles.navLinksWrapper}>
            <a href="/" className={`${styles.nav} center`}>
              Platforms
            </a>
            <a href="/" className={`${styles.nav} center`}>
               Use cases
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Industries
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Services
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Blog
            </a>
          </div>
         
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

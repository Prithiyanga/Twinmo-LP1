import styles from "./Hero.module.css";
import HeroPic from "./Hero.jpeg"

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
        Unleash the Power of AI based Experimentation in Product Decisions
        </h2>
        <div className={styles.slogan}>
          <p>Experience a Day in the Life of a Product Developer Using Twinmo's Experimentation Platform</p>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src={HeroPic}
          alt="HeHE"
        />
      </div>
    </div>
  );
};
export default Hero;

import styles from "./Growth.module.css";
import { growth } from "../../constants/growth";
import GrowthBox from "./GrowthBox";

const imgURL1 =
  "http://twinmo.ai/static/media/Testrunz.e54e8279a23f20c45038.png";

const Growth = () => {
  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={`${styles.growthWrapperInner} center`}>
        <div className={styles.growthHeading}>
          <p>The Future of Product Development: Twinmo’s Vision and Commitment</p>
        </div>
        <div className={styles.growthImg}>
          <img className={styles.img1} src={imgURL1} alt="" />
        </div>
        <div className={`${styles.growthList} center`}>
          {growth.map(({ field, description }) => {
            return <GrowthBox field={field} description={description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Growth;

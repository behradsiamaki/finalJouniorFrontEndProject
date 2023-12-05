import styles from "./ServicesItem.module.css";
import image from "../../assets/images/image/qtq80-3Y32uo-1024x718.jpeg";
import { Link } from "react-router-dom";

export default function ServicesItem({data}) {
  return (
    <Link to={`/item/${data.id}`}>
      <div className={styles.servicesItem}>
        <div>
          <div className={styles.servicesItemImage}>
            <img src={data.thumbnailUrl} />
            <div className={styles.servicesItemDetail}>
              <span className={styles.musicTag}>Music</span>
            </div>
          </div>
          <div className={styles.servicesItemTitle}>{data.title}</div>
        </div>
      </div>
    </Link>
  );
}

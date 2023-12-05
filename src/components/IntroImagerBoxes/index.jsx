import styles from "./IntroImageBoxes.module.css";
import images from "../../assets/images/image/learn-programming-career-jpg.webp";
import imagePainter from "../../assets/images/image/qtq80-3Y32uo-1024x718.jpeg";
import imageNote from "../../assets/images/image/7cbe4e742bc974ab1d4f5d49dcb34e98.jpg";


export default function IntroImageBoxes() {
  return (
    <div className={styles.imageBox}>
      <div className={styles.leftSide}>
        <img src={images} />
        <div className={styles.container}>
          <div className={styles.introImageText}>
            <span className={styles.healthTag}>Health</span>
            <h1>Discovering Sources of Inspiration</h1>
            <p>
              It bachelor cheerful of mistaken. Tore has sons put upon wife use
              bred seen. Its dissimilar invitation ten has discretion
              unreserved. Had you him humoured jointure ask expenses
            </p>
            <p>by behrad siamaki . 2023-12-4</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSideBox}>
        <div className={styles.rightSide}>
          <img src={imagePainter} />
          <div className={styles.container}>
            <div className={styles.introImageTextRight}>
              <span className={styles.healthTagRight}>Health</span>
              <h3>Discovering Sources of Inspiration</h3>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={imageNote} />
          <div className={styles.container}>
            <div className={styles.introImageTextRight}>
              <span className={styles.LifeStyleTagRight}>Lifestyle</span>
              <h3>Discovering Sources of Inspiration</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

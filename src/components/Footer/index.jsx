import styles from "./Footer.module.css";
import logo from "../../assets/images/Logo/236EE4B1-B9F7-4E6C-8956-70DDC7B975F7_4_5005_c.jpeg";
import facebook from "../../assets/images/svges/facebook.svg";
import instagram from "../../assets/images/svges/instagram.svg";
import skype from "../../assets/images/svges/skype.svg";
import linkdin from "../../assets/images/svges/linkdin.svg";
import twitter from "../../assets/images/svges/twitter.svg";
import youtube from "../../assets/images/svges/youtube.svg";
import Container from "../Container";
import Row from "../Row";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} />
      <p className={styles.marginRightAuto}>
        Lorem Ipsum is simply dummy text ot the printing and typesetting
        industry. Lorem Insum has been the industry's.
      </p>
      <ul>
        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={instagram} />
        </li>
        <li>
          <img src={twitter} />
        </li>
        <li>
          <img src={youtube} />
        </li>
        <li>
          <img src={linkdin} />
        </li>
        <li>
          <img src={skype} />
        </li>
      </ul>
    </div>
  );
}

export default Footer;

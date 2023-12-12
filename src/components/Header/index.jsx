import styles from "./Header.module.css";
import Container from "../Container";
import Row from "../Row";
import Logo from "../../assets/images/Logo/236EE4B1-B9F7-4E6C-8956-70DDC7B975F7_4_5005_c.jpeg";
import { Link } from "react-router-dom";
import svges from "../../assets/images/svges/search.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Row alignItemCenter>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <ul className={styles.marginRightAuto}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Features</Link>
            </li>
            <li className={styles.megaMenu}>
              <Link>Mega Menu</Link>
              <div className={styles.dropDownMegaMenu}>
              <ul>
                <li>kjsdkflsd</li>
                <li>sdflksdf</li>
                <li>sdflkj</li>
                <li>sdlkfjsd</li>
              </ul>
            </div>
            </li>
            <li>
              <Link>Documentation</Link>
            </li>
          </ul>
          <ul className={styles.leftSide}>
            <li>
              <Link>
                <img src={svges} />
              </Link>
            </li>
          </ul>
        </Row>
      </Container>
    </header>
  );
}

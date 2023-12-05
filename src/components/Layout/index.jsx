import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>

    </>
  );
}

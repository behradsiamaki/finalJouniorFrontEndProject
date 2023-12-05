import IntroText from "../../IntroText";
import IntroImageBoxes from "../../IntroImagerBoxes";
import Container from "../../../components/Container";
import Row from "../../Row";
import ServicesItem from "../../ServicesItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../components/Footer";

export default function Home() {
  const [services, setServices] = useState([]);
  const fetchData = async () => {
    axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(function (response) {
      // handle success
      setServices(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <IntroText />
      <IntroImageBoxes />
      <Container>
        <Row>
          {services.slice(0,10).map(function(item){
            console.log(item);
            return <ServicesItem data={item} key={item.id} />
          })}
        </Row>
      </Container>
    </>
  );
}

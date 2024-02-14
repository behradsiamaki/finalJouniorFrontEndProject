import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Item.module.css";
import Container from "../../Container";
import Row from "../../Row";
import ServicesItem from "../../ServicesItem";

export default function Item() {
  const { id } = useParams();
  const [servicesItem, setServicesItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendServices, setRecommendServices] = useState([]);
  const fetchData = async (id) => {
    setLoading(true);
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(function (response) {
        setServicesItem(response.data);
        setLoading(false);
      })
      .catch(function (error) {
      });
  };

  const fetchDataRecommend = async (id) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then(function (response) {
        setRecommendServices(response.data);
      })
      .catch(function (error) {
      });
  };

  useEffect(() => {
    fetchData(id);
    fetchDataRecommend()
  }, [id]);
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className={styles.servicesItemBanner}>
          <Container>
            <h3>Master the Fundamentals, Master Design{servicesItem.title}</h3>
            <img src={servicesItem.url} />
          </Container>
          <Container>
            <Row>
              {recommendServices.slice(0, 10).map(function (item) {
                return <ServicesItem data={item} key={item.id} />;
              })}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}

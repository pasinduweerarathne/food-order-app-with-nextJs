import axios from "axios";
import Featured from "../components/Featured";
import Layout from "../components/Layout";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <Featured />
        <PizzaList pizzaList={pizzaList} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};

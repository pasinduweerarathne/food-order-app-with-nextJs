import axios from "axios";
import Featured from "../components/Featured";
import Layout from "../components/Layout";
import PizzaList from "../components/PizzaList";
import AddButton from "../components/AddButton";
import Add from "../components/Add";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <Layout title="Home">
      <div className={styles.container}>
        <Featured />
        {admin && <AddButton setClose={setClose} />}
        <PizzaList pizzaList={pizzaList} />
        {!close && <Add setClose={setClose} />}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};

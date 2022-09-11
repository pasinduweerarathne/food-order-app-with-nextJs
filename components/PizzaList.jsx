import styles from "../styles/PizzaList.module.css";
import PizzaCard from "../components/PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odio
        ducimus excepturi accusamus quo, eius omnis expedita asperiores nobis et
        maiores illum cupiditate beatae inventore tempore, reprehenderit sit id
        officiis error quae distinctio voluptas amet nihil atque? Voluptatibus
        voluptates iste impedit quis aliquam corrupti dicta facere, dolorum qui
        cupiditate aperiam.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;

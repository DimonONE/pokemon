import React from "react";
import styles from "./styles.module.scss";
import List from "./List";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <List />
    </div>
  );
};

export default Home;

import styles from "./style.module.css";

function Home() {
  return (
    <div className={styles.container}>
    <div>
      <h1 className={styles.h1}>Clique no quadrado vermelho, siga os passos e ganhe uma nova experiência em desenvolvimento web incrível!!! Dica pressione F12</h1>
    </div>
    <div className={styles.tricks}>

      <div onClick={() => alert("Parabéns. Você clicou! Você conseguiu")} className={styles.btn} />

    </div>
    </div>
  );
}

export default Home;

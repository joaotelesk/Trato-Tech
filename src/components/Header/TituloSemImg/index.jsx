import styles from "./TituloSemImg.module.scss";

export function TituloSemImg({ titulo, descricao, children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <h2 className={styles.descricao}>{descricao}</h2>
      {children}
    </div>
  );
}

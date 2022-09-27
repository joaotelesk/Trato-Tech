import styles from "./Header.module.scss";

interface IProps {
  titulo: string;
  descricao: string;
  className: string | undefined;
  imagem: string | undefined;
}
export default function Header({
  titulo,
  descricao,
  className,
  imagem,
}: IProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles["header-texto"]}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles["header-imagem"]}>
        <img src={imagem} alt={titulo} />
      </div>
    </header>
  );
}

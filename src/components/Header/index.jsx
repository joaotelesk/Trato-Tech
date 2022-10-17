import styles from "./Header.module.scss";
import { TituloComImg } from "./TituloComImg";
import { TituloSemImg } from "./TituloSemImg";

export default function Header({ titulo, descricao, className, imagem }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem ? (
        <TituloSemImg titulo={titulo} descricao={descricao} />
      ) : (
        <TituloComImg
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      )}
    </header>
  );
}

import styles from "./Header.module.scss";
import { TituloComImg } from "./TituloComImg";
import { TituloSemImg } from "./TituloSemImg";

export default function Header({
  children,
  titulo,
  descricao,
  className,
  imagem,
}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem ? (
        <TituloSemImg titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImg>
      ) : (
        <TituloComImg
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloComImg>
      )}
    </header>
  );
}

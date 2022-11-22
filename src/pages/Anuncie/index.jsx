import Button from "components/Button";
import Header from "components/Header";
import { useSelector } from "react-redux";
import styles from "./Anuncie.module.scss";

export default function Anuncie() {
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui"
        descricao="Anuncie seu produto no melhor saite do Brasil"
      />
      <form className={styles.formulario}>
        <input placeholder="Nome do produto" alt="nome do produto" />
        <input placeholder="Descrição do produto" alt="Descrição do produto" />
        <input
          placeholder="Url da imagem do produto"
          alt="Url da imagem do produto"
        />
        <select>
          <option value="" disabled>
            Selecione a categorias
          </option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input type="number" placeholder="Preço do produto" />
        <Button type="submite">Cadastrar produto</Button>
      </form>
    </div>
  );
}

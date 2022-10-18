import styles from "./Busca.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { mudarBusca, resetarBusca } from "store/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Busca() {
  const busca = useSelector((state) => state.busca);
  const dispath = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispath(resetarBusca());
  }, [location.pathname, dispath]);
  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você busca"
        value={busca}
        onChange={(evento) => dispath(mudarBusca(evento.target.value))}
      ></input>
    </div>
  );
}

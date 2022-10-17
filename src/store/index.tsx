import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias.jsx";
import itensSlice from "./reducers/itens.jsx";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
  },
});

export default store;

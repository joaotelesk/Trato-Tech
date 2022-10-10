import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reduces/categorias";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
  },
});

export default store;

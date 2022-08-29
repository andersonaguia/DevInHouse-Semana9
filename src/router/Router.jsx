import { Routes, Route } from "react-router-dom";
import { Produtos } from "../pages/produtos/Produtos";
import { ProdutosSelecionados } from "../pages/produtosSelecionados/ProdutosSelecionados";

export const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="/selecionados" element={<ProdutosSelecionados />} />
    </Routes>
  )    
};
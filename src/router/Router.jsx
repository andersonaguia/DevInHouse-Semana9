import { Routes, Route } from "react-router-dom";
import { Produtos } from "../pages/produtos/Produtos";

export const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<Produtos />} />
    </Routes>
  )    
};
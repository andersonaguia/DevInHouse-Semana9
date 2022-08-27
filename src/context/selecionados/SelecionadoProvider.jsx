import { SelecionadoContext } from "./SelecionadoContext";
import { useState } from "react";
import PropTypes from 'prop-types'

export const SelecionadoProvider = ({ children }) => {
  const [selecionados, setSelecionados] = useState([]);

  const handleSelecionar = (produto) => {
    if (selecionados.some((item) => item === produto.id)) {
      setSelecionados(selecionados.filter((item) => item !== produto.id));
      return;
    }
    setSelecionados([...selecionados, produto.id]);
  };

  const isSelecionado = (id) => {
    return selecionados.some((item) => item === id);
  };
  return (
    <>
      <SelecionadoContext.Provider
        value={{ selecionados, handleSelecionar, isSelecionado }}
      >
        {children}
      </SelecionadoContext.Provider>
    </>
  );
};

SelecionadoProvider.propTypes = {
    children: PropTypes.node,
}
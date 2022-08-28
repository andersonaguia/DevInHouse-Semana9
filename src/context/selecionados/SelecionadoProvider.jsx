import { SelecionadoContext } from "./SelecionadoContext";
import { useState } from "react";
import PropTypes from 'prop-types'

export const SelecionadoProvider = ({ children }) => {
  const [selecionados, setSelecionados] = useState([]);

  const handleSelecionar = (id) => {    
    if (selecionados.some((item) => item === id)) {
      setSelecionados(selecionados.filter((item) => item !== id));
      return;
    }
    setSelecionados([...selecionados, id]);
  };

  const isSelecionado = (id) => {
    return selecionados.some((item) => item === id);
  };
  return (
    <>
      <SelecionadoContext.Provider
        value={{ selecionar: handleSelecionar, onSelecionado: isSelecionado }}
      >
        {children}
      </SelecionadoContext.Provider>
    </>
  );
};

SelecionadoProvider.propTypes = {
    children: PropTypes.node,
}
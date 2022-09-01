import { useSelecionado } from "../../context/selecionados/useSelecionado"
import { ListaCards } from "@components";
import { produtos } from '@services';

export const ProdutosSelecionados = () => {
    const { selecionados } = useSelecionado();

    const listaSelecionados = () => {
        return(
            selecionados.map((id) => produtos.find((produto) => produto.id === id))
        )        
    }   

    const total = () => {
        return(
            listaSelecionados().reduce((soma, item) => soma + item.valor, 0)
        )
    }

    return(
        <>
            <h1>Produtos Selecionados</h1>
            <p>Total: R$ {total().toFixed(2).replace(".", ",")}</p>
            <ListaCards produtos={listaSelecionados()}/>
        </>       
    )
}
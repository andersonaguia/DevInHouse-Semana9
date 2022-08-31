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
    
    return(
        <>
            <h1>Produtos Selecionados</h1>
            <ListaCards produtos={listaSelecionados()}/>
        </>       
    )
}
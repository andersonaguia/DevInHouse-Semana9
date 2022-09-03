import { useSelecionado } from "../../context/selecionados/useSelecionado"
import { ListaCards } from "@components";
import { produtos } from '@services';
import styles from './ProdutosSelecionados.module.css'

export const ProdutosSelecionados = () => {
    const { selecionados, excluir } = useSelecionado();

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
        {selecionados.length ? (
            <>            
                <h1 className={styles.h1}>Produtos Selecionados</h1>
                <div className={styles.div}>
                    <p>Total: R$ {total().toFixed(2).replace(".", ",")}</p>
                    <button className={styles.button} onClick={() => excluir()}>Limpar Itens</button>
                </div> 
                <ListaCards produtos={listaSelecionados()}/>
            </>
        ) : (<h1 className={styles.h1}>Nenhum item selecionado!</h1>)}
        </> 
                 
                    
             
    )
}
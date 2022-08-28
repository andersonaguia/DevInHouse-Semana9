Vamos utilizar os valores do contexto para modificar item selecionado e verificar se está selecionado

No componente de card:
Remova as props selecionado e onSelecionar
Adicione o hook criado e obtenha dele as funções de onSelecionar e validar card selecionado
Altere o jsx para respeitar os valores do contexto e não mais os que eram recebidos por parâmetro.
Dica: lembre que agora a propriedade de selecionado não vem mais um booleano e sim uma função que precisa ser chamada, então pode criar uma variável dentro do projeto e nela chamar a função. Ex: const selecionado = validaCardSelecionado(id)
No componente ListaCards remova o state e a função de handle além de remover as props selecionado e onSelecionar passadas para o card
Validar e garantir que tudo continua funcionando como antes.
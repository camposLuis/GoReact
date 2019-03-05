# Primeiras dependencias para iniciar um projeto

    - yarn add react react-dom

# Instalação de dependências para desenvolvimento

    - yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli

# Automatização do run

    - yarn add -D webpack-dev-server

# Biblioteca para fazer uma tipagem no código

    - Possibilita determinar qual o tipo das propriedades (Components) e se elas são ou não obrigatórias
    	- yarn add prop-types

# Biblioteca que permite definir as DefaultProps e as ProtTypes dentro da própria classe do componente

    - yarn add -D @babel/plugin-proposal-class-properties

# Anotações importantes

- componentDidMount() {}
  . Método que executa automaticamente na inicilização do componente

- componentWillMount(nextProps, nextState) {}
  . Componente oposto ao componentDidMount
  . Utilizado para realizar algo quando o componente deixa de existir
  . Perfeito para limpar todo evento listener criado dentro do componentDidMount

- shouldComponentUpdate() {}
  . Ideal para vetar alguma atualização caso seja necessário

- componentDidUpdate(prevProps, prevState) {}
  . Componente executado depois de sofrer a atualização

# Instalação de bibliotecas que permitem ler um arquivo css a partir de um arquivo js

    - yarn add -D style-loader css-loader

# Instalação de um pré processador de estilos

    - yarn add -D sass-loader node-sass

# Utilizando padrões de guias de estilo com ESlint

- yarn add -D eslint
- npx eslint --init
- yarn add -D babel-eslint

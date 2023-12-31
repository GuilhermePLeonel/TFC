# TFC - Site Informativo de Partidas e Classificações de Futebol ⚽️

O TFC é um projeto que consiste em um site informativo sobre partidas e classificações de futebol, desenvolvido com o objetivo de fornecer informações relevantes aos fãs do esporte. A aplicação conta com uma API e um back-end dockerizado utilizando modelagem de dados através do Sequelize. O desenvolvimento do projeto foi conduzido utilizando a metodologia TDD (Test-Driven Development), garantindo maior qualidade e confiabilidade ao código.

## Funcionalidades

- Exibição de informações sobre partidas de futebol, incluindo placares, times envolvidos e datas.
- Apresentação das classificações dos times em um formato claro e de fácil compreensão.
- Integração com um banco de dados para armazenamento das informações.

## Tecnologias Utilizadas

- Node.js para o desenvolvimento da API.
- Docker e docker-compose para a criação de ambientes isolados e facilitar a integração das aplicações.
- Sequelize para a modelagem de dados e gerenciamento do banco de dados.
- TDD para o desenvolvimento orientado a testes, garantindo a robustez das funcionalidades implementadas.
-  A construção de um CRUD com TypeScript, utilizando ORM.
- A criação e associação de tabelas usando models do sequelize;

## Fluxo de Funcionamento

1. O front-end consome a API para exibir informações sobre partidas e classificações de futebol.
2. O back-end dockerizado, por meio do Sequelize, gerencia o banco de dados contendo os dados relevantes sobre as partidas e times.
3. Para adicionar uma partida, é necessário autenticação através de um token, garantindo a segurança das alterações.
4. A relação entre as tabelas "teams" e "matches" é utilizada para atualizar as informações sobre as partidas.
5. O back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end, tornando a experiência do usuário mais completa e informativa.

## Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. Clone este repositório em sua máquina.
2. Certifique-se de ter o Docker e o docker-compose instalados.
3. Navegue até o diretório do projeto e execute o comando `docker-compose up` para iniciar o ambiente.
4. Acesse a API e o front-end pelo navegador ou por meio de ferramentas como o Postman.

## Conclusão

O TFC é um projeto desenvolvido com dedicação e respeito às regras de negócio estabelecidas. Com uma API robusta e um back-end dockerizado, o sistema é capaz de fornecer informações relevantes sobre partidas e classificações de futebol aos seus usuários. Através do método TDD, buscamos garantir a qualidade e a confiabilidade do projeto, proporcionando uma experiência agradável aos apaixonados por futebol que utilizarem a aplicação.

Esperamos que o TFC seja útil e traga aos fãs do esporte a comodidade de acessar informações atualizadas sobre o mundo do futebol. Sua contribuição e feedback são sempre bem-vindos para continuarmos aprimorando o projeto e fornecendo uma plataforma cada vez melhor.

Divirta-se explorando o TFC e mantenha-se informado sobre as partidas e classificações do mundo do futebol! ⚽️

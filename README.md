# Backend
## Instalar todas as dependências
#### npm init
#### npm install -g yarn
#### yarn add cors
#### yarn add cookie-parser
#### yarn add express
#### yarn add sequelize
#### yarn add sequelize-cli -d
#### yarn add mysql2
#### yarn add nodemon

## Configurar o servidor MySQL
Iniciar um servidor MySQL, criar uma instância local através do MySQL Workbench e editar as variáveis do ambiente de teste nas configs do banco de dados com base nas informações e configurações da instância local criada - 'src/config/database.js'
#### Mudar o host, se necessário
#### Mudar o username, se necessário
#### Mudar a senha
#### Mudar a porta, se necessário. Levando em consideração a porta da instância local do banco de dados

## Criar o banco de dados local
#### yarn sequelize db:create

## Rodar a migration para criar a tabela de produtos no banco de dados
#### yarn sequelize db:migrate

## Iniciar o Servidor Localhost para que o Backend possa ser utilizado
#### npm run dev

# Frontend
## Instalar todas as dependências
#### yarn add @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion

## Iniciar o Servidor Next Frontend
#### npm run dev (ou npm start caso o app ja tenha sido buildado)

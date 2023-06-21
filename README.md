# instalar todas as dependências
## npm init
## npm install -g yarn
## yarn add cors
## yarn add cookie-parser
## yarn add express
## yarn add sequelize
## yarn add sequelize-cli -d
## yarn add mysql2
## yarn add nodemon

# editar as variáveis do ambiente de teste nas configs do banco de dados - 'src/config/database.js'
## mudar o host, se necessário
## mudar o username, se necessário
## mudar a senha
## mudar a porta, se necessário. Levando em consideração a porta da instância local do banco de dados

# criar o banco de dados local
## yarn sequelize db:create

# rodar a migration para criar a tabela de produtos no banco de dados
## yarn sequelize db:migrate
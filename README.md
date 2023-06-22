# Introdução
Este arquivc Readme.md apresenta a prova teórica e o teste prático. Todo o conteúdo está dividido em tópicos, desde as respostas da prova, até as instruções de configuração do ambiente de testes. Você pode navegar até o tópico desejado clicando nas opções na lista abaixo.

#### ⮕ [Acesse as instruções para configurar o Backend aqui](#backend).
#### ⮕ [Acesse as instruções para configurar o Banco de Dados aqui](#banco-de-dados).
#### ⮕ [Acesse as instruções para configurar o Frontend aqui](#frontend).
#### ⮕ [Acesse o vídeo do projeto em pleno funcionamento aqui](#projeto-completo-em-pleno-funcionamento)
#### ⮕ [Acesse a prova teórica por aqui](#prova-teórica).

## Backend
Primeiramente, instale todas as dependências necessárias. Todas as instalações do Backend são feitas na pasta principal *'R_Teste_Task'*.
```
npm install
yarn
```
Agora faça as configurações necessárias no Banco de Dados.

## Banco de Dados
Assim como no Backend, todas as instalações ou comandos do Banco de Dados são feitas na pasta principal - 'R_Teste_Task'.

### Configure o servidor MySQL
Inicie um servidor MySQL, crie uma instância local através do MySQL Workbench e edite as variáveis do ambiente de teste nas configs do banco de dados com base nas informações e configurações da instância local criada - *'src/config/database.js'*.
* Mudar o host, se necessário.
* Mudar o username, se necessário
* Mudar a password, se necessário.
* Mudar a port, se necessário.
  
Leve em consideração todos os dados da sua instância local do MySQL Workbench.

### Crie o banco de dados local
```
yarn sequelize db:create
```

### Rode a migration para criar a tabela de produtos no banco de dados
```
yarn sequelize db:migrate
```

### Inicie o servidor local para que o Backend e o Banco de Dados possam sem utilizados de forma integrada
```
npm run dev
```

## Frontend
Primeiramente, instale todas as dependências necessárias. Lembre-se que, diferentemente do Backend e do Banco de Dados, as instalações e comandos do Frontend são feitas dentro da subpasta frontend - *'R_Teste_Task/frontend'*
```
npm install
yarn
```
Após todas as instalações, inicie o servidor Frontend
```
npm run dev
```
Caso o app next.js tenha sido buildado, inicie o servidor com `npm start`.

## Projeto Completo em pleno funcionamento
https://github.com/Rendryki/R_Teste_Task/assets/104596352/020994e2-a9c2-426c-95c9-3aa3cfb28ffe

## Prova Teórica

#### 1. O que é responsividade?
Responsividade é a capacidade do layout, estilo ou configurações de uma página ou aplicação alterarem de acordo com as necessidades. A visualização de uma página web em um Smartphone é diferente da visualização em um Desktop. A responsividade tem o papel de lidar com essas diferentes necessidades e adequar a página em cada um de forma diferente.

#### 2. Explique o que é o padrão MVC conceituando Model, View e Controller.
MVC é uma arquitetura usada para implementar o processo de desenvolvimento de um software, sendo divididos em três partes que permitem a separação entre o Frontend e o Backend. O Model é responsável por definir a estrutura dos dados, processando tudo o que for necessário para o funcionamento da aplicação. Já o Controller lida com as informações de entrada, mapeando todas as ações e possíveis dados. O View, por sua vez, está ligado a Interface do Usuário e as informações que serão apresentadas na tela, representando o Frontend. 
 
#### 3. Escreva a definição de Programação Orientada a Objeto (POO)
Programação Orientada a Objetos é um modelo de programação onde os objetos são representados por classes. Essas classes possuem métodos, que determinam o funcionamento e as ações da classe, e atributos, que deteminam seus estados e dados.

#### 4. Em Javascript, escreva uma função que receba como parâmetro um número inteiro. Caso este número seja par, a função deve retornar a string “par”, caso contrário “ímpar”.
```javascript
function parOuImpar(numero){
   if(numero % 2 == 0){
      return 'par'
   }else{
      return 'impar'
   }
}
```

#### 5. (OPCIONAL) Em MySQL, escreva uma query referente à seleção de todos os atributos de todos os registros da tabela ‘produtos’ ordenados por ‘id’ de forma decrescente.
```MySQL
SELECT * FROM Produtos ORDER BY id DESC
```

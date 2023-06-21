module.exports = { // configurações personalizadas do ambiente de desenvolvimento e de teste
    dialect: 'mysql',
    host: 'localhost', // mudar host
    username: 'root', // mudar username
    password: '1308', // mudar senha
    port: '3306', // mudar a porta
    database: 'Produto',
    define: {
        timestaps: true,
        underscored: true
    }
}
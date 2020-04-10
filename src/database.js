const mysql = require('promise-mysql');

const connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Passw0rd!!',
    database: 'electrondb',
});

function getConections() {
    return connections;
}

module.exports = { getConections }
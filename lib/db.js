const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'zack',
    database: 'employee_tracker',
    password: 'zack'
});

module.exports = db;
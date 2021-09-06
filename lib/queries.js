const db = require('./db')
const Questions = require('./questions')


class Queries {
    constructor() {
    };

    viewEmployees() {
        db.query(
            'SELECT * FROM employee;',
            function (err, results, fields) {
                console.table(results);
            }
        )
    }
    viewDepartments() {
        db.query(
            'SELECT * FROM department;',
            function (err, results, fields) {
                console.table(results);
            }
        )
    }
    viewRoles() {
        db.query(
            'SELECT * FROM role;',
            function (err, results, fields) {
                console.table(results);
            }
        )
    }
};


module.exports = Queries;
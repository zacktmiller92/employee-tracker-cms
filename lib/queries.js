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
    };
};


module.exports = Queries;
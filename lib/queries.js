const db = require('./db')


class Queries {
    constructor() {
    };

    getEmployees() {
        db.query(
            'SELECT * FROM employee;',
            function (err, results, fields) {
                console.table(results);
            }
        )
    };
};

module.exports = Queries;
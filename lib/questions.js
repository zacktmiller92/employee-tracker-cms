const inquirer = require('inquirer');
const db = require('./db')
// const Queries = require('./queries');

// const Query = new Queries;

class Questions {
    constructor() {
    };

    selectQuery() {
        inquirer.
            prompt([
                {
                    type: 'list',
                    name: 'whatToDo',
                    message: 'What would you like to do?',
                    choices: ['View all employees', 'View all departments', 'View all roles']
                }
            ])
            .then(data => {
                if (data.whatToDo === 'View all employees') {
                    return this.viewEmployees();
                }
                else if (data.whatToDo === 'View all departments') {
                    return this.viewDepartments();
                }
                else if (data.whatToDo === 'View all roles') {
                    return this.viewRoles();
                }
            });
    }

    viewEmployees() {
        const sql = 'SELECT * FROM employee;'
        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table(rows);
            })
            .then(() => {
                this.selectQuery();
            })

    }
    viewDepartments() {
        const sql = 'SELECT * FROM department;'
        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table(rows);
            })
            .then(() => {
                this.selectQuery();
            })
    }
    viewRoles() {
        const sql = 'SELECT * FROM role;'
        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table(rows);
            })
            .then(() => {
                this.selectQuery();
            })
    }
};

module.exports = Questions;
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
                    choices: [
                        'View all employees',
                        'View all employees by Manager',
                        'View all employees by Department',
                        'View all departments',
                        'View all roles'
                    ]
                }
            ])
            .then(data => {
                if (data.whatToDo === 'View all employees') {
                    return this.viewEmployees();
                }
                else if (data.whatToDo === 'View all employees by Department') {
                    return this.viewEmployeesByDepartment();
                }
                else if (data.whatToDo === 'View all employees by Manager') {
                    return this.viewEmployeesByManager();
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
        const sql = `
        SELECT 
        employee.id AS employee_id,
        employee.first_name AS employee_first,
        employee.last_name AS employee_last,
        department.name AS department_name,
        role.title AS role_title,
        role.salary AS role_salary,
        CONCAT(manager.first_name, " ", manager.last_name) AS manager_name
        FROM employee
        JOIN employee AS manager
        LEFT JOIN role 
        ON employee.role_id = role.id
        LEFT JOIN department
        ON department.id = role.department_id
        WHERE employee.manager_id = manager.id
        ORDER BY employee_first, department_name, role_title ASC;
        `
        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table(rows);
            })
            .then(() => {
                this.selectQuery();
            })

    }

    viewEmployeesByDepartment() {
        const sql = `
        SELECT
        department.name AS department_name,
        employee.id AS employee_id,
        employee.first_name AS employee_first,
        employee.last_name AS employee_last,
        role.title AS role_title,
        role.salary AS role_salary,
        CONCAT(manager.first_name, " ", manager.last_name) AS manager_name
        FROM employee
        JOIN employee AS manager
        LEFT JOIN role 
        ON employee.role_id = role.id
        LEFT JOIN department
        ON department.id = role.department_id
        WHERE employee.manager_id = manager.id
        ORDER BY department_name, employee_first, role_title ASC;
        `
        db.promise().query(sql)
            .then(([rows, fields]) => {
                console.table(rows);
            })
            .then(() => {
                this.selectQuery();
            })

    }
    viewEmployeesByManager() {
        const sql = `
        SELECT
        CONCAT(manager.first_name, " ", manager.last_name) AS manager_name,
        department.name AS department_name,
        employee.id AS employee_id,
        employee.first_name AS employee_first,
        employee.last_name AS employee_last,
        role.title AS employee_title,
        role.salary AS employee_salary
        FROM employee
        JOIN employee AS manager
        LEFT JOIN role 
        ON employee.role_id = role.id
        LEFT JOIN department
        ON department.id = role.department_id
        WHERE employee.manager_id = manager.id
        ORDER BY manager_name, department_name, employee_first ASC;
        `
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
        const sql = `
        SELECT
        role.id AS role_id,
        role.title AS role_title,
        role.salary,
        department.name AS department
        FROM role
        JOIN department
        ON role.department_id = department.id
        ORDER BY role_title ASC;
        `
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
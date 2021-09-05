const inquirer = require('inquirer');
const Queries = require('./queries');

const Query = new Queries;

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
                    choices: ['View all employees']
                }
            ])
            .then(data => {
                if (data.whatToDo = 'View all employees') {
                    this.viewEmployees();
                }
            })
    };

    viewEmployees() {
        const myPromise = new Promise(() => {Query.viewEmployees()});
        myPromise
            .then(setTimeout(this.selectQuery,1000));
        
    };
};

module.exports = Questions;
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

const employeeMap = {

    "Manager": {
        class: Manager,
        specialAttribute: "office_number"
    },
    "Engineer":{
        class: Engineer,
        specialAttribute: 'github'
    },
    "Intern": {
        class: Intern,
        specialAttribute: 'school'
    },
}


const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What type of team member would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the team member\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team member\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team member\'s email?',
        },
        {
            type: 'input',
            name: 'office_number',
            message: 'What is the manager\'s office number?',
            when: (answers) => answers.role === 'Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github username?',
            when: (answers) => answers.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
            when: (answers) => answers.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'another',
            message: 'Would you like to add another team member?',
        },
    ])
    .then((answers) => {

        
        const employee = new employeeMap[answers.role].class(
            answers.name,
            answers.id,
            answers.email,
            answers[employeeMap[answers.role].specialAttribute]
        );

        employees.push(employee);

        if (answers.another) {
            return promptUser();
        } else {
            // const html= generateHTML(employees);
            const html = JSON.stringify(employees);
            fs.writeFileSync(__dirname + '/dist/team.html', html, 'utf-8');
            process.exit(0);
        }

        

    }) 
}

function generateHTML() {

};

promptUser()

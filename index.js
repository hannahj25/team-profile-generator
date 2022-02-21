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
            fs.writeFileSync(__dirname + '/dist/team.html', generateHTML, 'utf-8');
            process.exit(0);
        }

        

    }) 
}

const generateHTML = (employees) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <h1>My Team</h1>
  </div>
  <div>
  ${employees}
  </div>
</body>
</html>`;

// function createCards() {
//     for (i = 1; i < employees.length; i++) {
//         const card = 
//         `<div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">${employees[0].name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">Role</h6>
//              <p class="card-text">ID: ${employees[0].id}</p>
//              <p class="card-text">Email: ${employees[0].email}</p>
//           </div>
//        </div>`
//     }
// }

const init = () => {
    promptUser();
    
};

init();


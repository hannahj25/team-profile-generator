// Set consts to require dependencies and imports
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Set empty array to store employees
const employees = [];

// Assigns class to each employee type
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

// Asks user for information
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

        // creates new employee with user answers
        const employee = new employeeMap[answers.role].class(
            answers.name,
            answers.id,
            answers.email,
            answers[employeeMap[answers.role].specialAttribute]
        );
        
        // pushes new employee into employees array
        employees.push(employee);
       
        // if user wishes to add another employee; returns to start of questions. else exits and generates HTML
        if (answers.another) {
            return promptUser();
        } else {
            console.log(employees)
            fs.writeFileSync(__dirname + '/dist/team.html', generateHTML(), 'utf-8');
            process.exit(0);
        }

        

    }) 
}


// Function to create cards, filled in based on user's answers
function createCards() {
    console.log(employees);
    var card = ""
    var cards = ""
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].getRole() === 'Manager') {
            card = 
            `<div class="col">
            <div class="card" style="width: 18rem; box-shadow: 3px 3px 3px grey">
              <div class="card-body">
                <h5 class="card-title" style="background-color:#8BBEB2; padding:20px; text-align: center; border-radius: 10px; font-weight:bold; font-size:30px;">${employees[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted" style="font-weight:bold; font-size:24px">${employees[i].getRole()}</h6>
                 <p class="card-text">ID: ${employees[i].id}</p>
                 <p class="card-text">Email: <a class="card-text" href="mailto:${employees[i].email}">${employees[i].email}</a></p>
                 <p class="card-text">Office Number: ${employees[i].getOfficeNumber()}</p>
              </div>
           </div>
           </div>` }
           else if (employees[i].getRole() === 'Engineer') {
            card = 
            `<div class="col">
            <div class="card" style="width: 18rem; box-shadow: 3px 3px 3px grey">
              <div class="card-body">
                <h5 class="card-title" style="background-color:#8BBEB2; padding:20px; text-align: center; border-radius: 10px; font-weight:bold; font-size:30px;">${employees[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted" style="font-weight:bold; font-size:24px">${employees[i].getRole()}</h6>
                 <p class="card-text">ID: ${employees[i].id}</p>
                 <p class="card-text">Email: <a class="card-text" href="mailto:${employees[i].email}">${employees[i].email}</a></p>
                 <p class="card-text">Github: <a class="card-text" href="https://github.com/${employees[i].getGithub()}">${employees[i].getGithub()}</a></p>
              </div>
           </div>
           </div>`
           }
           else if (employees[i].getRole() === 'Intern') {
            card = 
            `<div class = "col">
            <div class="card" style="width: 18rem; box-shadow: 3px 3px 3px grey;">
              <div class="card-body">
                <h5 class="card-title" style="background-color:#8BBEB2; padding:20px; text-align: center; border-radius: 10px; font-weight:bold; font-size:30px;">${employees[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted" style="font-weight:bold; font-size:24px">${employees[i].getRole()}</h6>
                 <p class="card-text">ID: ${employees[i].id}</p>
                 <p class="card-text">Email: <a class="card-text" href="mailto:${employees[i].email}">${employees[i].email}</a></p>
                 <p class="card-text">School: ${employees[i].getSchool()}</p>
              </div>
           </div>
           </div>`
           }
           cards += card;
        }
        return cards;
    }   

//Generates HTML, calling the createCards function to populate card-group div with employee cards
const generateHTML  = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid" style="background-color: #18314F">
    <h1 class="display-4" style="text-align:center; color:white;">My Team</h1>
  </div>
  <div class="card-group">
  ${createCards()}
  </div>
</body>
</html>`;


// Runs program
const init = () => {
    promptUser();
    
};

init();


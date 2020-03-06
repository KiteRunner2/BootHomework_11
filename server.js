const inquirer = require('inquirer');
const mysql = require('mysql');
const {db,queries,questionsGeneral} = require('./db');
const {questionsAddDepartment} = require('./db');
const {questionsAddRole} = require('./db');
const {questionsAddEmployee} = require('./db');
const {questionsUpdateEmployee} = require('./db');
const cTable = require('console.table');


const connection = mysql.createConnection(db);

function sendQuery(query){
    connection.query(query,function(error,results,fields){
        console.log('---------------------------------');
        console.log('\n\n\n\n');            
        fields ? console.table(results):false;
        console.log('\n\n\n\n\n\n\n\n');
    })
}

async function promptQuestion(){
    
    while (true) {
        const answers = await inquirer.prompt(questionsGeneral);
        if (answers.list ==  "View departments"){
                sendQuery(queries.allDepartments);
                continue;
                };
        if (answers.list == "View employees"){
                sendQuery(queries.allEmployee);
                continue;
        }
        if (answers.list == "View roles"){
                sendQuery(queries.allRoles);
                continue;
        }
        if (answers.list == "Add department"){
            const answers = await inquirer.prompt(questionsAddDepartment);
            let query = `insert into department (name) values ('${answers.name}')`;
            sendQuery(query);
            // console.log(answers);
            continue;
            //to add query
        }
        if (answers.list == "Add role"){
            const answers = await inquirer.prompt(questionsAddRole);
            console.log(answers);
            let query = `insert into role (title,salary,department_id) values ('${answers.name}',${answers.salary},${answers.department_id})`
            sendQuery(query);
            continue;
            //to add query
        }
        if (answers.list == "Add employee"){
            const answers = await inquirer.prompt(questionsAddEmployee);
            let query = `insert into employee (first_name,last_name,role_id,manager_id) values ('${answers.firstName}','${answers.lastName}',${answers.role_id},${answers.manager_id})`;
            sendQuery(query)
            // console.log(answers);
            continue;
            //to add query
        }
        if (answers.list == 'Update employee role'){

        }
        if (answers.list == 'EXIT'){
                process.exit(0);
            }    
            
    }
}


promptQuestion();

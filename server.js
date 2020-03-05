const inquirer = require('inquirer');
const mysql = require('mysql');
const {db,queries,questionsGeneral} = require('./db');
const {questionsAddDepartment} = require('./db');
const {questionsAddRole} = require('./db');
const {questionsAddEmployee} = require('./db');
// const cTable = require('console.table');


const connection = mysql.createConnection(db);


// console.log(queries.allEmployee);
// console.log(db,queries);

function sendQuery(query){
    connection.query(query,function(error,results,fields){
        console.log('---------------------------------');
                    console.log('\n');
                    console.table(results);

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
            continue;
            //to add query
        }
        if (answers.list == "Add employee"){
            const answers = await inquirer.prompt(questionsAddEmployee);
            console.log(answers);
            continue;
            //to add query
        }
        if (answers.list == 'Exit'){
                process.exit(0);
            }    
            
    }
}


promptQuestion();

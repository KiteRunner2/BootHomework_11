const inquirer = require('inquirer');
const mysql = require('mysql');
const {db,queries,inqQuestions} = require('./db');
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
        const answers = await inquirer.prompt(inqQuestions);
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
        if (answers.list == 'Exit'){
                process.exit(0);
            }    
            
    }
}


promptQuestion();

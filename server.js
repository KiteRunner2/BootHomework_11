const inquirer = require('inquirer');
const mysql = require('mysql');
const {db,queries,inqQuestions} = require('./db');
const cTable = require('console.table');


let connection = mysql.createConnection(db);


// console.log(queries.allEmployee);
// console.log(db,queries);


async function promptQuestion(){

    while (true) {
        let answers = await inquirer.prompt(inqQuestions);
        if (answers.list ==  "View departments"){
            await connection.query(queries.allDepartments,function(error,results,fields){
                    console.table(results);
                    console.log('\n');
                    // console.log(results);
                });
            continue;
        }    
        if (answers.list == 'Exit'){
            break;
        }
    }
}


promptQuestion();

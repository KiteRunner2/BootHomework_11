const inquirer = require('inquirer');
const mysql = require('mysql');
const {db,queries,inqQuestions} = require('./db');


let connection = mysql.createConnection(db);


// console.log(queries.allEmployee);
// console.log(db,queries);


async function promptQuestion(){
    let answers = await inquirer.prompt(inqQuestions);
    switch (answers.list){
        case "View departments":
            connection.query(queries.allDepartments,function(error,results,fields){
                console.table(results);
                // console.log(results);
            });
            promptQuestion();
            break;
        case "View roles":
            connection.query(queries.allRoles,function(error,results,fields){
                console.table(results);
                // console.log(results);
            });
            promptQuestion();
            break;

    }
}


// // connection.query(q4,function(error,results,fields){
// //     // console.log(results);
// //     console.table(results);
// // })

promptQuestion();



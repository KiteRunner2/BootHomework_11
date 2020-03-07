const inquirer = require('inquirer');
const mysql = require('mysql');
const {db,queries,questionsGeneral} = require('./db');
const {questionsAddDepartment} = require('./db');
const {questionsAddRole} = require('./db');
const {questionsAddEmployee} = require('./db');
const cTable = require('console.table');


const connection = mysql.createConnection(db);

async function sendQuery(query){
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
                await sendQuery(queries.allDepartments);
                continue;
                };
        if (answers.list == "View employees"){
                await sendQuery(queries.allEmployee);
                continue;
        }
        if (answers.list == "View roles"){
                await sendQuery(queries.allRoles);
                continue;
        }
        if (answers.list == "Add department"){
                const answers = await inquirer.prompt(questionsAddDepartment);
                let query = `insert into department (name) values ('${answers.name}')`;
                await sendQuery(query);
                continue;
        }
        if (answers.list == "Add role"){
                const answers = await inquirer.prompt(questionsAddRole);
                console.log(answers);
                let query = `insert into role (title,salary,department_id) values ('${answers.name}',${answers.salary},${answers.department_id})`
                await sendQuery(query);
                continue;
        }
        if (answers.list == "Add employee"){
                const answers = await inquirer.prompt(questionsAddEmployee);
                let query = `insert into employee (first_name,last_name,role_id,manager_id) values ('${answers.firstName}','${answers.lastName}',${answers.role_id},${answers.manager_id})`;
                await sendQuery(query)
                continue;
        }
        if (answers.list == 'Update employee role'){
                let query = 'select id from employee';
                connection.query(query,function(error,results,fields){
                    let r1 = results.map(currentvalue=>currentvalue.id);
                    let q2 = 'select id from role';
                    connection.query(q2,function(error,results,fields){
                        let r2 = results.map(currentvalue=>currentvalue.id)
                        inquirer.prompt(
                            [
                                {
                                    type:"list",
                                    name:"employee_id",
                                    choices:r1,
                                    message:"select employee id to update:"
                                },
                                {
                                    type:"list",
                                    name:"new_role_id",
                                    choices:r2,
                                    message:"select new role:"
                                }
                            ]
                        ).then(answers => {
                            console.log('\n\n\n\n\n\n\n');
                            connection.query(`update employee set role_id = ${Number(answers.new_role_id)} where id = ${Number(answers.employee_id)}`,function(error,results,fields){
                                if (error) console.log(error);
                            })
                        }
                        )
                    })
                })
            // continue;
            }

        if (answers.list == 'EXIT'){
                process.exit(0);
            }    
            
    }
}



promptQuestion();

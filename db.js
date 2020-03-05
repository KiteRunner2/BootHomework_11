db = {
    host:'localhost',
    user:'root',
    password:'',
    database:'employee'
}

queries = {
    allEmployee     :   "select * from employee",
    allDepartments  :   "select * from department",
    allRoles        :   "select * from role"
}

questionsGeneral = [
    {
        type:"list",
        name:"list",
        choices:['View departments','View employees','View roles','Add department','Add role','Add employee','Exit'],
        message:"What do you want to do?"
    }
]

questionsAddDepartment = [
    {
        type:"input",
        name:"name",
        message:"What is department name?"
    }
]

questionsAddRole = [
    {
        type:"input",
        name:"name",
        message:"What is new role name?"
    }
]
questionsAddEmployee = [
    {
        type:"input",
        name:"name",
        message:"Name?"
    }
]

// module.exports = {
//     db:"db",
//     queries:"queries",
//     questions:"inqQuestions"
// }

// q1 = "select a.first_name, c.title, b.first_name as manager_name from employee a left join employee b on a.manager_id = b.id left join role c on a.role_id = c.id";

module.exports = items = {
    db:db,
    queries:queries,
    questionsGeneral:questionsGeneral,
    questionsAddDepartment:questionsAddDepartment,
    questionsAddEmployee:questionsAddEmployee,
    questionsAddRole:questionsAddRole
}
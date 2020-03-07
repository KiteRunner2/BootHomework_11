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
        choices:['View departments','View employees','View roles','Add department','Add role','Add employee','Update employee role','EXIT'],
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
    },
    {
    type:"number",
    name:"salary",
    message:"What is salary?"
    },
    {
    type:"number",
    name:"department_id",
    message:"What is department id?"
    }
]
questionsAddEmployee = [
    {
        type:"input",
        name:"firstName",
        message:"First name:"
    },
    {
        type:"input",
        name:"lastName",
        message:"Last name:"
    },
    {
        type:"number",
        name:"role_id",
        message:"Role id:"
    },
    {
        type:"number",
        name:"manager_id",
        message:"Manager id:"
    }
]

questionsUpdateEmployee = [
    {
        type:"input",
        name:"firstName",
        message:"First name:"
    },
    {
        type:"input",
        name:"lastName",
        message:"Last name:"
    },
    {
        type:"number",
        name:"role_id",
        message:"Role id:"
    },
    {
        type:"number",
        name:"manager_id",
        message:"Manager id:"
    }
]

module.exports = items = {
    db:db,
    queries:queries,
    questionsGeneral:questionsGeneral,
    questionsAddDepartment:questionsAddDepartment,
    questionsAddEmployee:questionsAddEmployee,
    questionsAddRole:questionsAddRole
}
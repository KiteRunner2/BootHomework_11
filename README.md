# BootHomework_11


## creation of database and tables

```
create database employee;
use employee;
create table department
(id INT PRIMARY KEY,
name varchar(30));
create table role
(id INT primary KEY,
title VARCHAR(30),
salary FLOAT,
department_id INT);
CREATE TABLE employee
(id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT);

```


 

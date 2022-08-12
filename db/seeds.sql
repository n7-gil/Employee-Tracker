INSERT INTO department (department_name)
VALUES 
("Sales"),
("Customer Service"),
("Human Resources"),
("Manager");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales Representative", 30000, 1),
("Sales Supervisor", 50000, 1),
("Customer Service Rep", 28000, 2),
("Customer Service Supervisor", 40000, 2),
("Human Resources Rep", 40000, 3),
("Human Resources Trainee", 20000, 3),
("Human Resources Lead", 50000, 3),
("Manager", 80000, NULL);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
("Joe", "Bigshot", 8, NULL),
("Mike", "Leader", 2, 8),
("Jim", "Regular", 3, 8);


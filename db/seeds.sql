INSERT INTO department (name)
VALUES
("Administration"),
("Intern"),
("Staff");

INSERT INTO role (title, salary, department_id)
VALUES
("Feature Reporter", 70000, 8),
("Social Media Team", 70000, 7),
("Editorial Staff", 80000, 3),
("Copy Editor", 60000, 6),
("Field Reporter", 70000, 9),
("News Intern", 10000, 10),
("Human Resources Staff", 120000, 5),
("Human Resources Intern", 10000, 11),
("Editorial Administration", 250000, 15),
("Human Resources Administration", 250000, 16),
("Managing Editior", 800000, 20);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Paul", "Paulson", 1, 100),
("Debby", "Debbyson", 3, 101),
("Greg", "Gregerson", 3, 102),
("Jack", "Jackson", 1, 103),
("Angela", "Angelason", 1, 100),
("Richard", "Richardson", 1, 105),
("John", "Johnson", 2, 108),
("Moe", "Moeson", 2, 100),
("Molly", "Mollyson", 1, 0),
("Michael", "Michaelson", 1, 107),
("Edward", "Edwardson", 3, 102);







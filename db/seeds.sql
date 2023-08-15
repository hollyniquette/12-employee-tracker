
USE employee_track;
INSERT INTO departments (name)
VALUES
    ('Accounting'),
    ('Marketing'),
    ('Sales'),
    ('Information Technology'),
    ('Human Resources');


INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales Lead', '75000', 3),
  ('Sales Associate', '50000', 3),
  ('Lead Engineer', '160000', 4),
  ('Software Engineer', '70000', 4),
  ('Project Manager', '70000', 1),
  ('Accountant', '80000', 1),
  ('Payroll Specialist', '60000', 5),
  ('Marketing Strategist', '120000', 2),
  ('Graphic Designer', '60000', 2),
  ('HR Manager', '90000', 5);
    

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Lewis', 'Hamilton', 2, NULL),
  ('Alexander', 'Albon', 1, NULL),
  ('George', 'Russell', 4, 2),
  ('Carlos', 'Sainz', 2, 2),
  ('Danny', 'Ricciardo', 3, 3),
  ('Fernando', 'Alonso', 6, 3),
  ('Max', 'Verstappen', 8, 4),
  ('Charles', 'Leclerc', 7, 3),
  ('Yuki', 'Tsunoda', 5, 2),
  ('Lando', 'Norris', 4, 4),
  ('Sergio', 'Perez', 7, NULL),
  ('Valterri', 'Bottas', 4,2);
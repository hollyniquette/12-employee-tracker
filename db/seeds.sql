
USE employee_track;
INSERT INTO departments (name)
VALUES
    ('Development'),
    ('Engineering'),
    ('Strategic Operations'),
    ('Operations'),
    ('Aerodynamics');


INSERT INTO roles (title, salary, department_id)
VALUES
  ('Machinist', '75000', 5),
  ('Mechanic', '50000', 2),
  ('Lead Engineer', '160000', 2),
  ('Team Principle', '70000', 4),
  ('Performance Analyst', '70000', 1),
  ('Technical Director', '80000', 1),
  ('Simulations Operator', '60000', 5),
  ('Strategist', '120000', 3),
  ('Sporting Director', '60000', 3),
  ('Technician', '90000', 5);
    

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
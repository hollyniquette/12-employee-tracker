USE employee_track;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
  department_id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(department_id)
);

CREATE TABLE roles (
  role_id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  PRIMARY KEY(role_id),
  FOREIGN KEY(department_id) REFERENCES departments(department_id)
);

CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY(employee_id),
  FOREIGN KEY(role_id) REFERENCES roles(role_id),
  FOREIGN KEY(manager_id) REFERENCES employees(employee_id)
);
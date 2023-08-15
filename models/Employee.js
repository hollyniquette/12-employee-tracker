const db = require("../db/connection");

class Employee {
  constructor(employee_id, first_name, last_name, role_id, manager_id) {
    (this.employee_id = employee_id),
      (this.first_name = first_name),
      (this.last_name = last_name),
      (this.role_id = role_id),
      (this.manager_id = manager_id);
  }

  getAll() {
    const sql = "SELECT * FROM employees";
    return db.query(sql);
  }

  addEmployee() {
    const sql =
      "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
    const params = [
      this.first_name,
      this.last_name,
      this.role_id,
      this.manager_id,
    ];
    return db.query(sql, params);
  }

  getEmployeeById() {
    const sql = `SELECT * FROM employees WHERE id = '${this.employee_id}'`;
    return db.query(sql);
  }

  updateRole() {
    const sql = `UPDATE employee SET role_id = ? WHERE id = '${this.employee_id}'`;
    const params = [this.role_id];
    return db.query(sql, params);
  }
}
module.exports = Employee;

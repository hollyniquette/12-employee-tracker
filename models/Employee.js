const db = require("../db/connection");

class Employee {
  constructor(first_name, last_name, role_id, manager_id, employee_id) {
    (this.first_name = first_name),
      (this.last_name = last_name),
      (this.role_id = role_id),
      (this.manager_id = manager_id),
      (this.employee_id = employee_id);
  }

  async getAll() {
    const sql = "SELECT * FROM employees";
    const [rows] = await db.promise().query(sql);
    return rows;
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
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Employee added successfully!");
    });
  }

  updateRole() {
    const sql = `UPDATE employees SET role_id = ${this.role_id} WHERE employee_id = ${this.employee_id}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Employee role updated successfully!");
    });
  }
}

module.exports = Employee;

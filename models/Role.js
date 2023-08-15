const db = require("../db/connection");

class Role {
  constructor(role_id, title, salary, department_id) {
    this.role_id, this.title, this.salary, this.department_id;
  }

  getAll() {
    const sql = "SELECT * FROM roles";
    return db.query(sql);
  }

  addRole() {
    const sql = "INSERT INTO roles (title, salary) VALUES (?,?)";
    const params = [this.title, this.salary];
    return db.query(sql, params);
  }
}

module.exports = Role;
const db = require("../db/connection");

class Role {
  constructor(title, salary, department_id) {
    (this.title = title),
      (this.salary = salary),
      (this.department_id = department_id);
  }

  async getAll() {
    const sql = "SELECT * FROM roles";
    const [rows] = await db.promise().query(sql);
    return rows;
  }

  addRole() {
    const sql =
      "INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)";
    const params = [this.title, this.salary, this.department_id];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Role added successfully!");
    });
  }
}

module.exports = Role;

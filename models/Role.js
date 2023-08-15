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

const db = require("../db/connection");

class Department {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }

  getAll() {
    const sql = "SELECT * FROM departments";
    return db.query(sql);
  }

  addDepartment() {
    const sql = `INSERT INTO departments (name)
    VALUES ("${this.name}")`;
    return db.query(sql);
  }
}

module.exports = Department;

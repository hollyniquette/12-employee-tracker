const db = require("../db/connection");

class Department {
  constructor(name) {
    this.name = name;
  }

  async getAll() {
    const sql = "SELECT name, department_id FROM departments";
    const [rows] = await db.promise().query(sql);
    return rows;
  }

  addDepartment() {
    const sql = `INSERT INTO departments (name)
    VALUES ("${this.name}")`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Department added!");
    });
  }
}

module.exports = Department;
const db = require("../db/connection");

class Department {
  constructor(name) {
    this.name = name;
  }

  async getAll() {
    const sql = "SELECT name, department_id FROM departments";
    const [rows] = await db.promise().query(sql);
    return rows;
  }

  addDepartment() {
    const sql = `INSERT INTO departments (name)
    VALUES ("${this.name}")`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Department added!");
    });
  }
}

module.exports = Department;

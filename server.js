const db = require("./db/connection");
const mainPrompt = require("./lib/mainPrompt");
const PORT = process.env.PORT || 3001;

// start server after database connection
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to employee_track database.");
});

// call prompt function
mainPrompt();

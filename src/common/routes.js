const employeeController = require("../controllers/employeeController.js");
module.exports = app => {
    app.get("/employee", employeeController.get);
    app.post("/employee", employeeController.create);
    app.put("/employee/:id", employeeController.update);
    app.delete("/employee/:id", employeeController.delete);
};
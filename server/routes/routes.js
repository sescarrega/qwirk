const controller = require("./../controller/controller")

module.exports = function (app){
    // create one
    app.post("/api/qwirk", controller.createQwirk)
    // get one
    app.get("/api/qwirk", controller.getQwirk)
    // get all
    app.get("/api/qwirks", controller.getAllQwirks)
    // update one
    app.put("/api/qwirk/:id", controller.updateQwirk)
    // delete one
    app.delete("/api/qwirk/:id", controller.deleteQwirk)
}
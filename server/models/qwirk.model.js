const mongoose = require("mongoose")

const qwirkSchema = new mongoose.Schema({
    qwirkName:{
        type: String
    },
    oddity1:{
        type: String
    }
},{timestamps: true}, {objectid: true})

const Qwirk = mongoose.model("qwirks", qwirkSchema)
module.exports = Qwirk
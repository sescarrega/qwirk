const Qwirk = require("./../models/qwirk.model")

// create one
module.exports.createQwirk = (req, res) => {
    Qwirk.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

// get one
module.exports.getQwirk = (req, res) => {
    Qwirk.findOne({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

// get all 
module.exports.getAllQwirks = (req, res)=>{
    Qwirk.find()
        .then(qwirks => res.json(qwirks))
        .catch(err => res.status(400).json(err));
    }

// update one
module.exports.updateQwirk = ( req,res) => {
    Qwirk.findOneAndUpdate(
        { _id:req.params.id},
        req.body, 
        {new:true}
    )
        .then(user =>res.json(user))
        .catch(err => res.status(400).json(err))
}
// delete one 
    module.exports.deleteQwirk = (req,res) => {
        Qwirk.deleteOne({ _id:req.params.id})
            .then(user =>res.json(user))
            .catch(err => res.status(400).json(err))
    }


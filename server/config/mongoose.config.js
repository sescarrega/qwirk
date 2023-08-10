const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/qwirkschema', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> console.log( "connected to qwirk schema"))
.catch(err => console.log("ERROR:", err))
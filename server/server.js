//  import dependencies
const express = require('express')
const cors = require ('cors')
const app = express();
// port connection
const PORT = 8000

// config mongoose ( must setup config mongoose first
require('./config/mongoose.config')

// connect backend to frontend / config express
app.use(cors())
// post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// attach routes to express server 
require('./routes/routes')(app)

// listen to port
app.listen(PORT, ()=> {
    console.log("You are now listening to port 8000")
})

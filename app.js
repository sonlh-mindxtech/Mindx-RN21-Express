let express = require("express")
let logger = require("morgan")
let fs = require("fs")
let app = express()
let main = require("./src/routing")

// middleware
// General middleware: 
app.use(express.json()) // body parser
app.use(logger("dev"))  // logger
app.use(main)
// outer-most error handler
let error_handler = (err, req, res, next) => {
	res.json({
		message: err.message
	})
}
app.use(error_handler)


module.exports = app; // chay = node 
// require('dotenv').config()
// ->
let express = require("express")
let logger = require("morgan")
let fs = require("fs")
let app = express()
let main = require("./src/routing")
let { connectDB } = require('./src/helper/connect')
connectDB()
// middleware
// General middleware: 
app.use(express.json()) // body parser
app.use(logger("dev"))  // logger
app.use(main)
// outer-most error handler
let error_handler = (err, req, res, next) => {
	console.error(err)
	res.status(500).json({
		detail: err.message
	})
}
app.use(error_handler)


module.exports = app; // chay = node 
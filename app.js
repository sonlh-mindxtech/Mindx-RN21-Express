let express = require("express")
let logger = require("morgan")
let fs = require("fs")
let app = express()


// app.use() // middleware
// app.use() // 1 endpoint 1 callback (handler)

let home_handler = (req, res) => {
	res.json({
		"message": "Hello from my application"
	})
}
let user_hanlder = (req,res,next)=>{
	console.log("reach here")
	fs.readFile('data/user.json', 'utf8', (err, data) => {
		if (err) {
			next(err)
		}
		res.json(
			data
		)
	  });
}
let error_handler = (err,req,res,next)=>{
	res.status(500).json({
		message: err.message
	})
}
 
app.use(express.json()) // body parser
app.use(logger("dev"))  // logger
// regex string 
app.use("/user",user_hanlder)   // 1 cái endpoint
app.use("/", home_handler)      // use -> handler use -> middleware : overloading
app.get("/comment")
app.post("/comment")
app.use(error_handler)
module.exports = app; // chay = node 
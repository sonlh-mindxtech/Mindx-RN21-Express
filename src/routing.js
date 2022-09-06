const express = require('express')
const mainRouter = express.Router()
const { getComment, postComment } = require('./controller/comment')
const {
	getUser,
	getUserById,
	createUser,
	updateUserInformation,
	deleteUser,
} = require("./controller/users")

mainRouter.get("/comment", getComment)
mainRouter.post("/comment", postComment)

let mw = (req, res, next) => {
	console.log("First direction")
	next()
	res.json({ message: "fail b/c mw" })
}
mainRouter.get("/user", mw, getUser)
mainRouter.get("/user/:", getUserById)
mainRouter.post("/user", createUser)
mainRouter.put("/user", updateUserInformation)
mainRouter.delete("/user", deleteUser)

module.exports = mainRouter
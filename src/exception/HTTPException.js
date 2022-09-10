class HTTPError extends Error {
	constructor(status, message) {
		super(message)
		this.status = status
	}
}
let HTTPErrorHandler = (err, req, res, next) => {
	if (err instanceof HTTPError) {
		res.status(err.status).json({
			message: err.message
		})
	} else {
		next(err)
	}
}
module.exports = {
	HTTPError: HTTPError,
	HTTPErrorHandler: HTTPErrorHandler
}
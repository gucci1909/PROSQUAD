const jwt = require("jsonwebtoken");
const secrectKey = process.env.SECRECTTOKEN;

const AuthMiddleware = (req, res, next) => {
	const token = req.headers["authorization"];
	let decode = jwt.decode(token, secrectKey);

	if (decode.role === "admin" || decode.role === "teacher") {
		next();
	} else {
		return res.status(403).send("you are not allowed to do this operation.");
	}
};

const userAuthMiddleware = (req, res, next) => {
	const token = req.headers["authorization"];
	let decode = jwt.decode(token, secrectKey);
	if (decode.role === "student") {
		next();
	} else {
		return res.status(403).send("you are not allowed to do this operation.");
	}
};

module.exports = { AuthMiddleware, userAuthMiddleware };

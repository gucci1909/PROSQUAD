import users from "../../../models/users";
import jwt from "jsonwebtoken";
import connectDb from "../../../middleware/db";

const secrectToken = process.env.SECRECTTOKEN;

const handler = async (req, res) => {
	const token = req.headers["authorization"];
	let decode = jwt.decode(token, secrectToken);
	const { id } = req.query;
	if (req.method === "GET" && decode.id === id) {
		//GET BY ID
		try {
			const user = await users.findById(id);
			res.status(200).json({
				data: user,
			});
		} catch (error) {
			res.status(404).json({
				error: error,
			});
		}
	} else if (req.method === "PATCH") {
		const token = req.headers["authorization"];
		let decode = jwt.decode(token, secrectToken);
		const { id } = req.query;
		if (decode.role === "admin") {
			try {
				let statusChanged = await users.findByIdAndUpdate(
					id,
					{ $set: { status: req.body.status } },
					{ new: true }
				);
				return res.status(200).send(statusChanged);
			} catch (e) {
				return res.status(401).send(e);
			}
		}
	} else {
		res.status(403).send("Unauthorized Access");
	}
};

export default connectDb(handler);

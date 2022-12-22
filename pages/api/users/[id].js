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
	} else {
		res.status(403).json({ error: "Unauthorized Access" });
	}
};

export default connectDb(handler);

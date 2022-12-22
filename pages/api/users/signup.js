import User from "../../../models/users";
import connectDb from "../../../middleware/db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
	let { name, email, password, role, status } = req.body;
	// If Role is teacher status will be pending till admin's approval
	if (role === "teacher") {
		status = "pending";
	}
	if (req.method === "POST") {
		let us = await User.findOne({ email });
		try {
			// Email registered
			if (us) {
				return res.status(500).json({ error: "Email already registered" });
			}
			let newuser = new User({ name, email, password, role, status });
			await newuser.save();
			res.status(200).json({ success: "Sign up Successfull!" });
		} catch (err) {
			return res.status(500).send({ error: err.message });
		}
	}
};

export default connectDb(handler);

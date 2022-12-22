const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
	{
		course_name: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		category: {
			type: String,
			enum: ["FRONTEND", "BACKEND", "AI", "FULL STACK"],
			required: true,
		},
		selling_price: { type: Number, required: true },
		cost_price: { type: Number, required: true },
		discount: { type: String, required: true },
		qn_room: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

mongoose.models = {};
module.exports = mongoose.model("courses", coursesSchema);

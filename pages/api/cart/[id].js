import connectDb from "../../../middleware/db";
import carts from "../../../models/cart";
import mongoose from "mongoose";

const handler = async (req, res) => {
	if (req.method === "GET") {
		// if(!mongoose.connections[0].readyState){
		//   await mongoose.connection(`mongodb+srv://umangar34:Umang2000@gucci1909.vhyhdo6.mongodb.net/prosquad?retryWrites=true&w=majority`)
		// }
		// GETTING CART COURSES FOR USERS BY THEIR USER ID
		const { id } = req.query;
		try {
			const cart_courses = await carts
				.find({ userID: id })
				.populate({ path: "courseID", model: "courses" });
			console.log(cart_courses);
			if (cart_courses.length > 1) {
				var total = 0;
				for (var i = 0; i < cart_courses.length; i++) {
					total += cart_courses[i].courseID.selling_price;
				}
				res.status(200).json({
					cart: cart_courses,
					total_payment: total,
				});
			}
			// res.status(404).json({
			// message: "This userID doesn't exist",
			// });
			// }
		} catch (error) {
			res.send(error);
			//   if(!mongoose.connections[0].readyState){
			//     await mongoose.connection(`mongodb+srv://umangar34:Umang2000@gucci1909.vhyhdo6.mongodb.net/prosquad?retryWrites=true&w=majority`)
			//   }
			//   const cart_courses = await carts.find({ userID: id }).populate({ path: "courseID", model: "courses" });
			//   console.log(cart_courses);
			//   if (cart_courses.length>1) {
			//     var total = 0;
			//     for (var i = 0; i < cart_courses.length; i++) {
			//       total += cart_courses[i].courseID.selling_price;
			//     }
			//     res.status(200).json({
			//       cart: cart_courses,
			//       total_payment: total,
			//     });}
		}
	}

	if (req.method === "DELETE") {
		// DELETING CART ITEMS BY THEIR ID'S

		try {
			const { id } = req.query;
			const courses = await carts.findByIdAndDelete({ _id: id });
			res.status(202).json({
				message: "The course is deleted successfully",
			});
		} catch (error) {
			res.status(404).json({
				error: "No courses found with this id",
			});
		}
	}
};

export default connectDb(handler);

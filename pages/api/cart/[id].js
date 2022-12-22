import connectDb from "../../../middleware/db";
import cart from "../../../models/cart";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // GETTING CART COURSES FOR USERS BY THEIR USER ID
    const { id } = req.query;
    try {
      const cart_courses = await cart
        .find({ userID: id })
        .populate({ path: "courseID" });
      if (cart_courses) {
        var total = 0;
        for (var i = 0; i < cart_courses.length; i++) {
          total += cart_courses[i].courseID.selling_price;
        }
        res.status(200).json({
          cart: cart_courses,
          total_payment: total,
        });
      } else {
        res.status(404).json({
          message: "This userID doesn't exist",
        });
      }
    } catch (error) {
      res.status(404).json({
        error: "Please correct enter id in params",
      });
    }
  }

  if (req.method === "DELETE") {
    // DELETING CART ITEMS BY THEIR ID'S

    try {
      const { id } = req.query;
      const courses = await cart.findByIdAndDelete({ _id: id });
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

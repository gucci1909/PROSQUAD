import connectDb from "../../../middleware/db";
import cart from "../../../models/cart";

const handler = async (req, res) => {
  if (req.method === "POST") {
    //POSTING CART ITEMS BY USERS
    try {
      const courses = new cart({
        userID: req.body.userID,
        courseID: req.body.courseID,
      });
      const response = await courses.save();
      res.status(201).json({
        cart_courses: response,
      });
    } catch (error) {
      res.status(404).json({
        error: error,
      });
    }
  }
};

export default connectDb(handler);

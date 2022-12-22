import connectDb from "../../middleware/db";
import cart from "../../models/cart";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // GETTING CART COURSES FOR USERS BY THEIR USER ID
    const { id } = req.params.id;
    if (id) {
      try {
        const cart_courses = await cart
          .find({ userID: req.params.id })
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
          error: error,
        });
      }
    } else {
      res.status(404).json({
        error: "Please enter id in params",
      });
    }
  }
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
  if (req.method === "DELETE") {
    // DELETING CART ITEMS BY THEIR ID'S

    try {
      const { id } = req.params.id;
      if (id) {
        const courses = await cart.deleteOne(id);
        if (courses) {
          res.status(202).json({
            message: "The course is deleted successfully",
          });
        }
      } else {
        res.status(403).json({
          message: "Please Write Id in Params",
        });
      }
    } catch (error) {
      res.status(404).json({
        error: "No courses found with this id",
      });
    }
  }
};

export default connectDb(handler);

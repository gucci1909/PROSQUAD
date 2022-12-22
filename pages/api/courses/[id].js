import course, { findById } from "../../../models/courses";
import connectDb from "../../../middleware/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    //GET BY ID
    try {
      const { id } = req.query;
      const courses = await course.findById(id);
      res.status(200).json({
        one_course: courses,
      });
    } catch (error) {
      res.status(404).json({
        error: error,
      });
    }
  }
  if (req.method === "DELETE") {
    //DELETE REQUEST FOR COURSES

    try {
      const { id } = req.query;
      if (id) {
        const courses = await course.deleteOne(id);
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
  if (req.method === "PATCH") {
    //PATCH REQUEST FOR CHANGES IN PRICE IN COURSES

    try {
      const { id } = req.query;
      if (id) {
        const courses = await course.findByIdAndUpdate(id, req.body);
        if (courses) {
          res.status(202).json({
            updated_course: courses,
          });
        }
      } else {
        res.status(403).json({
          message: "Please Write Id in Params",
        });
      }
    } catch (error) {
      res.status(404).json({
        error: error,
      });
    }
  }
};

export default connectDb(handler);
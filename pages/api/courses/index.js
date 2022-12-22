import course from "../../../models/courses";
import connectDb from "../../../middleware/db";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method === "GET") {
    //GET REQUEST FOR COURSES
    // GETTING ALL COURSES

    try {
      const { limit = 6, page = 1, category } = req.query;
      if (category) {
        const courses = await course
          .find({ category: category })
          .limit(6)
          .skip((page - 1) * limit);
        res.status(200).json({
          All_Courses: courses,
        });
      } else {
        const courses = await course
          .find()
          .limit(6)
          .skip((page - 1) * limit);
        res.status(200).json({
          All_Courses: courses,
        });
      }
    } catch (error) {
      res.status(404).json({
        error: "NO COURSE FOUND",
      });
    }
  }
  if (req.method === "POST") {
    //POST REQUEST FOR COURSES

    const room_users = await course.find({
      roomNo: req.body.qn_room,
    });
    if (room_users >= 1) {
      res.status(404).json({
        message: "This room no already exists",
      });
    } else {
      try {
        const courses = new course({
          course_name: req.body.course_name,
          description: req.body.description,
          image_url: req.body.image_url,
          selling_price: req.body.selling_price,
          cost_price: req.body.cost_price,
          discount: req.body.discount,
          qn_room: req.body.qn_room,
        });
        const data = await courses.save();
        res.status(201).json({
          new_course: data,
        });
      } catch (error) {
        res.status(404).json({
          error: "Not able to add a new course",
        });
      }
    }
  }
};

export default connectDb(handler);

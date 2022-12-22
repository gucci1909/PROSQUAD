import connectDb from "../../../middleware/db";
import QAs from "../../../models/socket";

const handler = async(req, res) => {
    try {
        const {id} = req.query;
        const Chats = await QAs.find({chat_id:id});
        res.status(200).json({
          Comments: Chats
        });
      } catch (error) {
        res.status(200).send("THIS ROOM ID NOT FOUND");
      }

}

export default connectDb(handler);
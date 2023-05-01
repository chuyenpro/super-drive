import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
    require: true,
  },
  
});

//Export the model
export default mongoose.model("Comment", commentSchema);

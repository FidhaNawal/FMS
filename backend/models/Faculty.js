import mongoose from "mongoose";
// 1. Define the Schema Blueprint (The data rules structure)
const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // The application will reject entries missing this field
  },
  department: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
// 2. Compile the Schema Blueprint into an executable Model
const Faculty = mongoose.model("Faculty", facultySchema);
// 3. Export the Model for use across your CRUD API routes
export default Faculty;
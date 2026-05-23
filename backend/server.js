//  IMPORTING TOOLS
import express from "express"; // Tool to build the web server
import mongoose from "mongoose"; // Tool to talk to our MongoDB database
import cors from "cors"; // Allows frontend apps to talk to this backend
import dotenv from "dotenv"; // Loads secret keys from a hidden .env file
import facultyRoutes from "./routes/facultyRoutes.js"; // Loads our custom faculty endpoints

// CONFIGURATION & MIDDLEWARE
dotenv.config(); // Activates secret keys
const app = express(); // Creates the server application instance
app.use(cors()); // Turns on frontend access permission
app.use(express.json()); // Allows the server to read incoming JSON text data

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB Connected")) 
 .catch((error) => console.log(error)); 

//  ROUTES (The Endpoints)
// Redirects any URL starting with /api/faculty to our route file
app.use("/api/faculty", facultyRoutes);

// Test Route 
app.get("/", (req, res) => res.send("Backend Running")); 

//  SERVER IGNITION
const PORT = 5000; // Defines the network port address number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
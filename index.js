import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import likesRoutes from "./routes/likes.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app");
});
app.get("/api/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
app.get("/api/auth", authRoutes);
app.get("/api/profile", profileRoutes);
// app.get("/uploads", express.static("uploads"));
app.get("/api/likes", likesRoutes);
app.get("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;

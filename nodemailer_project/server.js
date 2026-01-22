const express = require("express");
const path = require("path");

const mailRoutes = require("./routes/mailRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder (VERY IMPORTANT for attachments)
app.use(express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", mailRoutes);

// Server start
app.listen(9000, () => {
    console.log("Server running on http://localhos");
});

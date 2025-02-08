require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(cors({origin:"*"}));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://akankshaofficial360:booking_app@cluster0.cju57.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);


app.post("/webhook", async (req, res) => {
    const intent = req.body.queryResult.intent.displayName;
    const params = req.body.queryResult.parameters;

    let responseText = "I'm not sure how to handle that request.";

    if (intent === "select_category") {
        responseText = "You can book tickets for Movies, Events, or Travel. What would you like?";
    } else if (intent === "choose_option") {
        responseText = `Available movies: Avengers, Inception. Which one would you like?`;
    } else if (intent === "select_date_time") {
        responseText = `Great! What time would you prefer? Available slots: 6:00 PM, 9:00 PM.`;
    } else if (intent === "confirm_booking") {
        responseText = `Your booking for ${params.selection} on ${params.date} at ${params.time} is confirmed!`;
    }

    res.json({ fulfillmentText: responseText });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

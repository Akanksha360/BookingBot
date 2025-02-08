const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: String,
    category: String,
    selection: String,
    date: String,
    time: String,
    tickets: Number
});

module.exports = mongoose.model("Booking", BookingSchema);

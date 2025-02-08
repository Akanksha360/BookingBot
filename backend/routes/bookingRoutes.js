const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req.body)
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking confirmed!", booking });
});

router.get("/", async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

module.exports = router;

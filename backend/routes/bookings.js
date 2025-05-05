const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const { protect, admin } = require("../middleware/auth");

// @route   GET /api/bookings
// @desc    Get all bookings for logged in user
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate(
      "service",
      "name price"
    );
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Private
router.post("/", protect, async (req, res) => {
  try {
    const { customer_name, address, date_time, service_id } = req.body;

    // Validate required fields
    if (!customer_name || !address || !date_time || !service_id) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    const booking = await Booking.create({
      customer_name,
      address,
      date_time,
      service: service_id,
      user: req.user._id,
    });

    const populatedBooking = await Booking.findById(booking._id).populate(
      "service",
      "name price"
    );

    res.status(201).json(populatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/bookings/:id
// @desc    Get booking by ID
// @access  Private
router.get("/:id", protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate(
      "service",
      "name price"
    );

    // Check if booking exists and belongs to user or user is admin
    if (
      booking &&
      (booking.user.toString() === req.user._id.toString() || req.user.isAdmin)
    ) {
      res.json(booking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   PUT /api/bookings/:id
// @desc    Update a booking
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    const { customer_name, address, date_time, service_id } = req.body;

    const booking = await Booking.findById(req.params.id);

    // Check if booking exists and belongs to user or user is admin
    if (
      booking &&
      (booking.user.toString() === req.user._id.toString() || req.user.isAdmin)
    ) {
      booking.customer_name = customer_name || booking.customer_name;
      booking.address = address || booking.address;
      booking.date_time = date_time || booking.date_time;
      booking.service = service_id || booking.service;

      const updatedBooking = await booking.save();
      const populatedBooking = await Booking.findById(
        updatedBooking._id
      ).populate("service", "name price");

      res.json(populatedBooking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/bookings/:id
// @desc    Delete a booking
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    // Check if booking exists and belongs to user or user is admin
    if (
      booking &&
      (booking.user.toString() === req.user._id.toString() || req.user.isAdmin)
    ) {
      await booking.deleteOne();
      res.json({ message: "Booking removed" });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/bookings/admin/all
// @desc    Get all bookings (admin)
// @access  Private/Admin
router.get("/admin/all", protect, admin, async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("service", "name price")
      .populate("user", "username");
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

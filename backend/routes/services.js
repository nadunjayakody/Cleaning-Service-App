const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const { protect, admin } = require("../middleware/auth");

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get("/", async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/services
// @desc    Create a service
// @access  Private/Admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const service = await Service.create({
      name,
      description,
      price,
    });

    res.status(201).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/services/:id
// @desc    Get service by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   PUT /api/services/:id
// @desc    Update a service
// @access  Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const service = await Service.findById(req.params.id);

    if (service) {
      service.name = name || service.name;
      service.description = description || service.description;
      service.price = price || service.price;

      const updatedService = await service.save();
      res.json(updatedService);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/services/:id
// @desc    Delete a service
// @access  Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (service) {
      await service.remove();
      res.json({ message: "Service removed" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

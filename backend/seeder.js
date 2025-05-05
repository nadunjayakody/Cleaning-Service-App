const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Service = require("./models/Service");
const User = require("./models/User");

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample services
const services = [
  {
    name: "Deep Cleaning",
    description:
      "Thorough cleaning of all areas including hard-to-reach places",
    price: 199.99,
  },
  {
    name: "Regular Cleaning",
    description: "Standard cleaning of visible areas",
    price: 99.99,
  },
  {
    name: "Carpet Cleaning",
    description: "Deep cleaning of carpets using specialized equipment",
    price: 149.99,
  },
  {
    name: "Window Cleaning",
    description: "Cleaning of all windows inside and out",
    price: 79.99,
  },
];

// Sample admin user
const adminUser = {
  username: "admin",
  password: "admin123",
  isAdmin: true,
};

// Import data
const importData = async () => {
  try {
    // Clear existing data
    await Service.deleteMany();
    await User.deleteMany();

    // Add services
    await Service.insertMany(services);

    // Add admin user
    await User.create(adminUser);

    console.log("Data imported successfully!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run seeder
importData();

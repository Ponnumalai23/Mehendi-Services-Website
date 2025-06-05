const Service = require("../models/Service"); // Ensure this is only declared once

// Add a new service
exports.addService = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const newService = new Service({ name, category, price, description, image });
    await newService.save();

    res.status(201).json({ message: "Service added successfully", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Error adding service", error });
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

// ✅ Get a single service by ID (Fix added)
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service by ID", error });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const updateData = { name, category, price, description };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedService = await Service.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service updated successfully", service: updatedService });
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
};

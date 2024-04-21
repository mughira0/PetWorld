import petListingModel from "../models/petListing.js";

export const handleAddPet = async (req, res) => {
  try {
    const {
      ownerName,
      phone,
      address,
      images,
      price,
      age,
      category,
      weight,
      detail,
    } = req.body;

    const newPet = await petListingModel.create({
      ownerName,
      phone,
      address,
      images,
      price,
      age,
      category,
      weight,
      detail,
    });
    res.status(201).send({
      status: true,
      message: `Pet created successfully`,
      data: newPet,
    });
  } catch (err) {
    console.log("Pet creation error:", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

export const handleEditPet = async (req, res) => {
  try {
    const {
      id,
      ownerName,
      phone,
      address,
      images,
      price,
      age,
      category,
      weight,
      detail,
    } = req.body;

    const updatedPet = await petModel.findByIdAndUpdate(
      id,
      {
        ownerName,
        phone,
        address,
        images,
        price,
        age,
        category,
        weight,
        detail,
      },
      { new: true }
    );

    if (!updatedPet) {
      return res.status(404).send({
        status: false,
        message: "Pet not found",
      });
    }

    res.status(200).send({
      status: true,
      message: "Pet updated successfully",
      data: updatedPet,
    });
  } catch (err) {
    console.log("Pet update error:", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

export const handleDeletePet = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the pet ID is passed as a route parameter

    // Check if the pet exists
    const pet = await petModel.findById(id);
    if (!pet) {
      return res.status(404).send({
        status: false,
        message: "Pet not found",
      });
    }

    // Delete the pet
    await petModel.findByIdAndRemove(id);

    res.status(200).send({
      status: true,
      message: "Pet deleted successfully",
    });
  } catch (err) {
    console.log("Pet deletion error:", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

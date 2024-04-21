import petCategoryModel from "../models/petCategory.js";
export const getAllCategories = async (req, res) => {
  try {
    const categories = await petCategoryModel.find();

    if (categories.length === 0) {
      return res.status(404).send({
        status: false,
        message: "No categories found",
      });
    }

    res.status(200).send({
      status: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (err) {
    console.log("Error fetching categories:", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

export const handleAddCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newUser = await petCategoryModel.create({
      name,
    });
    res.status(201).send({
      status: true,
      message: `Category created Successfully`,
      data: newUser,
    });
  } catch (err) {
    console.log("Category error ;", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};
export const handleEditCategory = async (req, res) => {
  try {
    const update = req.body;

    if (update?.name.length < 8) {
      return res.status(400).send({
        status: false,
        message: `Category Name should be greater than 8 characters`,
      });
    }

    const category = await petCategoryModel.findByIdAndUpdate(
      update?.id,
      update,
      {
        new: true,
      }
    );
    if (!category) {
      return res.status(404).send({
        status: false,
        message: "Category not found",
      });
    }
    res.status(201).send({
      status: true,
      message: `Category Updated Successfully`,
      data: category,
    });
  } catch (err) {
    console.log("Category error ;", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};
export const handleDeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if there are any pets associated with this category
    const petsInCategory = await petModel.find({ category: id });
    if (petsInCategory.length > 0) {
      return res.status(400).send({
        status: false,
        message: "Cannot delete category with associated pets",
      });
    }

    // Delete the category
    const category = await petCategoryModel.findByIdAndRemove(id);

    if (!category) {
      return res.status(404).send({
        status: false,
        message: "Category not found",
      });
    }

    res.status(200).send({
      status: true,
      message: "Category deleted successfully",
      data: category,
    });
  } catch (err) {
    console.log("Category deletion error:", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

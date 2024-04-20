import petCategoryModel from "../models/petCategory";

export const handleAddCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (name.length < 8) {
      return res.status(400).send({
        status: false,
        message: `Category should be greater than 8 characters`,
      });
    }

    const newUser = await petCategoryModel.create({
      name,
      image: "https://avatar.iran.liara.run/public/boy",
    });
    res.status(201).send({
      status: true,
      message: `Category created Successfully`,
      user: newUser,
    });
  } catch (err) {
    console.log("Category error ;", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

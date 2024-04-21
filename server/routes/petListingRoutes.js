import express from "express";

import {
  handleAddPet,
  handleDeletePet,
  handleEditPet,
} from "../controllers/petListingController.js";

const router = express.Router();
router.post("/category", handleAddPet);
router.patch("/petListing", handleEditPet);
router.delete("/petListing/:id", handleDeletePet);
export default router;

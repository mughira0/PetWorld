import express from "express";
import {
  handleAddCategory,
  handleEditCategory,
} from "../controllers/categoryContoller.js";

const router = express.Router();
router.post("/category", handleAddCategory);
router.patch("/category", handleEditCategory);
export default router;

import express from "express";
import { handleAddCategory } from "../controllers/categoryContoller.js";

const router = express.Router();
router.post("/category", handleAddCategory);

export default router;

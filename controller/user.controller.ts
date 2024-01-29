import express from "express";
import { addUser, getAllUser, getUserById } from "../services/user.service";

const router = express.Router();
router.post("/add", addUser);
router.get("/users", getAllUser);
router.get("/:id", getUserById);
export default router;
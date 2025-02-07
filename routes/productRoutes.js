import express from "express";
import authorize from "../middleware/auth.js";
import multer from "multer";

import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/productController.js";
import { uploads } from "../middleware/imageUpload.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).array("images", 5);

router.get("/getProduct", authorize, getItems);
router.post("/image", authorize, uploads.array("image"), createItem);
router.put("/update/:id", authorize, uploads.array("image"), updateItem);
router.delete("/delete/:id", authorize, deleteItem);

export default router;

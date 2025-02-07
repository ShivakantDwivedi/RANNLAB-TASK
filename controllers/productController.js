import Product from "../models/productModel.js";
import dotenv from "dotenv";
dotenv.config();

export const createItem = async (req, res) => {
  try {
    let imageUrl = [];
    const userId = req.auth;
    imageUrl = req.files.map((data) => {
      return data.location;
    });
    const newItem = new Product({
      ...req.body,
      userId,
      image: imageUrl,
    });
    const saveItem = await newItem.save();
    return res.status(201).json(saveItem);
  } catch (error) {
    console.log("Error in createItem:", error);
    res.status(400).json({ message: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    let imageUrl = [];
    imageUrl = req.files.map((data) => {
      return data.location;
    });
    const updatedItem = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        image: imageUrl,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item delated Sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

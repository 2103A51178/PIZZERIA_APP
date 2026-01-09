const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/ShoppingCart");


// 👉 ADD TO CART
router.post("/add", async (req, res) => {
  const { pizzaId, name, price, image } = req.body;

  try {
    let item = await ShoppingCart.findOne({ pizzaId });

    if (item) {
      item.quantity += 1;
      await item.save();
    } else {
      await ShoppingCart.create({
        pizzaId,
        name,
        price,
        image,
        quantity: 1
      });
    }

    res.json({ message: "Added to cart" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// 👉 GET CART ITEMS
router.get("/", async (req, res) => {
  const items = await ShoppingCart.find();
  res.json(items);
});


// 👉 UPDATE QUANTITY (+ / -)
router.put("/:pizzaId", async (req, res) => {
  const { action } = req.body; // "inc" or "dec"

  let item = await ShoppingCart.findOne({ pizzaId: req.params.pizzaId });

  if (!item) return res.status(404).json({ msg: "Item not found" });

  if (action === "inc") item.quantity += 1;
  if (action === "dec" && item.quantity > 1) item.quantity -= 1;

  await item.save();
  res.json(item);
});


// 👉 DELETE ITEM
router.delete("/:pizzaId", async (req, res) => {
  await ShoppingCart.deleteOne({ pizzaId: req.params.pizzaId });
  res.json({ message: "Item removed" });
});

module.exports = router;

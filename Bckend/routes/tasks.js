const express = require("express");
const router = express.Router()

const {createItems, getItem, getItems, deleteItem, updateItem} = require("../Controllers/tasksControllers") 

router.get("/", getItems)

router.get("/:id", getItem)

router.post("/", createItems)

router.delete("/:id", deleteItem)

router.patch("/:id", updateItem)

module.exports = router
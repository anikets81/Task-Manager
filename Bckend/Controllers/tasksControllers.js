const Item = require("../Models/itemModel")
const mongoose = require("mongoose")

const getItems = async(req, res)=>{
    const items = await Item.find({}).sort({createdAt:-1})
    res.status(200).json(items)
}


const getItem = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error:"No such item"})

    const item = await Item.findById(id)

    if(!item)
        return res.status(404).json({error: "No item found"})

    res.status(200).json(item)
}

const createItems = async(req, res)=>{
    const {title, quantity, price} = req.body
    try{
        const items = await Item.create({title, quantity, price})
        res.status(200).json({items})
    }
    catch(error){
        res.status(400).json({error: error})
    }
}

const deleteItem = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error:"No such item"})

    const item = await Item.findOneAndDelete({_id : id})
    if(!item)
        return res.status(400).json({error: "No item found"})

    res.status(200).json(item)
}

const updateItem = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error:"No such item"})

    const item = await Item.findOneAndUpdate({_id : id}, {...req.body})
    if(!item)
        return res.status(400).json({error: "No item found"})

    res.status(200).json(item)
}

module.exports = {createItems, getItems, getItem, deleteItem, updateItem}
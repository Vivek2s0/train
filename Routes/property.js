const express = require('express');
const propertyRouter = express.Router();
const {PropertyModel}= require('../Models/Property');
const {UserID} =require("../middleWare/userID");
const {BookingModel} =require("../Models/Booking")

propertyRouter.post('/create', async (req, res) => {
    const { title, description, location, price ,image} = req.body;
   
  try {
   
    const property = new PropertyModel({ title, description, location, price ,image});
    await property.save();
    res.status(200).send({ message: "Property created successfully" });
  } catch (error) {
    res.status(500).send({ error: "An error occurred", });
  }
});

propertyRouter.get('/list', async (req, res) => {
  try {
    const properties = await PropertyModel.find();
    res.status(200).send(properties);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

propertyRouter.post('/booking',UserID, async (req, res) => {
  
  const {propertyId,from,till}=req.body
  const userID=req.userID
  const user={userID,propertyId,from,till}
  try {
    
    const book = new BookingModel(user)
    await book.save()
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

propertyRouter.get('/booking',UserID, async (req, res) => {
   const id=req.userID
  try {
    const book=await BookingModel.find({userID:id})
    .populate("propertyId")
    book.length > 0
      ? res.status(200).send(book)
      : res.status(200).send("you did not book so for");
  
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

module.exports = {
    propertyRouter
};

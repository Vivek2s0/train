const mongoose = require('mongoose');

const propertySchema =mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  
},{ timestamps: true ,versionKey:false});

const PropertyModel= mongoose.model('Property', propertySchema);
module.exports = {
    PropertyModel

}

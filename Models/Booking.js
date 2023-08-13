const mongoose = require('mongoose');

const BookingSchema =mongoose.Schema({
  userID: { type:mongoose.Types.ObjectId, required: true,ref:"user" },
  propertyId: { type:mongoose.Types.ObjectId, required: true ,ref:"Property"},
  from: { type:String, required: true },
  till: { type: String, required: true },

  
},{ timestamps: true ,versionKey:false});

const BookingModel= mongoose.model('Booking', BookingSchema);
module.exports = {
    BookingModel

}

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = Schema({
  idCourse: {
    type: Number,
    unique: true,
    require: true
  },
  link: String,
  coupon: String,
  price: Number,
  Order: Number
});

module.exports = mongoose.model("CourseSchema", CourseSchema);

const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
  phone: {type: String,required: false,unique: false,trim: false,minlength: 0},
  password: {type: String,required: false,unique: false,trim: false,minlength: 0},
  invite: {type: String,required: false,unique: false,trim: false,minlength: 0},
  AcBalance: {type: String,required: false,unique: false,trim: false,minlength: 0},
  InBalance: {type: String,required: false,unique: false,trim: false,minlength: 0},
  product: {type: String,required: false,unique: false,trim: false,minlength: 0},
  cycle: {type: String,required: false,unique: false,trim: false,minlength: 0},
  daily: {type: String,required: false,unique: false,trim: false,minlength: 0},
  total: {type: String,required: false,unique: false,trim: false,minlength: 0},
  task: {type: String,required: false,unique: false,trim: false,minlength: 0},
  count: {type: String,required: false,unique: false,trim: false,minlength: 0},
  ac: {type: String,required: false,unique: false,trim: false,minlength: 0},
  b: {type: String,required: false,unique: false,trim: false,minlength: 0},
  c: {type: String,required: false,unique: false,trim: false,minlength: 0},
  d: {type: String,required: false,unique: false,trim: false,minlength: 0},
  rb: {type: String,required: false,unique: false,trim: false,minlength: 0},
  rc: {type: String,required: false,unique: false,trim: false,minlength: 0},
  rd: {type: String,required: false,unique: false,trim: false,minlength: 0},
  bank: {type: String,required: false,unique: false,trim: false,minlength: 0},
  acname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Deposit: {type: String,required: false,unique: false,trim: false,minlength: 0},
  withdrawal: {type: String,required: false,unique: false,trim: false,minlength: 0},
  key: {type: String,required: false,unique: false,trim: false,minlength: 0},
  bonus: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const User = mongoose.model("User",UserSchema)

module.exports = User;



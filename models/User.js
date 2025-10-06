import mongoose from "mongoose";

userSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    imageUrl : {type:String,required:true},
    cardItems:{type:Object,default:{}}
},{minimize:false})

const User = mongoose.model.user || mongoose.model('user',userSchema)

export default User
import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true,maxlength:80},username:{type:String,required:true,unique:true,lowercase:true,trim:true,match:/^[a-z0-9_]{3,24}$/},email:{type:String,required:true,unique:true,lowercase:true,trim:true},passwordHash:{type:String,required:true},bio:{type:String,maxlength:280,default:''},avatarUrl:{type:String,default:''}},{timestamps:true});
export default mongoose.model('User',schema);

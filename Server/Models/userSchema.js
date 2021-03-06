const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedfile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const postMessage=mongoose.model('postmessage',postSchema);
module.exports=postMessage;
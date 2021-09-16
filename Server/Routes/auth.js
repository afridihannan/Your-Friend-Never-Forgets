const express =require("express");
import {getPost,createPost} from './Controllers/posts.js';
const router=express.Router();

router.get('/',getPost);
router.post('/',createPost);
module.exports=router;
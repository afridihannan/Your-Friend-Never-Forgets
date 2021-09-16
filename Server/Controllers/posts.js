import postMessage from "../Models/userSchema";


export const getPost=async(req,res)=>{
    try{
        const postmessage=await postMessage.find({});
        res.status(200).json(postmessage);
    }catch(err){res.status(404).json({message:error.message})};
}
export const createPost=async(req,res)=>{
    const post=req.body;
    const newpost=new postMessage(post);
   try {
       newpost.save();
       res.status(200).json(newpost);
   } catch (error) {
       res.status(404).json({message:error.message});
   }
}
const router = require("express").Router();
const Post = require("../models/Post");
const User= require("../models/Post");


//register

router.post("/posts",async(req,res)=>{

    try{

       const newpost = new Post({
        title:req.body.title,
        desc:req.body.desc,
        username:req.body.username,
        categories:req.body.categories,
       })
       const post= await newpost.save();
       res.status(200).json(post); 
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})


router.get("/getpost", (req, res)=>{
    Post.find({},(err, result)=>{
        if(err){
            res.json({err:true});
        }
        else {
            if(result){
                res.json(result);
            }
        }
    })
})


//update

router.put("/:id", async(req, res) =>{
    
 try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username)
        {
        try{

            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {new : true}
            );

            res.status(200).json(updatedPost);

        }
        catch(err)
        {

            res.status(500).json(err);
        }
    }
    else
    {
        res.status(401).json("you can update only your post!");
    }

    }

    catch(err)
    {
        res.status(500).json(err);
    }

});




//delete

router.delete("/:id", async(req, res)=>{

    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username)
        {
            try{

                await post.delete();
                res.status(200).json("Post has been Deleted");
            }
            catch(err)
            {
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You can delete only your post");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }

});
module.exports = router
const router = require("express").Router();
const User= require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

//update

router.put("/:id", async(req,res)=>{

    if(req.body.userId === req.params.id){

    
    if(req.body.password)
    {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set : req.body,
        },{new:true});
        res.status(200).json(updatedUser);
    }
        
    catch(err)
    {
        res.status(500).json(err);
    }

}
    else
    {

        res.status(500).json("You can't update your account");
    }

});

//delete


router.delete("/:id", async(req,res)=>{

    if(req.body.userId === req.params.id)
    {
        try{
        await User.findByIdAndDelete(req.params.id);
    
    //console.log(req.body.userId);

    res.status(200).json("User has been deleted Successfully");
    }

    catch(err)
    {

        res.status(500).json(err);
    }
    
   /* console.log(req.body.userId);
    console.log(req.params["id"]);
    res.status(200).json("ok");
    */
}
else{
    res.status(401).json("You can update only your Acc");
}
});




router.get("/getusers", (req, res)=>{
    User.find({},(err, result)=>{
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


module.exports = router
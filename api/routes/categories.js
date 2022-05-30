const router = require("express").Router();

const Category= require("../models/Category");


//register

router.post("/category",async(req,res)=>{
    try{
        const category = new Category({
       
          username:req.body.username,
          name:req.body.name
        })
        const categ= await category.save();
        res.status(200).json(categ); 
      
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

router.get("/getcat", (req, res)=>{
    Category.find({},(err, result)=>{
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


router.put("/:id", async(req, res) =>{
    
    try{
           const category = await Category.findById(req.params.id);
           if(category.username === req.body.username)
           {
           try{
   
               const updatedcategory = await Category.findByIdAndUpdate(
                   req.params.id,
                   {
                       $set: req.body,
                   },
                   {new : true}
               );
   
               res.status(200).json(updatedcategory);
   
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
   
   


  
   router.delete("/:id", async(req,res)=>{

    if(req.body.userId === req.params.id)
    {
        try{
        await Category.findByIdAndDelete(req.params.id);
    
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





//login


module.exports = router
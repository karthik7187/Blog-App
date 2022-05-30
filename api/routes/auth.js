const router = require("express").Router();
const User= require("../models/User");
const bcrypt = require('bcrypt');
const express = require("express");

//register

router.post("/register",async(req,res)=>{

    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
           
        })

        const user= await newUser.save();
        res.status(200).json(user);
        
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//login

router.post("/login",async(req,res)=>
{

    try{

        const user= await User.findOne({ username: req.body.username});
        if(!user)
        {
            res.status(400).json(err);
        }
        
        else
        {
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated) 
        {res.status(400).json("wrong credentials");
        }

        else
        {

        const{ password, ...others }=user._doc;
        res.status(200).json(others);
        }
        }      
    }
    catch(err)
    {
        res.status(400).json(err);
    }

})

//get user

/*router.get(":/id",async(req,res)=>{

    try{

        const user = await User.findById(req.params.id);
        const{ password, ...others }=user._doc;
        res.status(200).json(others);

    }

    catch(err){

        res.status(500).json(err);
    }

});
*/

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
const express = require('express');
const router = express.Router;
const AddMeme=require('../models/AddMeme.model');
const GenMeme=require('../models/genmeme.model');
const NewCat=require('../models/newcat.model');

router.post('/addMeme',async (req,res)=>
{
    const addMeme = new AddMeme({
        imgUrl:req.body.imgUrl,
        catname:req.body.catname,
    });
    try
    {
        const savedMeme = await addMeme.save();
        res.json(savedMeme);

    }catch(err){
        res.json({msg:err});

    }
});
module.exports = router;

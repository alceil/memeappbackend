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

router.post('/genMeme',async(req,res)=>
{
    const genMeme = new GenMeme({
        imgUrl:req.body.imgUrl,
    });
    try
    {
        const savedgenmeme = await genMeme.save();
        res.json(savedgenmeme);    
    }
    catch(err){
        res.json({msg:err});
    }

});
router.post('/newcat',(req,res)=>
{
    const newcat= new NewCat({
        imgUrl:req.body.imgUrl,
        catname:req.body.catname

    })
})
module.exports = router;

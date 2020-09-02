const express = require('express');
const router = express.Router();
const AddMeme = require('../models/AddMeme.model');
const GenMeme = require('../models/genmeme.model');
const NewCat = require('../models/newcat.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.username+".jpg");
    }
});

const FileFilter = (req,file,cb)=>{
    if(file.mimetype=='image/jpg'||file.mimetype=='image/png'){
        cb(null,true);
    }
        else{
         cb(null,false);   
        }
    };

 const upload = multer({
     storage:storage,
     limits:{
         fileSize:1024 * 1024 * 6,
     }
 });
 
 router.route('/add/image').patch(upload.single("img"),(req,res)=>{
     AddMeme.findOneAndUpdate({username:req.body.name}
        {
            $set:{
                imgUrl:req.file.path,
            }
        })
 })






router.post('/addMeme', async (req, res) => {
    const addMeme = new AddMeme({
        imgUrl: req.body.imgUrl,
        catname: req.body.catname,
    });
    try {
        const savedMeme = await addMeme.save();
        res.json(addMeme);

    } catch (err) {
        res.json({ msg: err });

    }
});

router.post('/genMeme', async (req, res) => {
    const genMeme = new GenMeme({
        imgUrl: req.body.imgUrl,
    });
    try {
        const savedgenmeme = await genMeme.save();
        res.json(savedgenmeme);
    }
    catch (err) {
        res.json({ msg: err });
    }

});
router.post('/newcat', async (req, res) => {
    const newcat = new NewCat({
        imgUrl: req.body.imgUrl,
        catname: req.body.catname
    });
    try {
        const nc = await newcat.save();
        res.json(nc);
    } catch (err) {
        res.json({ msg: err });
    }
})

module.exports = router;

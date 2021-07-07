const express = require('express');
const router = express.Router();
const AddMeme = require('../models/AddMeme.model');

const AddHindiMeme = require('../models/addhindimeme.model');
const GenMeme = require('../models/genmeme.model');
const HindiMeme = require('../models/hindimeme.model');
const aws = require('aws-sdk');
const NewCat = require('../models/newcat.model');
const NewHindiCat = require('../models/newhindicat');
const MovPromo = require('../models/movPromo.model');
const multerS3 = require('multer-s3');
const multer = require('multer');
require('dotenv').config();

aws.config.update({
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key
});

const spacesEndpoint = new aws.Endpoint('ams3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'cgsteam',
      acl: 'public-read',
      key: function (request, file, cb) {
        console.log(file);
        cb(null, file.originalname);
      }
    })
  }).array('upload', 1);


 
 router.post('/add/image',async function (request, response, next) {
    upload(request, response,  function (error) {
      if (error) {
        console.log(error);
      }
       var name =request.files[0]['location'];
      console.log('File uploaded successfully.');
      response.json({"url":name});
    }); 
  });

router.route('/addMeme').post( async (req, res) => {
    const addMeme = new AddMeme({
        imgUrl: req.body.imgUrl,
        catname: req.body.catname,
        images:[],
    });
    try {
        const savedMeme = await addMeme.save();
        res.json(savedMeme);

    } catch (err) {
        res.json({ msg: err });

    }
});



router.route('/addHindiMeme').post( async (req, res) => {
    const addMeme = new AddHindiMeme({
        imgUrl: req.body.imgUrl,
        catname: req.body.catname,
        images:[],
    });
    try {
        const savedMeme = await addMeme.save();
        res.json(savedMeme);

    } catch (err) {
        res.json({ msg: err });

    }
});

router.route('/addMeme/:catname').patch(async (req,res) => {
    try{
        
    const kmeme= await AddMeme.findOneAndUpdate({catname:req.params.catname}, { $push:{images:{"url":req.body.url,"memename":req.body.memename}}});
    res.json(kmeme);
    }
    catch(err){
        res.json({msg:err});
    }
});


router.route('/addHindiMeme/:catname').patch(async (req,res) => {
    try{
        
    const kmeme= await AddHindiMeme.findOneAndUpdate({catname:req.params.catname}, { $push:{images:{"url":req.body.url,"memename":req.body.memename}}});
    res.json(kmeme);
    }
    catch(err){
        res.json({msg:err});
    }
});
router.route('/genMeme').post( async (req, res) => {
    const genMeme = new GenMeme({
        imgUrl: req.body.imgUrl,
        memename:req.body.memename
    });
    try {
        const savedgenmeme = await genMeme.save();
        res.json(savedgenmeme);
    }
    catch (err) {
        res.json({ msg: err });
    }

});



router.route('/hindiMeme').post( async (req, res) => {
    const hindiMeme = new HindiMeme({
        imgUrl: req.body.imgUrl,
        memename:req.body.memename
    });
    try {
        const savedhindimeme = await hindiMeme.save();
        res.json(savedhindimeme);
    }
    catch (err) {
        res.json({ msg: err });
    }

});


router.route('/newcat').post( async (req, res) => {
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
});



router.route('/newhindicat').post( async (req, res) => {
    const newhindicat = new NewHindiCat({
        imgUrl: req.body.imgUrl,
        catname: req.body.catname
    });
    try {
        const nc = await newhindicat.save();
        res.json(nc);
    } catch (err) {
        res.json({ msg: err });
    }
});

router.route('/movPromo').post( async (req, res) => {
    const movPromo = new MovPromo({
        'url':req.body.url,
        'moviename': req.body.moviename,
        'movUrl': req.body.movUrl
    }
    );
    try {
        const savedmovpromo = await movPromo.save();
        res.json(savedmovpromo);
    }
    catch (err) {
        res.json({ msg: err });
    }

});

router.get('/addMeme', async (req, res) => {
    try
    { 
  const fPost= await AddMeme.find({});
  res.json(fPost);
  }catch(err){
        res.json({message:err});
    }
});

router.get('/addHindiMeme', async (req, res) => {
    try
    { 
  const fPost= await AddHindiMeme.find({});
  res.json(fPost);
  }catch(err){
        res.json({message:err});
    }
});



router.get('/hindiMeme', async (req, res) => {
    try
    { 
  const fPost= await HindiMeme.find({}).sort({createdAt:-1});
  res.json(fPost);
  }catch(err){
        res.json({message:err});
    }
});

router.get('/genMeme', async (req, res) => {
    try
    { 
  const fPost= await GenMeme.find({}).sort({createdAt:-1});
  res.json(fPost);
  
  }catch(err){
        res.json({message:err});
    }
});

router.get('/movPromo', async (req, res) => {
    try
    { 
  const fPost= await MovPromo.find({}).sort({createdAt:-1});
  res.json(fPost);
  
  }catch(err){
        res.json({message:err});
    }
});


module.exports = router;

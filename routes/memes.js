const express = require('express');
const router = express.Router();
const AddMeme = require('../models/AddMeme.model');
const GenMeme = require('../models/genmeme.model');
const aws = require('aws-sdk');
const NewCat = require('../models/newcat.model');
const multerS3 = require('multer-s3');
const multer = require('multer');
require('dotenv').config();

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./uploads");
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now().toString()+".jpg");
//     }
// });

// const FileFilter = (req,file,cb)=>{
//     if(file.mimetype=='image/jpg'||file.mimetype=='image/png'){
//         cb(null,true);
//     }
//         else{
//          cb(null,false);   
//         }
//     };

//  const upload = multer({
//      storage:storage,
//      limits:{
//          fileSize:1024 * 1024 * 6,
//      }
//  });

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


 
 router.route('/add/image').post(async function (request, response, next) {
    upload(request, response,  function (error) {
      if (error) {
        console.log(error);
      }
       var name =request.files[0]['location'];
      console.log('File uploaded successfully.');
      response.json({"url":name});
    }); 
  });

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

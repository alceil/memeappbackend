const express = require('express');
const router = express.Router;
const AddMeme=require('../models/AddMeme.model');
const GenMeme=require('../models/genmeme.model');
const NewCat=require('../models/newcat.model');

router.post('/addMeme')

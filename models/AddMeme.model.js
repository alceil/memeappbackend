const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddMeme = Schema(
    {
        imgUrl:{
            type:String,
            default:""
        },
        catname:{
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model("AddM",AddMeme);
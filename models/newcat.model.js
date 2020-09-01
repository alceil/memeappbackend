const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenMeme = Schema(
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

module.exports = mongoose.model("GenMeme",GenMeme);
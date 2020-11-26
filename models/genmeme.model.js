const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenMeme = Schema(
    {
        imgUrl:{
            type:String,
            default:""
        },
        memename:{
            type:String,
        }
    }
);

module.exports = mongoose.model("GenMeme",GenMeme);
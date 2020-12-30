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
    }, { timestamps: true }
);

module.exports = mongoose.model("GenMeme",GenMeme);
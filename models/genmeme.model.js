const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenMeme = Schema(
    {
        imgUrl:{
            type:String,
            default:""
        },
    }
);

module.exports = mongoose.model("GenM",GenMeme);
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
        }
    }
);

module.exports = mongoose.model("AddMeme",AddMeme);

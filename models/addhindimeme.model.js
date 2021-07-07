const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddHindiMeme = Schema(
    {
        imgUrl:{
            type:String,
            default:""
        },
        catname:{
            type:String,
        },
        images:[{
            url:String,
            memename:String
        }]
    }
);

module.exports = mongoose.model("AddHindiMeme",AddHindiMeme);

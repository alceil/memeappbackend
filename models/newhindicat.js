const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NewHindiCat = Schema(
    {
        imgUrl:{
            type:String,
            default:""
        },
        catname:{
            type:String,
            required:true
        },
        images:[{
            url:String,
            memename:String
        }]
    }
);

module.exports = mongoose.model("NewHindiCat",NewHindiCat);
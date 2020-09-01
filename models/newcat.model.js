const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NewCat = Schema(
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

module.exports = mongoose.model("NewCat",NewCat);
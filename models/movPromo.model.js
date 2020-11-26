const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovPromo = Schema(
    {
        url:{
            type:String,
            default:""
        },
        moviename:{
            type:String,
        },
        movUrl:{
            type:String,
        },

    }
);

module.exports = mongoose.model("MovPromo",MovPromo);
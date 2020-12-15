const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovPromo = Schema(
    {
        url:{
            type:String,
            // default:""
        },
        moviename:{
            type:String,
        },
        movUrl:{
            type:String,
        },

    }, { timestamps: true }
);

module.exports = mongoose.model("MovPromo",MovPromo);
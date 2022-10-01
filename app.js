const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const memeRoutes = require('./routes/memes'); 
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/memes',memeRoutes);

app.get('/',(req,res)=>{
    res.send('We are legion')
});
mongoose.connect('mongodb+srv://nemesisx:nemesisx@kindi.c110p.mongodb.net/kindi?retryWrites=true&w=majority',{ useFindAndModify: false , useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('Connected to db'));
app.listen(PORT);

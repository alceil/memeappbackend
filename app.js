const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const memeRoutes = require('./routes/memes'); 

app.use(cors());
app.use(bodyParser.json());
app.use('/memes',memeRoutes);

app.get('/',(req,res)=>{
    res.send('We are legion')
});
mongoose.connect('mongodb+srv://nemesisx:nemesisx@kindi.c110p.mongodb.net/kindi?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('Connected to db'));
<<<<<<< HEAD
// mongoose
// .connect('mongodb+srv://nemesisx:nemesisx@kindi.c110p.mongodb.net/kindi?retryWrites=true&w=majority')
// .then(()=> console.log("connected"))
// .catch((e)=>console.log(e));
app.listen(3000);
=======

app.listen(3000);
>>>>>>> f647714567d58c7645501b7809a3f500b6bafaef

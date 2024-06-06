let express=require('express');
let app=express();
let mongoose = require('mongoose');
require('dotenv').config();
let bodyParser = require('body-parser');
app.use('/',express.static(__dirname+'/src'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
mongoose.connect(process.env.MONGO_URI);

let messageSchema = new mongoose.Schema({  
    email: String,
    message: String
});

let message = mongoose.model('message', messageSchema);  
app.use(bodyParser.urlencoded({ extended: false })); //to get input from html body

app.get('/',async(req,res)=>{
	const response=await fetch('https://random-quote-generator-srujan.vercel.app/json');
  const data=await response.json();
  res.render(__dirname+'/src/portfolio.html',data); 
  
});
app.post('/submitmessage',async(req,res)=>{
    let newmessage = new message({ email: req.body.email, message: req.body.message });
    newmessage.save().then((result) => {console.log("Message Submitted");}).catch((err) => {console.log(err);});
    
    res.redirect('/');
})

app.listen(8000);




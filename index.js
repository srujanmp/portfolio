let express=require('express');
let app=express();
app.use('/',express.static(__dirname+'/src'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.get('/',async(req,res)=>{
	const response=await fetch('https://random-quote-generator-srujan.vercel.app/json');
  const data=await response.json();
  res.render(__dirname+'/src/portfolio.html',data);
  
});

app.listen(8000);




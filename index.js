let express=require('express');
let app=express();
app.use('/',express.static(__dirname+'/src'));

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/src/portfolio.html');
});

app.listen(8000);




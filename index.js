let express=require('express');
let app=express();


app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/portfolio.html');
});

app.listen(8000);




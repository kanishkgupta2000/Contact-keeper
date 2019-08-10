const express=require('express');

const app=express();

app.get('/',(req,res)=>{
	res.send("hello");
})

//define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));


const PORT=process.env.PORT||3000;
app.listen(3000,()=>{
	console.log("server is listening");
})
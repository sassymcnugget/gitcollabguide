//this is a BIGG test!
//please ignore if I do something fully incorrect thank you :)
const express = require('express');

const app = express();

//routes 
app.get('/home', (req, res)=> {
    res.render('home.ejs')
})

//listen 
const PORT = 3000
app.listen(PORT, ()=>{
	console.log(`'listening.... ${PORT}'`);
})

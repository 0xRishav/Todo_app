const express = require('express');
const app = express();
const port = 8000;

app.get('/',function(req,res){
    res.end('<h1>This is the home page!</h1>')
});

app.listen(port, function(err){
    if(err){
        console.log(`error in running server: ${err}`);
        return;
    }
    console.log(`server is running on port: ${port}`);
});

import express from "express";
import path from 'path';
import open from 'open';
import compression from 'compression';


const port = 3000;
const app = express();
app.use(compression());
app.use(express.static('dist'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});

// new route for http module

app.get('/users',function(req,res){
    //hard coded json array coming out as response
    res.json([
        {"id":1,"firstName":"Sam","lastName":"Bob","email":"samB@gmail.com"},
        {"id":2,"firstName":"Sam2","lastName":"Bob2","email":"samB2@gmail.com"},
        {"id":3,"firstName":"Sam3","lastName":"Bob3","email":"samB3@gmail.com"}
    ]);
});


app.listen(port,function(err){
    if(err){
        console.log(err); //eslint-disable-line no-console
    } else{
        open(`http://localhost:${port}`);
    }
});


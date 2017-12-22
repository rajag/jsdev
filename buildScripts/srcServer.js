/* // standard JS
var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000;
var app = express();
*/
// for ES 2016
/*jshint esversion: 6 */
import express from "express";
import path from 'path';
import open from 'open';
//for web pack
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 3000;
const app = express();

const compiler =webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
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
        open('http://localhost:'+port);
    }
});


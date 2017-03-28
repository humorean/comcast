
var express = require('express');
var app = express();
var fs= require('fs');
var bodyParser= require('body-parser');
var mainFunction = require('./mainFunction');

app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/scripts',express.static(__dirname+'/app/'));
app.set('port',(process.env.PORT||5000));

app.listen(app.get('port'),()=>{
  console.log("Server running at localhost:5000");
})

app.get('/',(req,res)=>{
  res.render("index",{title:"Comcast",message:"This is Home Page"})
})

app.post('/',(req,res)=>{
  var coordsObjFromFile = JSON.parse(fs.readFileSync('coordinates.json', 'utf8'));
  var userInputArray = [Number(req.body['x']),Number(req.body['y'])]
  var sortedList =JSON.stringify(mainFunction.sort(userInputArray,coordsObjFromFile));
  res.render("index",{sortedList:sortedList,userInput:userInputArray})
})

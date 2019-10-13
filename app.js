var express = require('express')
var app = express()
app.listen(3000, function(){
    console.log("start! server on 3000port!")
})

// static 폴더 설정
app.use(express.static("public"))

app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
})


var express=require("express")
var app=express()
var PORT=process.env.PORT || 8000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
var apiroutes = require("./routes/apiroutes")
apiroutes(app)
var htmlroutes = require("./routes/htmlroutes")
htmlroutes(app)
app.listen(PORT,function(){
    console.log("app is listening" + PORT)
})
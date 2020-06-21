var db = require("../db/db.json")
var fs = require("fs")
var id = db.length+1
function apiroutes(app){
    app.get("/api/notes",function(req,res){
        res.json(db)
    })
    app.post("/api/notes",function(req,res){
        req.body.id = id++
        console.log(req.body)
        db.push(req.body)
        fs.writeFile("./db/db.json",JSON.stringify(db),function(){
        })
       res.json(db)
    })
    app.delete("/api/notes/:id",function(req,res){
       var id=parseInt(req.params.id)
     console.log(id)
       for (let index = 0; index < db.length; index++) {
    
           if(id===db[index].id){
               db.splice(index,1)
           }
       }
       console.log(db)
       fs.writeFile("./db/db.json",JSON.stringify(db),function(){
    })
   res.json(db)
    })
}
module.exports=apiroutes
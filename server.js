const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
var PORT=process.env.PORT || 5000;
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var n1=req.body.lcm1;
    var n2=req.body.lcm2;
    var c=0;
    for(var i=1;i<=n2;i++){
        var co_mult1=n1*i;
        for(var j=1;j<=n1;j++){
            var co_mult2=n2*j;
            if(co_mult1==co_mult2){
                res.send("LCM IS : "+co_mult2);
                c=1;
                break;
            }
        }
        if(c==1){
            break;
        }
    }
    

})

app.listen(PORT,function(){
    console.log("server has started on port 3000")
})

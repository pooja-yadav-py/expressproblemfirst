//step 1: impot express and create an instance
const express = require('express');

//first step for writing files:- imported fs module from node js
const fs = require('fs');
const router = express.Router();


const folderPath =  `${__dirname}/data`;

//step 2: secondary route
router.get("/",function(req,res){
    res.send("student seconday path");
});

router.post("/add",function(req,res){
    
    const studentData = req.body;
    

    //use write file module
    fs.writeFile(`${folderPath}/student.json`,JSON.stringify(studentData),function(err) {
        if(err){
            console.log("Error in written successfully");
        }
        else{
            console.log("file written succesfully");
            res.send({result:"Success"});
          }

        }   
     
      )
       
    });
    
    router.get("/getDetails",function(req,res){
    fs.readFile(`${folderPath}/student.json`,"utf-8",(err,data) => {
        const orgData = JSON.parse(data);
        console.log(data);
        console.log(orgData);
        res.send(orgData);
    });
    });
    
    

//step 3 : export router
module.exports = router;
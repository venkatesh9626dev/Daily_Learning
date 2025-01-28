import fs from "fs";

// normal read file method to read file

const readFile = fs.readFile("./readme.txt",(err,data)=>{
    if(err) return;
    
    console.log(data);
    
})

// alternative method to handle large file's reading

const alternativeRead = fs.createReadStream("./readme.txt");

alternativeRead.on("data",(chunk)=>{
    console.log(chunk);
    
})
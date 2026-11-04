const fs=require('fs')

fs.watch("info.txt",(eventType,filename)=>{
    console.log("Event Type:",eventType);
    console.log("Filename: ",filename);
})
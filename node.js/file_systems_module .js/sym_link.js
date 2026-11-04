import fs from 'fs'

fs.symlink("notes.txt", "link.txt",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Symbolic Limk created");

})
fs.stat("link.txt", (err)=> {
 if (err){
    console.log(err);
    return
 }
 console.log(Stats.isSymbolic());
   
 })

 fs.rename("notes.txt", "new_notes.txt", ()=>{
  
 })
function greet(username,callbacks){
    console.log("Welcome")
    if(typeof callback==="fnctioon"){
        callback(username)
    }
}
greet("Shrija",(username)=>{
    console.log("Hello",username)
})
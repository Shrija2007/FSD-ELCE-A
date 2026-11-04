import EventEmitter from "node:events";

const emitter = new EventEmitter()

//Event registration

emitter.on("",(orderName,)=>{
    console.log(`Order ${orderName} Placed Successflly`)
}) 


emitter.emit("orderPlaced" ,)




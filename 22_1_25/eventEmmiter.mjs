
import eventEmitter from "events"

const listenerInstance = new eventEmitter()

listenerInstance.on('Listener1',(data)=>{
    console.log(`Listened ${data}`);
    
})

listenerInstance.emit('Listener1','1')
var mosca = require('mosca') //Mosca is a Node.js MQTT broker
var settings = {port: 1234}
var broker = new mosca.Server(settings)

broker.on('ready', ()=>{
    console.log("Broker is ready")
})
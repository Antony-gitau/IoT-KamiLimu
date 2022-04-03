var mqtt = require('mqtt') //MQTT.js is an MQTT client for Node.js 
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'created a topic'

client.on('message',()=>{
    message = message.toString()
    console.log(message)
})

client.on('connect',()=>{
    client.subscribe(topic)
})
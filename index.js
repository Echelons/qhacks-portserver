var SerialPort = require('serialport');
var mqtt = require('mqtt');
var url = require('url');
// Replace with desired com port
var SERIAL_PORT_LOCATION = "/dev/cu.Bluetooth-Incoming-Port";
var MQTT_HOST = "mqtt://m13.cloudmqtt.com";
var MQTT_PORT = 13244;
var MQTT_USER = "edison";
var MQTT_PASSWORD = "qhacks"
var MQTT_TOPIC = "/qhacks/alternativehacks";

var serialport = new SerialPort(SERIAL_PORT_LOCATION);

var opts = {
  port: MQTT_PORT,
  clientId: "web_" + parseInt(Math.random() * 100, 10),
  username: MQTT_USER,
  password: MQTT_PASSWORD
}

var client = mqtt.connect(MQTT_HOST, opts);

client.on('connect', function () {
  console.log("connect");
});

serialport.on('open', function() {
  console.log("Serial Port Opened");
  serialport.on('data', function(data) {
    console.log(data[0]);
  });
});

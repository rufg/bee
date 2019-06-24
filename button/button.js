module.exports = function (RED) {
    "use strict";

    function ButtonNode(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function (msg) {
            var fs = require('fs');

            try {
                fs.readFile('/tmp/i2c_10', 'utf8', function (error, contents) {
                    if (error == null) {
                        node.status({ fill: "green", shape: "dot", text: "connected" });
                        msg.payload = contents;
                        node.send(msg);
                    }
                    else {
                        node.status({ fill: "red", shape: "dot", text: "disconnected" });
                        node.error(stderr);
                    }
                })
            } catch (error) {
                node.status({ fill: "red", shape: "dot", text: "disconnected" });
                node.error(error);
            }


            /*var address = 10;

            var exec = require('child_process').exec;
            exec('/home/pi/bee/_tools/i2c/readByte.py ' + address, function callback(error, stdout, stderr) {
                if (error == null) {
                    node.status({ fill: "green", shape: "dot", text: "connected" });
                    msg.payload = stdout;
                    node.send(msg);
                }
                else {
                    node.status({ fill: "red", shape: "dot", text: "disconnected" });
                    node.error(stderr);
                }
            });*/
        });
    }
    RED.nodes.registerType("button", ButtonNode);
}

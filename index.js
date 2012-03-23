var server          = require("./server");
var router          = require("./router");
var requestHandlers = require("./request_handlers");

var handle = {};
handle["/"] = requestHandlers.action;

server.start(router.route, handle);

function action(response) {
    console.log("Request handler 'action' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Action called...");
    response.end();
}

exports.action = action;

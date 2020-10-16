const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    console.log("User connected");

    socket.on("message", result => {
        if (result.body.result !== "User Wins") {
            if (result.body.result !== "Equals") {
                const body = calculateValueBot(result);
                const message = {
                    body,
                    from: "Bot"
                };
                if (result.body.event === "start") {
                    setTimeout(function () {
                        socket.emit("message", message);
                    }, 750);
                } else {
                    setTimeout(function () {
                        socket.emit("message", message);
                    }, 2000);
                }
            }
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

function calculateValueBot(body) {
    const random = Math.floor(Math.random() * 3) - 1;
    const num = Math.floor([(random + parseInt(body.body.result)) / 3]);
    if (num === 1) {
        const resultNumber = {
            added: "Bot Wins",
            result: "Bot Wins",
            random: random
        };
        return resultNumber;
    } else if (num < 1) {
        const resultNumber = {
            added: "Equals",
            result: "Equals",
            random: random
        };
        return resultNumber;
    } else {
        const resultNumber = {
            added:
                "[(" + random + "+" + parseInt(body.body.result) + ") / 3] = " + num,
            result: num,
            random: random
        };
        return resultNumber;
    }
}

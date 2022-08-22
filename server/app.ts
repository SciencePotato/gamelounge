import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "./config/default";
import logger from "./utils/logger";

const port = config.port;
const host = config.host;
const corsOrigin = config.corsOrigin;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
});

app.get("/", (_, res) =>
    res.send("Server is Down")
);

httpServer.listen(port, host, () => {
  logger.info("Hi");
});
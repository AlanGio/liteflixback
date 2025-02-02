import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import router from "../config/routes.js";

const server = express();

server.use(cors());

router.use(compression());
router.use(bodyParser.json({ limit: "10mb" }));
router.use(bodyParser.urlencoded({ extended: true }));

server.use("/", router);

export default server;

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";

const server = express();
import router from "../config/routes.js";

router.use(compression());

router.use(cors());
router.use(bodyParser.json({ limit: "10mb" }));
router.use(bodyParser.urlencoded({ extended: true }));

server.use("/", router);

export default server;

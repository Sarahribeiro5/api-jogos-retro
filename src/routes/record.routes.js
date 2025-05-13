import express from "express";

import RecordController from "../controllers/record.controller.js";

const RecordRouter = express.Router();

gameRouter.get("/", RecordController.findAll);
gameRouter.post("/", RecordController.create);

export default recordRouter;
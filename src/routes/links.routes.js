import { Router } from "express";
import LinkController from "../controllers/link.controller";
import LinkModel from "../models/link.model";

const router = Router();

const controller = new LinkController(LinkModel);

router.get("/", (req, res) => controller.findAll(req, res));
router.get("/:id", (req, res) => controller.findById(req, res));
router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.remove(req, res));

export default router;
